import hero1Img from '../assets/images/hero-1.jpg';
import hero2Img from '../assets/images/hero-2.jpg';
import hero3Img from '../assets/images/hero-3.jpg';
import plumbingImg from '../assets/images/service-plumbing.jpg';
import electricalImg from '../assets/images/service-electrical.jpg';
import paintingImg from '../assets/images/service-painting.jpg';
import maintenanceImg from '../assets/images/service-maintenance.jpg';
import aboutTeamImg from '../assets/images/about-team.jpg';
import emergencyImg from '../assets/images/emergency-24h.jpg';

const pubImg = (filename: string) => `/images/${encodeURIComponent(filename)}`;

export interface HeroSlide {
  id: number;
  eyebrow: string;
  headline: string;
  subtitle: string;
  image: string;
  imageAlt: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  imageAlt: string;
  overview: string;
  highlights: string[];
  responseTime: string;
  galleryImages: { src: string; caption: string }[];
}

export interface ProjectGalleryItem {
  id: string;
  title: string;
  category: 'Canalização' | 'Electricidade' | 'Pintura' | 'Remodelação & Obras';
  serviceValue: string;
  image: string;
  alt: string;
}

export interface DifferentiatorItem {
  id: string;
  title: string;
  description: string;
  iconName: 'shield' | 'award' | 'users' | 'clock';
}

