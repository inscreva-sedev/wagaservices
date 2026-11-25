import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';

export function configureCloudinary(): void {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    console.warn('[Cloudinary] Credenciais incompletas no .env; uploads de imagem ficarão desativados.');
    return;
  }

  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
    secure: true,
  });

  console.log(`[Cloudinary] Configurado para cloud: ${cloudName}`);
}

export function uploadBufferToCloudinary(
  fileBuffer: Buffer,
  folder = 'waga-services/solicitacoes'
): Promise<UploadApiResponse> {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: 'image',
        transformation: [{ quality: 'auto', fetch_format: 'auto' }],
      },
      (error, result) => {
        if (error || !result) {
          reject(error ?? new Error('Falha ao enviar imagem para o Cloudinary.'));
          return;
        }
        resolve(result);
      }
    );

    stream.end(fileBuffer);
  });
}

export { cloudinary };
