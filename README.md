# WAGA SERVICES — Website Institucional

Website institucional da **WAGA SERVICES** (Moçambique), desenvolvido em React, TypeScript, Tailwind CSS e servidor Express com integração MongoDB Atlas e Cloudinary.

## Funcionalidades

- **Cabeçalho fixo minimalista** com logótipo oficial, navegação suave entre secções e ação direta de contacto.
- **Hero Section em carrossel** com 3 destaques, setas laterais discretas e indicadores.
- **Catálogo de Serviços e Trabalhos em Campo**: Canalização, Electricidade, Pintura, Manutenção, Sistemas de Água e Bombagem, Remodelação e Pavimentação, além de galeria filtrável de projectos executados.
- **Secções Sobre Nós, Diferenciais e Emergência 24h**.
- **Contactos, WhatsApp e Formulário de Solicitação de Serviço** com registo persistente no **MongoDB** e envio opcional de fotografia via **Cloudinary**.

## Configuração

1. Instalar dependências:

```bash
npm install
```

2. Criar um ficheiro `.env` na raiz com base em `.env.example`:

```env
PORT=5000
MONGODB_URI=mongodb+srv://<usuario>:<password>@cluster0.oe0akin.mongodb.net/wagaservicedb?retryWrites=true&w=majority
CLOUDINARY_CLOUD_NAME=seu_cloud_name
CLOUDINARY_API_KEY=sua_api_key
CLOUDINARY_API_SECRET=seu_api_secret
```

## Execução

- **Desenvolvimento (Frontend + API)**:

```bash
npm run dev:full
```

- **Compilar para Produção e Iniciar**:

```bash
npm run build
npm start
```