export const CONTACT_INFO = {
  phoneDisplay: '+258 860 275 828',
  phoneRaw: '+258860275828',
  whatsappNumber: '258860275828',
  websiteDisplay: 'www.wagaservices.com',
  websiteUrl: 'https://www.wagaservices.com',
  email: 'contacto@wagaservices.com',
  location: 'Moçambique',
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    eyebrow: 'WAGA SERVICES',
    headline: 'Soluções profissionais para o seu lar e negócio.',
    subtitle: 'Qualidade, segurança e profissionalismo em cada serviço.',
    image: hero1Img,
    imageAlt: 'Equipa técnica da Waga Services em inspecção num edifício moderno',
  },
  {
    id: 2,
    eyebrow: 'WAGA SERVICES',
    headline: 'Qualidade e confiança em cada intervenção.',
    subtitle: 'Qualidade, segurança e profissionalismo em cada serviço.',
    image: hero2Img,
    imageAlt: 'Técnico especializado a executar instalação eléctrica de precisão',
  },
  {
    id: 3,
    eyebrow: 'WAGA SERVICES',
    headline: 'Assistência e manutenção 24 horas.',
    subtitle: 'Qualidade, segurança e profissionalismo em cada serviço.',
    image: hero3Img,
    imageAlt: 'Técnico de assistência 24 horas preparado para intervenção rápida',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'canalizacao',
    title: 'Canalização',
    shortDescription: 'Instalação, reparação e manutenção de sistemas hidráulicos.',
    image: plumbingImg,
    imageAlt: 'Técnico a calibrar sistema hidráulico moderno com precisão',
    overview:
      'Executamos projectos completos de redes hidráulicas residenciais e empresariais, desde tubagem PPR embutida até centrais de contadores, válvulas redutoras de pressão e sistemas de reservatórios.',
    highlights: [
      'Instalação e renovação de redes de água fria, quente e esgotos em PPR e PVC',
      'Montagem de contadores, válvulas de corte, manómetros e colectores hidráulicos',
      'Instalação de depósitos PLASTEX e bombas de pressurização automática',
      'Detecção e reparação de fugas, infiltrações e desentupimentos técnicos',
    ],
    responseTime: 'Assistência programada ou urgência 24h',
    galleryImages: [
      {
        src: pubImg('Instalação Hidráulica com Contadores e Válvulas.png'),
        caption: 'Central hidráulica com contadores e válvulas de pressão',
      },
      {
        src: pubImg('Instalação de Canalização em Parede de Cimento.png'),
        caption: 'Rede de abastecimento e esgoto embutida em alvenaria',
      },
    ],
  },
  {
    id: 'electricidade',
    title: 'Electricidade',
    shortDescription: 'Instalações eléctricas, reparações e assistência técnica.',
    image: electricalImg,
    imageAlt: 'Especialista em electricidade a verificar quadro de distribuição moderno',
    overview:
      'Soluções eléctricas seguras e conformes às normas técnicas para residências, escritórios, condomínios e espaços comerciais, desde a infra-estrutura em obra até quadros de distribuição.',
    highlights: [
      'Passagem de condutas PVC, caixas de derivação e cablagem estruturada',
      'Montagem e modernização de quadros eléctricos e sistemas de protecção',
      'Iluminação interior, exterior, arquitectónica e eficiente (LED)',
      'Diagnóstico de avarias, curtos-circuitos e sistemas de energia de reserva',
    ],
    responseTime: 'Intervenção certificada e rápida',
    galleryImages: [
      {
        src: pubImg('Instalação Elétrica com Condutas PVC.png'),
        caption: 'Infra-estrutura eléctrica organizada com condutas e caixa de quadro',
      },
    ],
  },
  {
    id: 'pintura',
    title: 'Pintura',
    shortDescription: 'Pintura interior, exterior e acabamentos profissionais.',
    image: paintingImg,
    imageAlt: 'Profissional a aplicar pintura interior de acabamento fino em espaço moderno',
    overview:
      'Transformamos ambientes interiores e fachadas exteriores com preparação rigorosa de superfícies, tintas resistentes ao clima moçambicano e acabamentos limpos e duradouros.',
    highlights: [
      'Pintura interior de residências, escritórios e espaços comerciais',
      'Pintura, tratamento e impermeabilização de fachadas exteriores',
      'Regularização de paredes, tratamento de fissuras e humidade',
      'Protecção integral do espaço e limpeza final minuciosa',
    ],
    responseTime: 'Orçamento detalhado após avaliação',
    galleryImages: [
      {
        src: pubImg('Escada e Balde de Tinta na Fachada.png'),
        caption: 'Pintura e acabamento profissional de fachada exterior',
      },
    ],
  },
  {
    id: 'manutencao',
    title: 'Manutenção',
    shortDescription: 'Manutenção preventiva, correctiva e serviços de emergência 24 horas.',
    image: maintenanceImg,
    imageAlt: 'Engenheiro de manutenção a inspeccionar equipamentos técnicos num edifício moderno',
    overview:
      'Planos contínuos e intervenções pontuais para manter imóveis, sistemas de abastecimento de água e infra-estruturas empresariais sempre operacionais, seguros e valorizados.',
    highlights: [
      'Contratos de manutenção preventiva para empresas, condomínios e instituições',
      'Inspecções periódicas de canalização, electricidade, bombagem e acabamentos',
      'Manutenção correctiva rápida com equipa multidisciplinar',
      'Linha permanente de emergência 24 horas por dia, 7 dias por semana',
    ],
    responseTime: 'Disponibilidade contínua 24/7',
    galleryImages: [
      {
        src: pubImg('Sistema de Água PLASTEX no Terraço.png'),
        caption: 'Sistema de reservatório e bomba de pressão no terraço',
      },
    ],
  },
  {
    id: 'sistemas-agua',
    title: 'Sistemas de Água e Bombagem',
    shortDescription: 'Instalação de reservatórios, bombas de pressão e redes de abastecimento.',
    image: pubImg('Sistema de Água PLASTEX no Terraço.png'),
    imageAlt: 'Sistema de reservatório PLASTEX com bomba de pressurização instalado no terraço',
    overview:
      'Projecto e instalação completa de sistemas autónomos de reserva e pressurização de água para garantir pressão constante em moradias, edifícios e empresas.',
    highlights: [
      'Instalação de tanques de água PLASTEX em terraços, torres ou solo',
      'Ligação de eletrobombas com pressostato automático e manómetro',
      'Quadros hidráulicos com válvulas de retenção e bypass técnico',
      'Manutenção, higienização e calibração de sistemas existentes',
    ],
    responseTime: 'Instalação rápida chave na mão',
    galleryImages: [
      {
        src: pubImg('Sistema de Água PLASTEX no Terraço.png'),
        caption: 'Instalação de reservatório PLASTEX com bomba e tubagem PPR',
      },
      {
        src: pubImg('Instalação Hidráulica com Contadores e Válvulas.png'),
        caption: 'Controlo hidráulico com manómetros e válvulas de corte',
      },
    ],
  },
  {
    id: 'remodelacao-pavimentacao',
    title: 'Remodelação e Pavimentação',
    shortDescription: 'Renovação de casas de banho, cozinhas, azulejos e pavimentação exterior.',
    image: pubImg('Casa de banho moderna com azulejos ondulados.png'),
    imageAlt: 'Casa de banho moderna remodelada com revestimento ondulado e acabamentos premium',
    overview:
      'Executamos remodelações completas de interiores e obras exteriores com elevado padrão estético, desde a preparação da base até à aplicação de revestimentos, loiças e pavimentos.',
    highlights: [
      'Remodelação integral de casas de banho modernas e cozinhas',
      'Remoção e assentamento de mosaicos, azulejos e revestimentos decorativos',
      'Pavimentação exterior em blocos de betão (pavê) e regularização de pátios',
      'Coordenação integrada de alvenaria, hidráulica, electricidade e pintura',
    ],
    responseTime: 'Acompanhamento de obra do início ao fim',
    galleryImages: [
      {
        src: pubImg('Casa de banho moderna com azulejos ondulados.png'),
        caption: 'Casa de banho moderna finalizada pela nossa equipa',
      },
      {
        src: pubImg('Renovação de cozinha com azulejos partidos.png'),
        caption: 'Preparação e substituição integral de pavimento em cozinha',
      },
      {
        src: pubImg('Caminho de pavimento em obra.png'),
        caption: 'Execução de caminho exterior com blocos de pavimento',
      },
      {
        src: pubImg('Pátio Moderno com Portão de Madeira.png'),
        caption: 'Preparação e nivelamento de pátio residencial moderno',
      },
    ],
  },
];

