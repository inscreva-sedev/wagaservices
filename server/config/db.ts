import dns from 'node:dns';
import mongoose from 'mongoose';

export async function connectDatabase(): Promise<void> {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('MONGODB_URI não está definida nas variáveis de ambiente (.env).');
  }

  // Fallback public DNS resolvers for Windows environments where local DNS blocks SRV lookups
  if (uri.startsWith('mongodb+srv://')) {
    try {
      dns.setServers(['8.8.8.8', '1.1.1.1']);
    } catch {
      // Keep default OS DNS resolvers if setServers is unavailable
    }
  }

  mongoose.set('strictQuery', true);

  await mongoose.connect(uri, {
    serverSelectionTimeoutMS: 10000,
  });

  console.log(`[MongoDB] Ligado com sucesso à base de dados: ${mongoose.connection.name}`);
}
