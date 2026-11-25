import 'dotenv/config';
import path from 'node:path';
import fs from 'node:fs';
import express, { Request, Response } from 'express';
import cors from 'cors';
import multer from 'multer';
import mongoose from 'mongoose';
import { connectDatabase } from './config/db';
import { configureCloudinary, uploadBufferToCloudinary } from './config/cloudinary';
import { ServiceRequest } from './models/ServiceRequest';
import { ProjectItem } from './models/ProjectItem';

const app = express();
const PORT = Number(process.env.PORT) || 5000;

configureCloudinary();

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 8 * 1024 * 1024 }, // 8 MB max per image
  fileFilter: (_req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Apenas ficheiros de imagem são permitidos.'));
    }
  },
});

// Health Check
app.get('/api/health', (_req: Request, res: Response) => {
  const readyState = mongoose.connection.readyState;
  const states: Record<number, string> = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting',
  };

  res.json({
    ok: readyState === 1,
    database: states[readyState] ?? 'unknown',
    dbName: mongoose.connection.name || null,
    cloudinaryConfigured: Boolean(
      process.env.CLOUDINARY_CLOUD_NAME &&
        process.env.CLOUDINARY_API_KEY &&
        process.env.CLOUDINARY_API_SECRET
    ),
  });
});

// Create Service Request (with optional photo uploaded to Cloudinary)
app.post('/api/solicitacoes', upload.single('foto'), async (req: Request, res: Response) => {
  try {
    const { nome, telefone, email, servico, descricao } = req.body as Record<string, string>;

    if (!nome?.trim() || !telefone?.trim() || !email?.trim() || !servico?.trim() || !descricao?.trim()) {
      res.status(400).json({
        ok: false,
        message: 'Preencha todos os campos obrigatórios: nome, telefone, e-mail, serviço e descrição.',
      });
      return;
    }

    if (mongoose.connection.readyState !== 1) {
      res.status(503).json({
        ok: false,
        message: 'Ligação à base de dados temporariamente indisponível.',
      });
      return;
    }

    let imagemUrl: string | undefined;
    let imagemPublicId: string | undefined;

    if (req.file) {
      const uploaded = await uploadBufferToCloudinary(
        req.file.buffer,
        'waga-services/solicitacoes'
      );
      imagemUrl = uploaded.secure_url;
      imagemPublicId = uploaded.public_id;
    }

    const created = await ServiceRequest.create({
      nome: nome.trim(),
      telefone: telefone.trim(),
      email: email.trim(),
      servico: servico.trim(),
      descricao: descricao.trim(),
      imagemUrl,
      imagemPublicId,
    });

    res.status(201).json({
      ok: true,
      message: 'Solicitação registada com sucesso.',
      data: {
        id: created._id,
        protocolo: `WAGA-${String(created._id).slice(-6).toUpperCase()}`,
        nome: created.nome,
        servico: created.servico,
        imagemUrl: created.imagemUrl,
        createdAt: created.createdAt,
      },
    });
  } catch (error) {
    console.error('[POST /api/solicitacoes] Erro:', error);
    res.status(500).json({
      ok: false,
      message: error instanceof Error ? error.message : 'Erro interno ao registar a solicitação.',
    });
  }
});

// List recent service requests
app.get('/api/solicitacoes', async (_req: Request, res: Response) => {
  try {
    const items = await ServiceRequest.find().sort({ createdAt: -1 }).limit(50).lean();
    res.json({ ok: true, count: items.length, data: items });
  } catch (error) {
    console.error('[GET /api/solicitacoes] Erro:', error);
    res.status(500).json({ ok: false, message: 'Erro ao listar solicitações.' });
  }
});

// Upload project image to Cloudinary + save metadata to MongoDB
app.post('/api/projetos', upload.single('imagem'), async (req: Request, res: Response) => {
  try {
    const { titulo, categoria, descricao } = req.body as Record<string, string>;
    if (!titulo?.trim() || !categoria?.trim() || !req.file) {
      res.status(400).json({
        ok: false,
        message: 'Informe título, categoria e envie uma imagem.',
      });
      return;
    }

    const uploaded = await uploadBufferToCloudinary(req.file.buffer, 'waga-services/projetos');
    const created = await ProjectItem.create({
      titulo: titulo.trim(),
      categoria: categoria.trim(),
      descricao: descricao?.trim(),
      imagemUrl: uploaded.secure_url,
      imagemPublicId: uploaded.public_id,
    });

    res.status(201).json({ ok: true, data: created });
  } catch (error) {
    console.error('[POST /api/projetos] Erro:', error);
    res.status(500).json({ ok: false, message: 'Erro ao guardar projeto.' });
  }
});

app.get('/api/projetos', async (_req: Request, res: Response) => {
  try {
    const items = await ProjectItem.find().sort({ createdAt: -1 }).lean();
    res.json({ ok: true, count: items.length, data: items });
  } catch (error) {
    console.error('[GET /api/projetos] Erro:', error);
    res.status(500).json({ ok: false, message: 'Erro ao carregar projetos.' });
  }
});

// Serve built React app in production
const distDir = path.resolve(process.cwd(), 'dist');
if (fs.existsSync(distDir)) {
  app.use(express.static(distDir));
  app.use((_req: Request, res: Response) => {
    res.sendFile(path.join(distDir, 'index.html'));
  });
}

async function startServer() {
  try {
    await connectDatabase();
  } catch (err) {
    console.error('[MongoDB] Falha na ligação inicial:', err);
  }

  app.listen(PORT, () => {
    console.log(`[WAGA SERVICES API] Servidor a correr em http://localhost:${PORT}`);
  });
}

startServer();