export const PROJECT_GALLERY: ProjectGalleryItem[] = [
  {
    id: 'proj-hidraulica-contadores',
    title: 'Central Hidráulica com Contadores e Válvulas',
    category: 'Canalização',
    serviceValue: 'Canalização',
    image: pubImg('Instalação Hidráulica com Contadores e Válvulas.png'),
    alt: 'Instalação hidráulica profissional com contadores de água, manómetros e válvulas',
  },
  {
    id: 'proj-canalizacao-parede',
    title: 'Rede de Canalização Embutida',
    category: 'Canalização',
    serviceValue: 'Canalização',
    image: pubImg('Instalação de Canalização em Parede de Cimento.png'),
    alt: 'Instalação de tubagem de água em PPR verde e esgoto em PVC na parede',
  },
  {
    id: 'proj-plastex-terraco',
    title: 'Sistema de Reservatório e Bombagem',
    category: 'Canalização',
    serviceValue: 'Sistemas de Água e Bombagem',
    image: pubImg('Sistema de Água PLASTEX no Terraço.png'),
    alt: 'Sistema de água PLASTEX com bomba de pressurização instalado no terraço',
  },
  {
    id: 'proj-eletrica-condutas',
    title: 'Infra-Estrutura Eléctrica com Condutas PVC',
    category: 'Electricidade',
    serviceValue: 'Electricidade',
    image: pubImg('Instalação Elétrica com Condutas PVC.png'),
    alt: 'Instalação eléctrica embutida com condutas PVC e caixa de distribuição',
  },
  {
    id: 'proj-pintura-fachada',
    title: 'Pintura e Acabamento de Fachada',
    category: 'Pintura',
    serviceValue: 'Pintura',
    image: pubImg('Escada e Balde de Tinta na Fachada.png'),
    alt: 'Trabalho de pintura exterior em fachada arquitectónica moderna',
  },
  {
    id: 'proj-casa-banho',
    title: 'Casa de Banho Moderna e Revestimentos',
    category: 'Remodelação & Obras',
    serviceValue: 'Remodelação e Pavimentação',
    image: pubImg('Casa de banho moderna com azulejos ondulados.png'),
    alt: 'Casa de banho remodelada com azulejos ondulados, vidro temperado e torneira preta',
  },
  {
    id: 'proj-cozinha-renovacao',
    title: 'Renovação de Pavimento de Cozinha',
    category: 'Remodelação & Obras',
    serviceValue: 'Remodelação e Pavimentação',
    image: pubImg('Renovação de cozinha com azulejos partidos.png'),
    alt: 'Obra de renovação de pavimento em cozinha residencial',
  },
  {
    id: 'proj-pavimento-obra',
    title: 'Pavimentação Exterior em Pavê',
    category: 'Remodelação & Obras',
    serviceValue: 'Remodelação e Pavimentação',
    image: pubImg('Caminho de pavimento em obra.png'),
    alt: 'Aplicação de caminho em blocos de pavimento em obra residencial',
  },
  {
    id: 'proj-patio-moderno',
    title: 'Nivelamento e Acabamento de Pátio',
    category: 'Remodelação & Obras',
    serviceValue: 'Remodelação e Pavimentação',
    image: pubImg('Pátio Moderno com Portão de Madeira.png'),
    alt: 'Pátio residencial moderno preparado para acabamento exterior',
  },
];

export const ABOUT_CONTENT = {
  eyebrow: 'SOBRE A WAGA SERVICES',
  title: 'Profissionalismo em cada detalhe.',
  paragraphs: [
    'A Waga Services dedica-se à prestação de serviços profissionais para residências, empresas e instituições, oferecendo soluções eficientes em canalização, pintura, electricidade e manutenção.',
    'Trabalhamos com compromisso, qualidade e segurança para garantir a satisfação dos nossos clientes.',
  ],
  image: aboutTeamImg,
  imageAlt: 'Equipa de técnicos qualificados da Waga Services em planeamento técnico',
};

export const DIFFERENTIATORS: DifferentiatorItem[] = [
  {
    id: 'qualificados',
    title: 'Profissionais qualificados.',
    description: 'Equipas técnicas experientes, formadas e devidamente equipadas.',
    iconName: 'users',
  },
  {
    id: 'qualidade',
    title: 'Qualidade e segurança.',
    description: 'Procedimentos rigorosos e materiais certificados em cada obra.',
    iconName: 'shield',
  },
  {
    id: 'atendimento',
    title: 'Atendimento personalizado.',
    description: 'Acompanhamento dedicado e soluções ajustadas à sua realidade.',
    iconName: 'award',
  },
  {
    id: 'assistencia',
    title: 'Assistência 24 horas.',
    description: 'Resposta ágil a qualquer hora para situações de emergência.',
    iconName: 'clock',
  },
];

export const EMERGENCY_CONTENT = {
  eyebrow: 'EMERGÊNCIA 24 HORAS',
  title: 'Precisou de assistência? Estamos disponíveis.',
  description:
    'Conte com a Waga Services para serviços de manutenção e assistência de emergência 24 horas.',
  cta: 'Contactar Agora',
  image: emergencyImg,
  imageAlt: 'Técnico da Waga Services a prestar assistência técnica de emergência',
};
