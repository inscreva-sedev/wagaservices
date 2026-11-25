import mongoose, { Document, Schema } from 'mongoose';

export interface IServiceRequest extends Document {
  nome: string;
  telefone: string;
  email: string;
  servico: string;
  descricao: string;
  imagemUrl?: string;
  imagemPublicId?: string;
  estado: 'novo' | 'em_analise' | 'agendado' | 'concluido';
  createdAt: Date;
  updatedAt: Date;
}

const serviceRequestSchema = new Schema<IServiceRequest>(
  {
    nome: { type: String, required: true, trim: true, maxlength: 120 },
    telefone: { type: String, required: true, trim: true, maxlength: 40 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 160 },
    servico: { type: String, required: true, trim: true, maxlength: 100 },
    descricao: { type: String, required: true, trim: true, maxlength: 2000 },
    imagemUrl: { type: String, trim: true },
    imagemPublicId: { type: String, trim: true },
    estado: {
      type: String,
      enum: ['novo', 'em_analise', 'agendado', 'concluido'],
      default: 'novo',
    },
  },
  { timestamps: true }
);

export const ServiceRequest =
  mongoose.models.ServiceRequest ||
  mongoose.model<IServiceRequest>('ServiceRequest', serviceRequestSchema);
