import mongoose, { Document, Schema } from 'mongoose';

export interface IProjectItem extends Document {
  titulo: string;
  categoria: string;
  descricao?: string;
  imagemUrl: string;
  imagemPublicId: string;
  createdAt: Date;
  updatedAt: Date;
}

const projectItemSchema = new Schema<IProjectItem>(
  {
    titulo: { type: String, required: true, trim: true, maxlength: 160 },
    categoria: { type: String, required: true, trim: true, maxlength: 80 },
    descricao: { type: String, trim: true, maxlength: 800 },
    imagemUrl: { type: String, required: true, trim: true },
    imagemPublicId: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

export const ProjectItem =
  mongoose.models.ProjectItem ||
  mongoose.model<IProjectItem>('ProjectItem', projectItemSchema);
