const pubImg = (filename: string) => `/images/${encodeURIComponent(filename)}`;
const execImg = (filename: string) =>
  `/images/${encodeURIComponent('servicos executados')}/${encodeURIComponent(filename)}`;

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

export type ProjectCategory =
  | 'Canalização'
  | 'Casas de Banho'
  | 'Electricidade'
  | 'Pintura'
  | 'Remodelação & Obras';

export interface ProjectGalleryItem {
  id: string;
  title: string;
  category: ProjectCategory;
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
    image: pubImg('Casa de banho moderna com azulejos ondulados.png'),
    imageAlt: 'Acabamento moderno de casa de banho executado pela Waga Services',
  },
  {
    id: 2,
    eyebrow: 'WAGA SERVICES',
    headline: 'Qualidade e confiança em cada intervenção.',
    subtitle: 'Qualidade, segurança e profissionalismo em cada serviço.',
    image: pubImg('Sistema de Água PLASTEX no Terraço.png'),
    imageAlt: 'Sistema profissional de reservatório de água PLASTEX e bombagem no terraço',
  },
  {
    id: 3,
    eyebrow: 'WAGA SERVICES',
    headline: 'Assistência e manutenção 24 horas.',
    subtitle: 'Qualidade, segurança e profissionalismo em cada serviço.',
    image: pubImg('Instalação Hidráulica com Contadores e Válvulas.png'),
    imageAlt: 'Central hidráulica instalada com contadores e válvulas de precisão',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'canalizacao',
    title: 'Canalização',
    shortDescription: 'Instalação, reparação e manutenção de sistemas hidráulicos.',
    image: pubImg('Instalação Hidráulica com Contadores e Válvulas.png'),
    imageAlt: 'Central hidráulica com contadores e válvulas instalada pela Waga Services',
    overview:
      'Executamos projectos completos de redes hidráulicas residenciais e empresariais, desde tubagem PPR embutida até centrais de contadores, sistemas embutidos Roca e reservatórios de água.',
    highlights: [
      'Instalação e renovação de redes de água fria, quente e esgotos em PPR e PVC',
      'Montagem de contadores, válvulas de corte, manómetros e colectores hidráulicos',
      'Instalação de autoclismos embutidos e cisternas Roca',
      'Detecção e reparação de fugas, infiltrações e desentupimentos técnicos',
    ],
    responseTime: 'Assistência programada ou urgência 24h',
    galleryImages: [
      {
        src: pubImg('Instalação Hidráulica com Contadores e Válvulas.png'),
        caption: 'Central hidráulica com contadores e válvulas de pressão',
      },
      {
        src: execImg('Instalação de Sanita Suspensa com Autoclismo Roca.png'),
        caption: 'Instalação técnica de autoclismo embutido Roca',
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
    image: execImg('Quadro Elétrico Organizado na Parede.png'),
    imageAlt: 'Quadro eléctrico organizado e identificado pela equipa Waga Services',
    overview:
      'Soluções eléctricas seguras e conformes às normas técnicas para residências, escritórios, condomínios e espaços comerciais, desde a infra-estrutura em obra até quadros de distribuição.',
    highlights: [
      'Passagem de condutas PVC, caixas de derivação e cablagem estruturada',
      'Montagem e organização de quadros eléctricos e sistemas de protecção',
      'Iluminação interior, exterior, arquitectónica e eficiente (LED)',
      'Diagnóstico de avarias, curtos-circuitos e sistemas de energia de reserva',
    ],
    responseTime: 'Intervenção certificada e rápida',
    galleryImages: [
      {
        src: execImg('Quadro Elétrico Organizado na Parede.png'),
        caption: 'Quadro eléctrico organizado com disjuntores e cablagem identificada',
      },
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
    image: pubImg('Escada e Balde de Tinta na Fachada.png'),
    imageAlt: 'Pintura e acabamento profissional de fachada exterior pela Waga Services',
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
      {
        src: execImg('Alameda Renovada em Tons de Pêssego.png'),
        caption: 'Renovação cromática e acabamento de áreas exteriores',
      },
    ],
  },
  {
    id: 'manutencao',
    title: 'Manutenção',
    shortDescription: 'Manutenção preventiva, correctiva e serviços de emergência 24 horas.',
    image: pubImg('Pátio Moderno com Portão de Madeira.png'),
    imageAlt: 'Manutenção geral e acabamentos exteriores em imóvel moderno',
    overview:
      'Planos contínuos e intervenções pontuais para manter imóveis, sistemas de abastecimento de água e infra-estruturas empresariais sempre operacionais, seguros e valorizados.',
    highlights: [
      'Contratos de manutenção preventiva para empresas, condomínios e instituições',
      'Inspecções periódicas de canalização, electricidade, bombagem e acabamentos',
      'Manutenção correctiva rápida com equipa multidisciplinar devidamente uniformizada',
      'Linha permanente de emergência 24 horas por dia, 7 dias por semana',
    ],
    responseTime: 'Disponibilidade contínua 24/7',
    galleryImages: [
      {
        src: pubImg('Homem com uniforme refletor numa oficina.png'),
        caption: 'Equipa técnica fardada e equipada para manutenção residencial e empresarial',
      },
      {
        src: execImg('Sistema de bombagem no terraço.png'),
        caption: 'Manutenção de sistemas de reservatório e bombagem',
      },
    ],
  },
  {
    id: 'sistemas-agua',
    title: 'Sistemas de Água e Bombagem',
    shortDescription: 'Instalação de reservatórios, bombas de pressão e aquecimento solar.',
    image: pubImg('Sistema de Água PLASTEX no Terraço.png'),
    imageAlt: 'Sistema de reservatório PLASTEX com bomba de pressurização instalado no terraço',
    overview:
      'Projecto e instalação completa de sistemas autónomos de reserva, pressurização e aquecimento solar de água para garantir conforto e pressão constante em moradias, edifícios e empresas.',
    highlights: [
      'Instalação de tanques de água PLASTEX em terraços, torres ou solo',
      'Ligação de eletrobombas Easy Press com pressostato automático e manómetro',
      'Instalação de aquecedores solares Dura Solar com rede em PPR',
      'Manutenção, higienização e calibração de sistemas existentes',
    ],
    responseTime: 'Instalação rápida chave na mão',
    galleryImages: [
      {
        src: pubImg('Sistema de Água PLASTEX no Terraço.png'),
        caption: 'Instalação de reservatório PLASTEX com bomba e tubagem PPR',
      },
      {
        src: execImg('Bomba de Água Easy Press junto ao Depósito.png'),
        caption: 'Sistema de bombagem Easy Press instalado junto ao depósito',
      },
      {
        src: execImg('Aquecedor Solar Dura Solar no Telhado.png'),
        caption: 'Aquecedor solar Dura Solar instalado no telhado',
      },
    ],
  },
  {
    id: 'remodelacao-pavimentacao',
    title: 'Remodelação e Pavimentação',
    shortDescription: 'Renovação de casas de banho, cozinhas, telhados, portões e pavimentos.',
    image: pubImg('Casa de banho moderna com azulejos ondulados.png'),
    imageAlt: 'Casa de banho moderna remodelada com revestimento ondulado e acabamentos premium',
    overview:
      'Executamos remodelações completas de interiores e obras exteriores com elevado padrão estético, desde casas de banho e cozinhas até coberturas, serralharia e pavimentação.',
    highlights: [
      'Remodelação integral de casas de banho modernas, duches e cozinhas',
      'Remoção e assentamento de mosaicos, azulejos, mármore e madeira',
      'Pavimentação exterior em blocos de betão (pavê), telhados e pátios',
      'Instalação de portas, portões sanfonados metálicos e grades de segurança',
    ],
    responseTime: 'Acompanhamento de obra do início ao fim',
    galleryImages: [
      {
        src: execImg('Casa de banho moderna com banheira e nicho iluminado.png'),
        caption: 'Casa de banho moderna com banheira e nicho iluminado',
      },
      {
        src: execImg('Cozinha de Serviço Moderna em Azulejo Cinzento.png'),
        caption: 'Cozinha de serviço finalizada em azulejo cinzento',
      },
      {
        src: pubImg('Caminho de pavimento em obra.png'),
        caption: 'Execução de caminho exterior com blocos de pavimento',
      },
    ],
  },
];

export const PROJECT_GALLERY: ProjectGalleryItem[] = [
  // Destaques principais (public/images) + Obras executadas (public/images/servicos executados)
  {
    id: 'exec-cb-banheira-nicho',
    title: 'Casa de Banho com Banheira e Nicho Iluminado',
    category: 'Casas de Banho',
    serviceValue: 'Remodelação e Pavimentação',
    image: execImg('Casa de banho moderna com banheira e nicho iluminado.png'),
    alt: 'Casa de banho moderna com banheira e nicho iluminado',
  },
  {
    id: 'proj-hidraulica-contadores',
    title: 'Central Hidráulica com Contadores e Válvulas',
    category: 'Canalização',
    serviceValue: 'Canalização',
    image: pubImg('Instalação Hidráulica com Contadores e Válvulas.png'),
    alt: 'Instalação hidráulica profissional com contadores de água, manómetros e válvulas',
  },
  {
    id: 'exec-quadro-eletrico',
    title: 'Quadro Eléctrico Organizado na Parede',
    category: 'Electricidade',
    serviceValue: 'Electricidade',
    image: execImg('Quadro Elétrico Organizado na Parede.png'),
    alt: 'Quadro eléctrico organizado na parede com disjuntores identificados',
  },
  {
    id: 'exec-aquecedor-solar',
    title: 'Aquecedor Solar Dura Solar no Telhado',
    category: 'Canalização',
    serviceValue: 'Sistemas de Água e Bombagem',
    image: execImg('Aquecedor Solar Dura Solar no Telhado.png'),
    alt: 'Sistema de aquecimento solar Dura Solar instalado no telhado',
  },
  {
    id: 'proj-casa-banho-ondulados',
    title: 'Casa de Banho Moderna com Azulejos Ondulados',
    category: 'Casas de Banho',
    serviceValue: 'Remodelação e Pavimentação',
    image: pubImg('Casa de banho moderna com azulejos ondulados.png'),
    alt: 'Casa de banho remodelada com azulejos ondulados, vidro temperado e torneira preta',
  },
  {
    id: 'exec-bomba-easy-press',
    title: 'Bomba de Água Easy Press junto ao Depósito',
    category: 'Canalização',
    serviceValue: 'Sistemas de Água e Bombagem',
    image: execImg('Bomba de Água Easy Press junto ao Depósito.png'),
    alt: 'Bomba de pressurização Easy Press instalada junto ao depósito de água',
  },
  {
    id: 'proj-pintura-fachada',
    title: 'Pintura e Acabamento de Fachada Exterior',
    category: 'Pintura',
    serviceValue: 'Pintura',
    image: pubImg('Escada e Balde de Tinta na Fachada.png'),
    alt: 'Trabalho de pintura exterior em fachada arquitectónica moderna',
  },
  {
    id: 'exec-cozinha-cinzento',
    title: 'Cozinha de Serviço em Azulejo Cinzento',
    category: 'Remodelação & Obras',
    serviceValue: 'Remodelação e Pavimentação',
    image: execImg('Cozinha de Serviço Moderna em Azulejo Cinzento.png'),
    alt: 'Cozinha de serviço moderna revestida a azulejo cinzento',
  },
  {
    id: 'exec-duche-preto-mate',
    title: 'Duche Moderno com Detalhes em Preto Mate',
    category: 'Casas de Banho',
    serviceValue: 'Remodelação e Pavimentação',
    image: execImg('Duche Moderno com Detalhes em Preto Mate.png'),
    alt: 'Área de duche moderna com acabamentos em preto mate',
  },
  {
    id: 'exec-sanita-suspensa-roca',
    title: 'Instalação de Sanita Suspensa com Autoclismo Roca',
    category: 'Canalização',
    serviceValue: 'Canalização',
    image: execImg('Instalação de Sanita Suspensa com Autoclismo Roca.png'),
    alt: 'Instalação técnica de sanita suspensa com estrutura e autoclismo Roca',
  },
  {
    id: 'exec-vaidade-espelho-iluminado',
    title: 'Vaidade Moderna com Espelho Iluminado',
    category: 'Casas de Banho',
    serviceValue: 'Remodelação e Pavimentação',
    image: execImg('Vaidade Moderna com Lavatório Branco e Espelho Iluminado.png'),
    alt: 'Móvel de casa de banho com lavatório branco e espelho iluminado',
  },
  {
    id: 'proj-plastex-terraco',
    title: 'Sistema de Reservatório PLASTEX e Bombagem',
    category: 'Canalização',
    serviceValue: 'Sistemas de Água e Bombagem',
    image: pubImg('Sistema de Água PLASTEX no Terraço.png'),
    alt: 'Sistema de água PLASTEX com bomba de pressurização instalado no terraço',
  },
  {
    id: 'exec-cb-lavatorios-duplos',
    title: 'Casa de Banho Moderna com Lavatórios Duplos',
    category: 'Casas de Banho',
    serviceValue: 'Remodelação e Pavimentação',
    image: execImg('Casa de banho moderna com lavatórios duplos.png'),
    alt: 'Casa de banho espaçosa com lavatórios duplos modernos',
  },
  {
    id: 'exec-eletrica-condutas',
    title: 'Infra-Estrutura Eléctrica com Condutas PVC',
    category: 'Electricidade',
    serviceValue: 'Electricidade',
    image: pubImg('Instalação Elétrica com Condutas PVC.png'),
    alt: 'Instalação eléctrica embutida com condutas PVC e caixa de distribuição',
  },
  {
    id: 'exec-telhado-operarios',
    title: 'Construção de Telhado com Equipa Técnica',
    category: 'Remodelação & Obras',
    serviceValue: 'Remodelação e Pavimentação',
    image: execImg('Construção de Telhado com Operários ao Trabalho.png'),
    alt: 'Construção e montagem de estrutura de cobertura por operários da equipa',
  },
  {
    id: 'exec-portoes-sanfonados',
    title: 'Portões Sanfonados Metálicos Instalados',
    category: 'Remodelação & Obras',
    serviceValue: 'Remodelação e Pavimentação',
    image: execImg('Portões sanfonados metálicos em destaque.png'),
    alt: 'Instalação de portões sanfonados metálicos para segurança residencial',
  },
  {
    id: 'exec-sistema-bombagem-terraco',
    title: 'Sistema de Bombagem no Terraço',
    category: 'Canalização',
    serviceValue: 'Sistemas de Água e Bombagem',
    image: execImg('Sistema de bombagem no terraço.png'),
    alt: 'Instalação de bombagem de água e tubagem técnica em terraço',
  },
  {
    id: 'exec-cb-madeira-cinzentos',
    title: 'Casa de Banho com Madeira e Azulejos Cinzentos',
    category: 'Casas de Banho',
    serviceValue: 'Remodelação e Pavimentação',
    image: execImg('Casa de Banho Moderna com Madeira e Azulejos Cinzentos.png'),
    alt: 'Casa de banho contemporânea combinando madeira e revestimento cinzento',
  },
  {
    id: 'exec-alameda-pessego',
    title: 'Alameda Renovada e Pintura Exterior',
    category: 'Pintura',
    serviceValue: 'Pintura',
    image: execImg('Alameda Renovada em Tons de Pêssego.png'),
    alt: 'Alameda renovada com pintura exterior em tons quentes',
  },
  {
    id: 'exec-sala-minimalista',
    title: 'Sala Moderna Minimalista Finalizada',
    category: 'Remodelação & Obras',
    serviceValue: 'Remodelação e Pavimentação',
    image: execImg('Sala Moderna Minimalista Vazia.png'),
    alt: 'Sala remodelada com pavimento, iluminação embutida e pintura minimalista',
  },
  {
    id: 'exec-duche-cromado',
    title: 'Duche Moderno com Coluna Cromada',
    category: 'Casas de Banho',
    serviceValue: 'Remodelação e Pavimentação',
    image: execImg('Duche Moderno com Coluna Cromada.png'),
    alt: 'Duche equipado com coluna de hidromassagem cromada',
  },
  {
    id: 'exec-contador-tubos-verdes',
    title: 'Contador de Água com Tubagem PPR Verde',
    category: 'Canalização',
    serviceValue: 'Canalização',
    image: execImg('Contador de Água com Tubos Verdes Expostos.png'),
    alt: 'Instalação de contador de água com tubagem verde em PPR',
  },
  {
    id: 'exec-cb-marmore-castanho',
    title: 'Casa de Banho Moderna em Mármore Castanho',
    category: 'Casas de Banho',
    serviceValue: 'Remodelação e Pavimentação',
    image: execImg('Casa de banho moderna em mármore castanho.png'),
    alt: 'Casa de banho revestida a mármore castanho com acabamentos modernos',
  },
  {
    id: 'exec-cb-acessivel',
    title: 'Casa de Banho Acessível Moderna',
    category: 'Casas de Banho',
    serviceValue: 'Remodelação e Pavimentação',
    image: execImg('Casa de Banho Acessível Moderna.png'),
    alt: 'Casa de banho adaptada com barras de apoio e design moderno',
  },
  {
    id: 'exec-cb-bide-roca',
    title: 'Casa de Banho com Bidé e Sanita Roca',
    category: 'Casas de Banho',
    serviceValue: 'Canalização',
    image: execImg('Casa de banho moderna com bidé e sanita Roca.png'),
    alt: 'Instalação de bidé e sanita Roca em casa de banho moderna',
  },
  {
    id: 'exec-cb-duche-sanita',
    title: 'Casa de Banho Completa com Duche e Sanita',
    category: 'Casas de Banho',
    serviceValue: 'Remodelação e Pavimentação',
    image: execImg('Casa de banho moderna com duche e sanita.png'),
    alt: 'Casa de banho moderna com divisória de duche e sanita',
  },
  {
    id: 'exec-cb-sanita-suspensa',
    title: 'Casa de Banho com Sanita Suspensa',
    category: 'Casas de Banho',
    serviceValue: 'Canalização',
    image: execImg('Casa de banho moderna com sanita suspensa.png'),
    alt: 'Casa de banho minimalista com sanita suspensa instalada',
  },
  {
    id: 'exec-cb-sanita-suspensa-2',
    title: 'Acabamento de Sanita Suspensa e Revestimento',
    category: 'Casas de Banho',
    serviceValue: 'Canalização',
    image: execImg('Casa de banho moderna com sanita suspensa (1).png'),
    alt: 'Vista complementar de casa de banho com sanita suspensa',
  },
  {
    id: 'exec-sanita-preto-mate',
    title: 'Sanita Preto Mate em Casa de Banho Moderna',
    category: 'Casas de Banho',
    serviceValue: 'Canalização',
    image: execImg('Sanita preto mate numa casa de banho moderna.png'),
    alt: 'Sanita de design preto mate instalada em casa de banho contemporânea',
  },
  {
    id: 'exec-sanita-roca-branca',
    title: 'Sanita Roca Branca Moderna',
    category: 'Casas de Banho',
    serviceValue: 'Canalização',
    image: execImg('Sanita Roca Branca Moderna.png'),
    alt: 'Instalação de sanita Roca branca em ambiente remodelado',
  },
  {
    id: 'exec-sanita-roca-ambiente',
    title: 'Conjunto Sanitário Roca em Ambiente Moderno',
    category: 'Casas de Banho',
    serviceValue: 'Canalização',
    image: execImg('Sanita Roca num Ambiente Moderno.png'),
    alt: 'Sanita Roca instalada com acabamento limpo',
  },
  {
    id: 'exec-lavatorio-carvalho',
    title: 'Lavatório Suspenso em Carvalho Claro',
    category: 'Casas de Banho',
    serviceValue: 'Remodelação e Pavimentação',
    image: execImg('Lavatório Suspenso em Carvalho Claro.png'),
    alt: 'Móvel lavatório suspenso com acabamento em carvalho claro',
  },
  {
    id: 'exec-vaidade-torneira-preta',
    title: 'Vaidade Moderna com Torneira Preta Mate',
    category: 'Casas de Banho',
    serviceValue: 'Remodelação e Pavimentação',
    image: execImg('Vaidade Moderna com Torneira Preta.png'),
    alt: 'Lavatório branco moderno com torneira preta sobre azulejos ondulados',
  },
  {
    id: 'exec-base-duche-curva',
    title: 'Base de Duche Curva em Azulejos Bege',
    category: 'Casas de Banho',
    serviceValue: 'Remodelação e Pavimentação',
    image: execImg('Base de duche curva em azulejos bege.png'),
    alt: 'Base de duche curva finalizada com revestimento em pastilha bege',
  },
  {
    id: 'exec-base-duche-cimento',
    title: 'Execução de Base de Duche em Obra',
    category: 'Casas de Banho',
    serviceValue: 'Remodelação e Pavimentação',
    image: execImg('Base de Duche em Cimento com Ferramentas.png'),
    alt: 'Construção e nivelamento de base de duche com ferramentas técnicas',
  },
  {
    id: 'exec-base-duche-marmore',
    title: 'Detalhe de Base de Duche em Mármore',
    category: 'Casas de Banho',
    serviceValue: 'Remodelação e Pavimentação',
    image: execImg('Detalhe de Base de Duche em Mármore.png'),
    alt: 'Acabamento detalhado de base de duche com mármore e ralo',
  },
  {
    id: 'exec-canalizacao-roca-blocos',
    title: 'Canalização Roca em Parede de Blocos',
    category: 'Canalização',
    serviceValue: 'Canalização',
    image: execImg('Instalação de Canalização Roca em Parede de Blocos.png'),
    alt: 'Instalação de estrutura Roca embutida em alvenaria de blocos',
  },
  {
    id: 'exec-canalizacao-roca-verdes',
    title: 'Canalização Roca com Tubagem PPR Verde',
    category: 'Canalização',
    serviceValue: 'Canalização',
    image: execImg('Instalação de Canalização Roca com Tubos Verdes.png'),
    alt: 'Ligação de sistema Roca com tubagem verde de alta resistência',
  },
  {
    id: 'exec-cisterna-roca',
    title: 'Instalação de Canalização com Cisterna Roca',
    category: 'Canalização',
    serviceValue: 'Canalização',
    image: execImg('Instalação de Canalização com Cisterna Roca.png'),
    alt: 'Montagem de cisterna embutida Roca e rede hidráulica',
  },
  {
    id: 'exec-canalizacao-betao-1',
    title: 'Canalização Verde em Parede de Betão',
    category: 'Canalização',
    serviceValue: 'Canalização',
    image: execImg('Canalização Verde em Parede de Betão.png'),
    alt: 'Tubagem hidráulica verde embutida em parede de betão',
  },
  {
    id: 'exec-canalizacao-betao-2',
    title: 'Instalação Hidráulica Verde em Betão',
    category: 'Canalização',
    serviceValue: 'Canalização',
    image: execImg('Instalação Hidráulica Verde em Parede de Betão.png'),
    alt: 'Rede hidráulica em PPR instalada em estrutura de betão',
  },
  {
    id: 'exec-canalizacao-entre-blocos',
    title: 'Canalização Entre Blocos de Betão',
    category: 'Canalização',
    serviceValue: 'Canalização',
    image: execImg('Canalização Verde Entre Blocos de Betão.png'),
    alt: 'Passagem técnica de canalização verde entre blocos de alvenaria',
  },
  {
    id: 'exec-canalizacao-telhado-1',
    title: 'Rede de Canalização no Telhado',
    category: 'Canalização',
    serviceValue: 'Canalização',
    image: execImg('Canalização Verde no Telhado.png'),
    alt: 'Distribuição hidráulica em PPR instalada em cobertura/telhado',
  },
  {
    id: 'exec-canalizacao-telhado-2',
    title: 'Distribuição Hidráulica Externa no Terraço',
    category: 'Canalização',
    serviceValue: 'Canalização',
    image: execImg('Canalização Verde no Telhado (1).png'),
    alt: 'Ramal de tubagem hidráulica verde instalado no telhado',
  },
  {
    id: 'exec-canalizacao-canto-obra',
    title: 'Canalização em Canto de Obra',
    category: 'Canalização',
    serviceValue: 'Canalização',
    image: execImg('Instalação de Canalização Verde em Canto de Obra.png'),
    alt: 'Execução de derivação hidráulica em canto de parede em obra',
  },
  {
    id: 'exec-canalizacao-parede',
    title: 'Instalação de Canalização na Parede',
    category: 'Canalização',
    serviceValue: 'Canalização',
    image: execImg('Instalação de Canalização Verde na Parede.png'),
    alt: 'Instalação de tubagens em PPR verde em parede interior',
  },
  {
    id: 'exec-canalizacao-parede-inacabada',
    title: 'Infra-Estrutura de Canalização em Obra',
    category: 'Canalização',
    serviceValue: 'Canalização',
    image: execImg('Instalação de Canalização em Parede Inacabada.png'),
    alt: 'Preparação da rede hidráulica antes do reboco final',
  },
  {
    id: 'exec-canalizacao-obra',
    title: 'Execução Geral de Canalização em Obra',
    category: 'Canalização',
    serviceValue: 'Canalização',
    image: execImg('Instalação de Canalização na Obra.png'),
    alt: 'Montagem de tubagens de água e drenagem em obra civil',
  },
  {
    id: 'proj-canalizacao-parede',
    title: 'Rede de Canalização em Parede de Cimento',
    category: 'Canalização',
    serviceValue: 'Canalização',
    image: pubImg('Instalação de Canalização em Parede de Cimento.png'),
    alt: 'Instalação de tubagem de água em PPR verde e esgoto em PVC na parede',
  },
  {
    id: 'proj-canalizacao-bruta',
    title: 'Canalização Embutida em Parede Bruta',
    category: 'Canalização',
    serviceValue: 'Canalização',
    image: pubImg('Instalação de Canalização em Parede Bruta.png'),
    alt: 'Execução de rede de canalização em alvenaria bruta',
  },
  {
    id: 'proj-renovacao-verde',
    title: 'Renovação de Rede Hidráulica em PPR',
    category: 'Canalização',
    serviceValue: 'Canalização',
    image: pubImg('Renovação com Canalização Verde(calc).png'),
    alt: 'Substituição de canalização em parede para remodelação',
  },
  {
    id: 'exec-janela-grade-1',
    title: 'Janela Angular com Grade de Segurança',
    category: 'Remodelação & Obras',
    serviceValue: 'Remodelação e Pavimentação',
    image: execImg('Janela Angular com Grade de Segurança.png'),
    alt: 'Janela angular equipada com grade metálica de segurança',
  },
  {
    id: 'exec-janela-grade-2',
    title: 'Janela de Canto com Grades Recolhidas',
    category: 'Remodelação & Obras',
    serviceValue: 'Remodelação e Pavimentação',
    image: execImg('Janela de canto com grades recolhidas.png'),
    alt: 'Sistema de grades de segurança articuladas em janela de canto',
  },
  {
    id: 'exec-porta-madeira',
    title: 'Porta de Madeira em Interior Moderno',
    category: 'Remodelação & Obras',
    serviceValue: 'Remodelação e Pavimentação',
    image: execImg('Porta de Madeira em Interior Moderno.png'),
    alt: 'Acabamento de carpintaria com porta de madeira em interior moderno',
  },
  {
    id: 'exec-fachada-patio',
    title: 'Fachada Residencial Moderna Renovada',
    category: 'Remodelação & Obras',
    serviceValue: 'Remodelação e Pavimentação',
    image: execImg('Fachada Moderna com Cão no Pátio.png'),
    alt: 'Fachada residencial renovada e pátio exterior cuidado',
  },
  {
    id: 'exec-homem-telhado',
    title: 'Inspecção Técnica no Telhado ao Pôr do Sol',
    category: 'Remodelação & Obras',
    serviceValue: 'Manutenção',
    image: execImg('Homem no Telhado ao Pôr do Sol.png'),
    alt: 'Técnico em inspecção de cobertura ao final da tarde',
  },
  {
    id: 'exec-colagem-acabamentos',
    title: 'Mosaico de Renovações e Acabamentos',
    category: 'Remodelação & Obras',
    serviceValue: 'Remodelação e Pavimentação',
    image: execImg('Colagem de renovação e acabamentos modernos.png'),
    alt: 'Conjunto de obras finalizadas em interiores, casas de banho e exteriores',
  },
  {
    id: 'proj-cozinha-renovacao',
    title: 'Preparação e Renovação de Pavimento',
    category: 'Remodelação & Obras',
    serviceValue: 'Remodelação e Pavimentação',
    image: pubImg('Renovação de cozinha com azulejos partidos.png'),
    alt: 'Obra de preparação e renovação de pavimento em cozinha residencial',
  },
  {
    id: 'exec-demolicao-interior',
    title: 'Demolição Técnica e Preparação de Obra',
    category: 'Remodelação & Obras',
    serviceValue: 'Remodelação e Pavimentação',
    image: execImg('Demolição Interior com Entulho e Alvenaria Exposta.png'),
    alt: 'Fase inicial de demolição interior para remodelação completa',
  },
  {
    id: 'exec-patio-tratamento',
    title: 'Diagnóstico de Humidade e Pintura em Pátio',
    category: 'Pintura',
    serviceValue: 'Pintura',
    image: execImg('Pátio com Pintura Descascada e Humidade.png'),
    alt: 'Avaliação técnica de parede com humidade para tratamento e repintura',
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
  {
    id: 'proj-tecnico-uniformizado',
    title: 'Equipa Técnica e Assistência em Obra',
    category: 'Remodelação & Obras',
    serviceValue: 'Manutenção',
    image: pubImg('Homem com uniforme refletor numa oficina.png'),
    alt: 'Técnico da Waga Services com uniforme refletor pronto para intervenção',
  },
];

export const ABOUT_CONTENT = {
  eyebrow: 'SOBRE A WAGA SERVICES',
  title: 'Profissionalismo em cada detalhe.',
  paragraphs: [
    'A Waga Services dedica-se à prestação de serviços profissionais para residências, empresas e instituições, oferecendo soluções eficientes em canalização, pintura, electricidade e manutenção.',
    'Trabalhamos com compromisso, qualidade e segurança para garantir a satisfação dos nossos clientes.',
  ],
  image: pubImg('Homem com uniforme refletor numa oficina.png'),
  imageAlt: 'Técnico qualificado da Waga Services com uniforme refletor em intervenção residencial',
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
  image: pubImg('Caminho de pavimento em obra.png'),
  imageAlt: 'Técnico da Waga Services em execução técnica de campo',
};
