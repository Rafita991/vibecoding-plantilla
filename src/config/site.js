/**
 * ARCHIVO DE CONFIGURACION CENTRAL
 * =================================
 * Este es el archivo que debes editar para personalizar tu landing page.
 * Cambia los textos, colores y datos de contacto aqui.
 * Los cambios se aplicaran automaticamente en toda la pagina.
 */

export const siteConfig = {
  // ─────────────────────────────────────────────
  // INFORMACION DEL NEGOCIO
  // ─────────────────────────────────────────────
  name: "Compulink",
  tagline: "Tecnologia confiable a la medida de cada cliente.",
  description:
    "Servicios computacionales en Chihuahua y en linea: hardware, software, desarrollo e infraestructura para proyectos de cualquier escala.",

  // ─────────────────────────────────────────────
  // SECCION HERO (la primera pantalla que ven los visitantes)
  // ─────────────────────────────────────────────
  hero: {
    badge: "Chihuahua, Mexico + Atencion en linea",
    title: "Soluciones computacionales",
    titleHighlight: "a tu medida",
    subtitle:
      "Desde una memoria USB hasta servidores para IA y proyectos empresariales, en Compulink diseñamos, instalamos y damos soporte con un plan claro para ti.",
    ctaPrimary: "Solicitar asesoria",
    ctaSecondary: "Ver servicios",
    // Enlace del boton principal. Puedes poner una URL de Calendly o Google Calendar.
    // Ejemplo Calendly: "https://calendly.com/tu-usuario/30min"
    // Ejemplo Google Calendar: "https://calendar.google.com/calendar/appointments/..."
    ctaPrimaryUrl: "#contacto",
    ctaSecondaryUrl: "#features",
  },

  // ─────────────────────────────────────────────
  // BENEFICIOS / FEATURES (seccion de caracteristicas)
  // ─────────────────────────────────────────────
  features: {
    heading: "Servicios reales para necesidades reales",
    subheading:
      "Atendemos desde tareas cotidianas del hogar hasta implementaciones para empresas y gobierno.",
    items: [
      {
        icon: "lightning",
        title: "Respuesta agil y clara",
        description:
          "Te explicamos opciones sin enredos y resolvemos con tiempos definidos para que no detengas tu operacion.",
      },
      {
        icon: "mobile",
        title: "Hardware y software",
        description:
          "Venta, actualizacion y soporte de equipo, licencias y sistemas para uso personal, comercial o institucional.",
      },
      {
        icon: "settings",
        title: "Proyectos a la medida",
        description:
          "Planeamos contigo desde cero: infraestructura, automatizacion y soluciones de alto rendimiento, incluyendo IA.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // PRECIOS (planes de pago)
  // ─────────────────────────────────────────────
  pricing: {
    heading: "Planes de servicio orientativos",
    subheading:
      "Cada proyecto se cotiza segun alcance, pero estos paquetes te ayudan a ubicar una ruta inicial.",
    plans: [
      {
        name: "Esencial",
        price: "$1,499",
        period: " MXN",
        description: "Soporte puntual para hogar y micro negocio",
        features: [
          "Diagnostico y recomendacion tecnica",
          "Mantenimiento preventivo basico",
          "Soporte remoto en horario laboral",
        ],
        cta: "Quiero este plan",
        highlighted: false,
      },
      {
        name: "Profesional",
        price: "$5,900",
        period: " MXN",
        description: "Operacion continua para pymes",
        features: [
          "Implementacion de hardware y software",
          "Soporte prioritario y seguimiento",
          "Respaldo y buenas practicas de seguridad",
          "Acompanamiento para escalar infraestructura",
        ],
        cta: "Solicitar propuesta",
        highlighted: true,
      },
      {
        name: "Institucional",
        price: "A medida",
        period: "",
        description: "Para industria, corporativo y gobierno",
        features: [
          "Arquitectura de servidores y soluciones IA",
          "Integraciones y despliegues especializados",
          "Mesa de ayuda con acuerdos de servicio",
          "Plan de continuidad operativa",
        ],
        cta: "Hablar con un especialista",
        highlighted: false,
      },
    ],
  },

  // ─────────────────────────────────────────────
  // PREGUNTAS FRECUENTES (FAQ)
  // ─────────────────────────────────────────────
  faq: {
    heading: "Preguntas frecuentes",
    subheading: "Te respondemos de forma directa para que decidas con seguridad.",
    items: [
      {
        question: "No soy experto en tecnologia, aun asi me pueden ayudar?",
        answer:
          "Si. Traducimos lo tecnico a pasos claros y te recomendamos solo lo que realmente necesitas.",
      },
      {
        question: "Atienden solo empresas grandes?",
        answer:
          "No. Trabajamos desde necesidades del hogar hasta proyectos empresariales y gubernamentales.",
      },
      {
        question: "Pueden vender equipo e instalarlo?",
        answer:
          "Si. Te apoyamos con seleccion de hardware, instalacion y puesta a punto para que funcione desde el primer dia.",
      },
      {
        question: "Manejan soluciones de servidores e IA?",
        answer:
          "Sí. Diseñamos soluciones escalables para analitica, automatizacion e inteligencia artificial segun tu objetivo.",
      },
      {
        question: "Como inicio una cotizacion?",
        answer:
          "Envia tu necesidad por el formulario y te contactamos para definir alcance, tiempos y propuesta.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // SECCION DE CONTACTO
  // ─────────────────────────────────────────────
  contact: {
    heading: "Hablemos de tu proyecto",
    subheading:
      "Cuentanos que necesitas y en Compulink te proponemos una ruta clara, sin tecnicismos innecesarios.",
    // URL para agendar una cita (Calendly o Google Calendar)
    // Si no tienes, deja el valor vacio: ""
    schedulingUrl: "",
    schedulingCta: "Agendar una llamada",
    form: {
      namePlaceholder: "Tu nombre completo",
      emailPlaceholder: "nombre@empresa.com",
      // Telefono es opcional. Cambia phoneRequired a true si quieres hacerlo obligatorio.
      phonePlaceholder: "Tu numero de telefono (opcional)",
      phoneRequired: false,
      messagePlaceholder: "Describe brevemente que necesitas resolver...",
      submitButton: "Enviar solicitud",
      sendingButton: "Enviando solicitud...",
      successMessage:
        "Gracias. Tu solicitud fue enviada correctamente.",
      errorMessage:
        "No se pudo enviar en este momento. Intentalo de nuevo.",
    },
    // Datos de contacto opcionales para mostrar en el footer o sidebar
    email: "hola@compulink.mx",
    phone: "+52 614 000 0000",
    address: "Chihuahua, Mexico",
  },

  // ─────────────────────────────────────────────
  // TEMA (boton claro / oscuro en el header)
  // ─────────────────────────────────────────────
  theme: {
    labelLight: "Activar modo claro",
    labelDark: "Activar modo oscuro",
  },

  // ─────────────────────────────────────────────
  // NAVEGACION
  // ─────────────────────────────────────────────
  nav: {
    links: [
      { label: "Inicio", href: "#inicio" },
      { label: "Servicios", href: "#features" },
      { label: "Planes", href: "#precios" },
      { label: "FAQ", href: "#faq" },
      { label: "Contacto", href: "#contacto" },
    ],
  },

  // ─────────────────────────────────────────────
  // FOOTER
  // ─────────────────────────────────────────────
  footer: {
    tagline: "Tecnologia que trabaja para ti, no al reves.",
    links: [
      { label: "Inicio", href: "#inicio" },
      { label: "Features", href: "#features" },
      { label: "Precios", href: "#precios" },
      { label: "Contacto", href: "#contacto" },
    ],
    copyright: "Todos los derechos reservados.",
  },

  // ─────────────────────────────────────────────
  // EMAIL (notificaciones automaticas al recibir un contacto)
  // ─────────────────────────────────────────────
  email: {
    subject: "Recibimos tu solicitud en Compulink",
    teamSignature: "Equipo Compulink",
    // El remitente del email. Debe coincidir con tu dominio verificado en Resend.
    from: "onboarding@resend.dev",
  },

  // ─────────────────────────────────────────────
  // COLORES PRINCIPALES (referencia para personalizar globals.css)
  // ─────────────────────────────────────────────
  // Estos valores son documentacion. Para cambiar colores en Tailwind v4,
  // edita el archivo src/app/globals.css y modifica las variables CSS.
  colors: {
    primary: "blue-700",      // Color principal (botones, acentos)
    secondary: "slate-900",   // Color de textos principales
    accent: "sky-50",         // Fondos suaves y badges
    background: "slate-50",   // Fondo general
  },

  // ─────────────────────────────────────────────
  // BOTON DE PAGO (PayPal)
  // ─────────────────────────────────────────────
  payment: {
    enabled: true,
    // Link: https://paypal.me/sophieHolmoc — solo el usuario, sin paypal.me/
    paypalMeUsername: "sophieHolmoc",
    // 0 = el cliente elige el monto en PayPal (recomendado con precios "A medida" o MXN)
    defaultAmount: 0,
    currency: "MXN",
    buttonText: "Pagar con PayPal",
  },

  // ─────────────────────────────────────────────
  // METADATOS SEO (lo que aparece en Google y redes sociales)
  // ─────────────────────────────────────────────
  metadata: {
    title: "Compulink | Servicios computacionales a la medida",
    description:
      "Compulink ofrece soluciones de hardware, software, desarrollo e infraestructura en Chihuahua y en linea para personas, empresas y gobierno.",
  },
};
