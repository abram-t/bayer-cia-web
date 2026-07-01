import bayerSymbol from '../assets/logos/bayer-symbol.jpeg'
import bayerLogoFull from '../assets/logos/bayer-logo-full.jpeg'

import discoCuarzo from '../assets/images/products/disco-cuarzo-2.jpeg'
import discosCuarzoAplicaciones from '../assets/images/products/disco-cuarzo-1.jpeg'
import barrasGrafito from '../assets/images/products/barra-grafito.jpeg'

export const siteData = {
  company: {
    name: 'Bayer & Compañía',
    legalName: 'Bayer y Cía. Ltda',
    shortName: 'Bayer & Cía.',
    tagline: 'Servicio técnico para laboratorios mineralógicos y geológicos',
    foundedYear: '2011',
    email: 'gabrielbayer@bayerltda.com',
    phone: '+56 9 2888 5657',
    whatsapp: '56928885657',
    location: 'Chile y extranjero',
    logoSymbol: bayerSymbol,
    logoFull: bayerLogoFull,
  },

  navigation: [
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Productos', href: '#productos' },
    { label: 'Sectores', href: '#clientes' },
    { label: 'Cotizar', href: '#cotizar' },
    { label: 'Contacto', href: '#contacto' },
  ],

  hero: {
    eyebrow: 'Servicio técnico especializado',
    title:
      'Mantención, reparación y puesta en marcha de equipos de laboratorio en Chile',
    description:
      'Servicio técnico especializado para laboratorios mineralógicos y geológicos. Apoyamos la continuidad operacional mediante diagnóstico, intervención técnica, mantención e insumos bajo pedido.',
    primaryButton: {
      label: 'Solicitar cotización',
      href: '#cotizar',
    },
    secondaryButton: {
      label: 'Ver insumos',
      href: '#productos',
    },
    highlights: [
      'Atención técnica directa',
      '+15 años de experiencia',
      'Cobertura nacional y extranjera',
      'Equipo especializado',
    ],
    stats: [
      { value: '+15', label: 'años de experiencia' },
      { value: 'CL + PE', label: 'experiencia regional' },
      { value: 'Directa', label: 'atención técnica' },
    ],
    flowTitle: '¿Cómo funciona?',
    flow: [
      {
        title: 'Cuéntanos tu problema',
        description: 'Explícanos el equipo, la falla y el contexto de operación.',
      },
      {
        title: 'Agenda una evaluación diagnóstica',
        description: 'Revisamos el caso y definimos el alcance técnico inicial.',
      },
      {
        title: 'Llevamos a cabo la intervención',
        description: 'Ejecutamos reparación, mantención o puesta en marcha.',
      },
    ],
  },

  about: {
    eyebrow: 'Quiénes somos',
    title: 'Una empresa familiar con respaldo técnico comprobado',
    description:
      'Bayer & Compañía fue fundada el 11 de enero de 2011. Somos una empresa familiar especializada en servicio técnico para equipos de laboratorio, con foco en mineralogía y geología.',
    mission:
      'Nuestra misión es permitir que cada laboratorio mantenga sus operaciones sin complicaciones técnicas, entregando una atención directa, clara y especializada.',
    vision:
      'Nuestra visión es consolidarnos como un aliado técnico confiable para laboratorios en Chile y el extranjero, aportando continuidad, precisión y soporte especializado.',
    highlights: [
      'Atención directa con especialistas',
      'Cobertura a nivel nacional y extranjero',
      'Puesta en marcha, insumos y equipos',
      'Red de apoyo técnico especializado',
    ],
    team: [
      {
        initials: 'HB',
        name: 'Héctor Bayer',
        role: 'CEO · Gerente de Servicio Técnico',
      },
      {
        initials: 'DB',
        name: 'David Bayer',
        role: 'Asistente de Servicio Técnico',
      },
      {
        initials: 'GB',
        name: 'Gabriel Bayer',
        role: 'Área Administrativa',
      },
    ],
  },

  services: {
    eyebrow: 'Servicios',
    title: 'Soluciones técnicas para mantener operativo tu laboratorio',
    description:
      'Acompañamos a laboratorios mediante preevaluación, diagnóstico, intervención técnica, mantención preventiva, puesta en marcha e insumos bajo pedido.',
    focus:
      'Nuestro enfoque es permitir que tu laboratorio mantenga sus operaciones sin complicaciones técnicas.',
    process: [
      {
        number: '01',
        title: 'Preevaluación',
        description:
          'Explícanos tu problema, tu equipo y la falla que reporta. Conversemos para entender el caso antes de intervenir.',
      },
      {
        number: '02',
        title: 'Diagnóstico técnico',
        description:
          'Identificamos causas probables, componentes afectados y acciones necesarias para recuperar la operación.',
      },
      {
        number: '03',
        title: 'Intervención y/o mantención preventiva',
        description:
          'Ejecutamos reparación, ajustes, mantención preventiva o puesta en marcha según el alcance técnico del caso.',
      },
      {
        number: '04',
        title: 'Insumos',
        description:
          'Disponemos y gestionamos insumos de laboratorio bajo pedido según disponibilidad y requerimiento técnico.',
      },
    ],
    capabilities: [
      'Mantención',
      'Reparación',
      'Puesta en marcha',
      'Diagnóstico técnico',
      'Insumos bajo pedido',
      'Equipos de laboratorio',
    ],
  },

  products: {
    eyebrow: 'Productos e insumos',
    title: 'Catálogo de productos que ya hemos vendido',
    description:
      'Disponemos de insumos de laboratorio bajo pedido. Si necesitas algo diferente, completa el formulario y revisamos disponibilidad.',
    note:
      'Las medidas, cantidades y disponibilidad se confirman directamente al momento de solicitar una cotización.',
    items: [
      {
        name: 'Discos de cuarzo',
        description:
          'Insumos utilizados en aplicaciones de laboratorio, análisis y preparación técnica especializada.',
        measures: 'Medidas disponibles: por confirmar',
        image: discoCuarzo,
      },
      {
        name: 'Discos de cuarzo para aplicaciones técnicas',
        description:
          'Materiales orientados a laboratorios, espectroscopía, microscopía, análisis químico y análisis térmico.',
        measures: 'Disponibilidad y medidas: por confirmar',
        image: discosCuarzoAplicaciones,
      },
      {
        name: 'Barras de grafito',
        description:
          'Barras de grafito para aplicaciones técnicas y procesos de laboratorio especializados.',
        measures: 'Medidas disponibles: por confirmar',
        image: barrasGrafito,
      },
      {
        name: 'Equipos de laboratorio',
        description:
          'Equipos e instrumentos de laboratorio disponibles bajo consulta, según requerimiento técnico.',
        measures: 'Disponibilidad bajo pedido',
        image: null,
      },
    ],
  },

  clients: {
    eyebrow: 'Sectores que atendemos',
    title: 'Experiencia en entornos técnicos exigentes',
    description:
      'Prestamos apoyo técnico a organizaciones que dependen de la continuidad, precisión y disponibilidad de sus equipos de laboratorio.',
    items: [
      {
        icon: 'U',
        title: 'Universidades',
        description: 'Apoyo técnico para laboratorios académicos y de investigación.',
      },
      {
        icon: 'GEO',
        title: 'Laboratorios geológicos y mineralógicos',
        description: 'Soporte especializado para análisis, preparación y operación técnica.',
      },
      {
        icon: 'MIN',
        title: 'Sector minero e industrial',
        description: 'Atención a entornos donde la continuidad operacional es crítica.',
      },
      {
        icon: 'I+D',
        title: 'Centros de investigación',
        description: 'Soporte para equipos e insumos utilizados en procesos técnicos.',
      },
    ],
  },

  allies: {
    eyebrow: 'Red de apoyo',
    title: 'Soporte especializado cuando el caso lo requiere',
    description:
      'Cuando una necesidad supera el alcance directo, coordinamos apoyo con una red de empresas y especialistas técnicos.',
    items: [
      'Soporte técnico aliado',
      'Proveedores especializados',
      'Coordinación regional',
      'Soluciones integrales',
    ],
  },

  coverage: {
    eyebrow: 'Cobertura',
    title: 'Cobertura nacional y extranjera',
    description:
      'Ya hemos trabajado en Chile y Perú. Evaluamos cada requerimiento según ubicación, tipo de equipo, disponibilidad técnica y alcance del servicio.',
    countries: ['Chile', 'Perú'],
    cta: {
      label: 'Consultar cobertura',
      href: '#cotizar',
    },
  },

  quote: {
    eyebrow: 'Cotización',
    title: 'Solicita una evaluación técnica',
    description:
      'Cuéntanos qué equipo presenta fallas o qué insumo necesitas. Te responderemos con una evaluación preliminar y los siguientes pasos.',
    formspreeEndpoint: 'https://formspree.io/f/mnjkgrpo',
  },
}