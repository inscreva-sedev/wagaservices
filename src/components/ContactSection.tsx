import React, { useState, useEffect, useRef } from 'react';
import {
  Phone,
  Globe,
  MessageCircle,
  CheckCircle2,
  Send,
  Paperclip,
  X,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { CONTACT_INFO, SERVICES } from '../data/wagaData';

interface ContactSectionProps {
  preselectedService: string;
}

interface FormState {
  nome: string;
  telefone: string;
  email: string;
  servico: string;
  descricao: string;
}

interface SubmissionReceipt {
  protocolo: string;
  nome: string;
  servico: string;
  imagemUrl?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const [form, setForm] = useState<FormState>({
    nome: '',
    telefone: '',
    email: '',
    servico: preselectedService || 'Canalização',
    descricao: '',
  });
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [receipt, setReceipt] = useState<SubmissionReceipt | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setForm((prev) => ({ ...prev, servico: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (file && file.size > 8 * 1024 * 1024) {
      setErrorMessage('A fotografia não pode exceder 8 MB.');
      return;
    }
    setPhotoFile(file);
    if (errorMessage) setErrorMessage(null);
  };

  const clearFile = () => {
    setPhotoFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const buildWhatsAppLink = (includeFormData: boolean) => {
    if (!includeFormData || !form.nome.trim()) {
      const defaultMsg = encodeURIComponent(
        'Olá WAGA SERVICES, gostaria de solicitar informações sobre os vossos serviços.'
      );
      return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${defaultMsg}`;
    }

    const message = [
      `Olá WAGA SERVICES, gostaria de solicitar um serviço:`,
      receipt?.protocolo ? `• Protocolo: ${receipt.protocolo}` : null,
      `• Nome: ${form.nome}`,
      `• Telefone: ${form.telefone}`,
      form.email ? `• E-mail: ${form.email}` : null,
      `• Serviço pretendido: ${form.servico}`,
      `• Descrição: ${form.descricao}`,
      receipt?.imagemUrl ? `• Fotografia: ${receipt.imagemUrl}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage(null);

    try {
      const payload = new FormData();
      payload.append('nome', form.nome);
      payload.append('telefone', form.telefone);
      payload.append('email', form.email);
      payload.append('servico', form.servico);
      payload.append('descricao', form.descricao);
      if (photoFile) {
        payload.append('foto', photoFile);
      }

      const response = await fetch('/api/solicitacoes', {
        method: 'POST',
        body: payload,
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.message || 'Não foi possível registar a solicitação.');
      }

      setReceipt({
        protocolo: result.data.protocolo,
        nome: result.data.nome,
        servico: result.data.servico,
        imagemUrl: result.data.imagemUrl,
      });
    } catch (err) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Erro de ligação ao servidor. Pode também enviar diretamente pelo WhatsApp.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setReceipt(null);
    setErrorMessage(null);
    clearFile();
    setForm({
      nome: '',
      telefone: '',
      email: '',
      servico: 'Canalização',
      descricao: '',
    });
  };

  return (
    <section id="contactos" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Left Column: Direct Info & WhatsApp */}
          <div className="lg:col-span-5">
            <span className="text-[12px] font-semibold tracking-[0.22em] uppercase text-[#5C5E62]">
              CONTACTOS
            </span>
            <h2 className="mt-3 text-[32px] sm:text-[42px] font-semibold leading-[1.14] tracking-[-0.02em] text-[#171A20]">
              Vamos resolver as suas necessidades.
            </h2>
            <p className="mt-4 max-w-md text-[15.5px] leading-relaxed text-[#5C5E62]">
              Entre em contacto connosco por telefone, WhatsApp ou preencha o formulário para
              receber atendimento prioritário da nossa equipa técnica.
            </p>

            {/* Contact Details */}
            <div className="mt-10 space-y-6 border-t border-black/[0.08] pt-8">
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="group flex items-start gap-4 transition-opacity hover:opacity-80"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#F4F4F4] text-[#171A20]">
                  <Phone className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <div>
                  <span className="block text-[12px] font-medium uppercase tracking-wider text-[#5C5E62]">
                    Telefone / Emergência 24h
                  </span>
                  <span className="mt-0.5 block text-[18px] font-semibold text-[#171A20]">
                    {CONTACT_INFO.phoneDisplay}
                  </span>
                </div>
              </a>

              <a
                href={CONTACT_INFO.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 transition-opacity hover:opacity-80"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#F4F4F4] text-[#171A20]">
                  <Globe className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <div>
                  <span className="block text-[12px] font-medium uppercase tracking-wider text-[#5C5E62]">
                    Website
                  </span>
                  <span className="mt-0.5 block text-[17px] font-medium text-[#171A20]">
                    {CONTACT_INFO.websiteDisplay}
                  </span>
                </div>
              </a>
            </div>

            {/* Direct WhatsApp Button */}
            <div className="mt-9">
              <a
                href={buildWhatsAppLink(false)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2.5 rounded-[4px] bg-[#171A20] px-7 text-[14px] font-medium text-white transition-all duration-200 hover:bg-[#2E323B] active:scale-[0.98]"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.8} />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Service Request Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-black/[0.06] bg-[#FAFAFA] p-6 sm:p-10">
              <h3 className="text-[20px] font-semibold tracking-[-0.01em] text-[#171A20]">
                Solicitar Serviço
              </h3>
              <p className="mt-1 text-[14px] text-[#5C5E62]">
                Indique os detalhes da sua necessidade para agendamento ou orçamento.
              </p>

              {receipt ? (
                <div className="mt-8 rounded-xl border border-black/[0.08] bg-white p-7 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#3E6AE1]/10 text-[#3E6AE1]">
                    <CheckCircle2 className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <span className="mt-4 inline-block rounded-full bg-[#F4F4F4] px-3 py-1 text-[12px] font-semibold tracking-wider text-[#171A20]">
                    {receipt.protocolo}
                  </span>
                  <h4 className="mt-3 text-[19px] font-semibold text-[#171A20]">
                    Pedido registado com sucesso
                  </h4>
                  <p className="mx-auto mt-2 max-w-md text-[14.5px] leading-relaxed text-[#5C5E62]">
                    Obrigado, <strong className="font-medium text-[#171A20]">{receipt.nome}</strong>.
                    O seu pedido de <strong className="font-medium text-[#171A20]">{receipt.servico}</strong>{' '}
                    foi guardado no nosso sistema. Para atendimento imediato, envie também pelo
                    WhatsApp.
                  </p>
                  <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                    <a
                      href={buildWhatsAppLink(true)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 items-center justify-center gap-2 rounded-[4px] bg-[#3E6AE1] px-6 text-[13.5px] font-medium text-white transition-colors hover:bg-[#3457B1]"
                    >
                      <MessageCircle className="h-4 w-4" strokeWidth={1.8} />
                      <span>Enviar pedido no WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex h-10 items-center justify-center rounded-[4px] border border-black/15 bg-white px-6 text-[13.5px] font-medium text-[#171A20] transition-colors hover:bg-[#F4F4F4]"
                    >
                      Novo Pedido
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                  {errorMessage && (
                    <div
                      role="alert"
                      className="flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-[13.5px] text-red-800"
                    >
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.8} />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="nome"
                        className="block text-[13px] font-medium text-[#171A20]"
                      >
                        Nome
                      </label>
                      <input
                        id="nome"
                        name="nome"
                        type="text"
                        required
                        value={form.nome}
                        onChange={handleChange}
                        placeholder="O seu nome completo"
                        className="mt-1.5 h-11 w-full rounded-[4px] border border-black/10 bg-white px-3.5 text-[14.5px] text-[#171A20] placeholder:text-[#9CA3AF] focus:border-[#171A20] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="telefone"
                        className="block text-[13px] font-medium text-[#171A20]"
                      >
                        Telefone
                      </label>
                      <input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        required
                        value={form.telefone}
                        onChange={handleChange}
                        placeholder="+258 84 000 0000"
                        className="mt-1.5 h-11 w-full rounded-[4px] border border-black/10 bg-white px-3.5 text-[14.5px] text-[#171A20] placeholder:text-[#9CA3AF] focus:border-[#171A20] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[13px] font-medium text-[#171A20]"
                      >
                        E-mail
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="nome@empresa.co.mz"
                        className="mt-1.5 h-11 w-full rounded-[4px] border border-black/10 bg-white px-3.5 text-[14.5px] text-[#171A20] placeholder:text-[#9CA3AF] focus:border-[#171A20] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="servico"
                        className="block text-[13px] font-medium text-[#171A20]"
                      >
                        Serviço pretendido
                      </label>
                      <select
                        id="servico"
                        name="servico"
                        value={form.servico}
                        onChange={handleChange}
                        className="mt-1.5 h-11 w-full rounded-[4px] border border-black/10 bg-white px-3.5 text-[14.5px] text-[#171A20] focus:border-[#171A20] focus:outline-none transition-colors"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Emergência 24 Horas">Emergência 24 Horas</option>
                        <option value="Outro Serviço">Outro Serviço</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="descricao"
                      className="block text-[13px] font-medium text-[#171A20]"
                    >
                      Descrição da necessidade
                    </label>
                    <textarea
                      id="descricao"
                      name="descricao"
                      rows={4}
                      required
                      value={form.descricao}
                      onChange={handleChange}
                      placeholder="Descreva brevemente o serviço pretendido e a localização..."
                      className="mt-1.5 w-full rounded-[4px] border border-black/10 bg-white p-3.5 text-[14.5px] text-[#171A20] placeholder:text-[#9CA3AF] focus:border-[#171A20] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Optional Image Upload (stored on Cloudinary) */}
                  <div>
                    <input
                      ref={fileInputRef}
                      id="foto-anexo"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="sr-only"
                    />
                    <div className="flex flex-wrap items-center gap-3">
                      <label
                        htmlFor="foto-anexo"
                        className="inline-flex h-9 cursor-pointer items-center gap-2 rounded-[4px] border border-black/15 bg-white px-3.5 text-[13px] font-medium text-[#171A20] transition-colors hover:bg-[#F4F4F4]"
                      >
                        <Paperclip className="h-3.5 w-3.5" strokeWidth={1.75} />
                        <span>Anexar fotografia (opcional)</span>
                      </label>

                      {photoFile && (
                        <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[12.5px] text-[#171A20] border border-black/10">
                          <span className="max-w-[200px] truncate">{photoFile.name}</span>
                          <button
                            type="button"
                            onClick={clearFile}
                            aria-label="Remover fotografia"
                            className="text-[#5C5E62] hover:text-[#171A20]"
                          >
                            <X className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-[4px] bg-[#3E6AE1] px-8 text-[14px] font-medium text-white transition-all duration-200 hover:bg-[#3457B1] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-65"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>A enviar...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" strokeWidth={1.8} />
                          <span>Enviar Solicitação</span>
                        </>
                      )}
                    </button>

                    <a
                      href={buildWhatsAppLink(true)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-[4px] border border-black/15 bg-white px-6 text-[14px] font-medium text-[#171A20] transition-colors hover:bg-[#F4F4F4]"
                    >
                      <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
                      <span>Enviar via WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
