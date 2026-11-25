import dns from 'node:dns';
import mongoose from 'mongoose';

let connectionPromise: Promise<typeof mongoose> | null = null;

export async function connectDatabase(): Promise<typeof mongoose> {
  if (mongoose.connection.readyState === 1) {
    return mongoose;
  }

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

  if (!connectionPromise) {
    connectionPromise = mongoose
      .connect(uri, {
        serverSelectionTimeoutMS: 10000,
      })
      .then((conn) => {
        console.log(`[MongoDB] Ligado com sucesso à base de dados: ${conn.connection.name}`);
        return conn;
      })
      .catch((err) => {
        connectionPromise = null;
        throw err;
      });
  }

  return connectionPromise;
}
