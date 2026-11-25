import path from 'node:path';
import fs from 'node:fs';
import express, { Request, Response } from 'express';
import { app } from './app';
import { connectDatabase } from './config/db';

const PORT = Number(process.env.PORT) || 5000;

// Serve built React app in standalone Node/VPS mode
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
