import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";
import gallery4 from "../assets/gallery-4.jpg";
import heroGym from "../assets/hero-gym.jpg";

// CONFIGURAÇÃO CENTRAL — altere aqui para customizar o site para qualquer academia
export const gymConfig = {
  name: "Power Fit",
  tagline: "Sua academia de bairro",
  whatsapp: "5584996926834", // formato internacional sem +
  whatsappMessage: "Olá! Quero saber mais sobre os planos da Power Fit.",
  phone: "(84) 99692-6834",
  address: "Rua das Flores, 123 — Bairro Central, São Paulo - SP",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.123!2d-46.6388!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjgiUyA0NsKwMzgnMTkuNyJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000",
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },
  hero: {
    image: heroGym,
    headline: "Transforme seu corpo hoje",
    subheadline:
      "Planos acessíveis e acompanhamento profissional pra você sair do sedentarismo e atingir seus objetivos.",
    cta: "Falar no WhatsApp",
  },
  about: {
    title: "Mais que uma academia, uma comunidade",
    description:
      "Há mais de 10 anos transformando vidas no bairro. Aqui você encontra estrutura completa, professores capacitados e um ambiente que motiva você a evoluir todos os dias.",
    differentials: [
      "Equipamentos modernos e revisados",
      "Ambiente totalmente climatizado",
      "Professores qualificados e atenciosos",
      "Aulas coletivas inclusas",
    ],
  },
  plans: [
    {
      name: "Mensal",
      price: "99",
      period: "/mês",
      featured: false,
      features: [
        "Acesso livre à musculação",
        "Aulas coletivas",
        "Sem fidelidade",
      ],
      cta: "Quero o Mensal",
    },
    {
      name: "Trimestral",
      price: "79",
      period: "/mês",
      featured: true,
      badge: "Mais escolhido",
      features: [
        "Tudo do plano Mensal",
        "Avaliação física inclusa",
        "Plano de treino personalizado",
        "20% de desconto",
      ],
      cta: "Quero o Trimestral",
    },
    {
      name: "Anual",
      price: "59",
      period: "/mês",
      featured: false,
      features: [
        "Tudo do plano Trimestral",
        "Acompanhamento nutricional",
        "Day-use para convidado",
        "40% de desconto",
      ],
      cta: "Quero o Anual",
    },
  ],
  benefits: [
    {
      icon: "Dumbbell",
      title: "Ganho de força",
      desc: "Treinos focados em hipertrofia e condicionamento.",
    },
    {
      icon: "Flame",
      title: "Emagrecimento",
      desc: "Programas de queima de gordura com resultados reais.",
    },
    {
      icon: "Heart",
      title: "Saúde e bem-estar",
      desc: "Movimento que melhora corpo, mente e disposição.",
    },
    {
      icon: "UserCheck",
      title: "Acompanhamento profissional",
      desc: "Professores presentes e prontos pra te ajudar.",
    },
  ],
  gallery: [gallery1, gallery2, gallery3, gallery4],
  testimonials: [
    {
      name: "Carla Mendes",
      role: "Aluna há 2 anos",
      text: "Perdi 18kg e ganhei autoestima. Os professores são incríveis e o ambiente é leve.",
    },
    {
      name: "Rodrigo Alves",
      role: "Aluno há 1 ano",
      text: "Melhor academia do bairro. Estrutura top e preço justo. Recomendo demais!",
    },
    {
      name: "Juliana Costa",
      role: "Aluna há 6 meses",
      text: "Comecei sem saber nada e hoje treino com prazer. O acompanhamento faz toda a diferença.",
    },
  ],
};

export const whatsappLink = (msg?: string) =>
  `https://wa.me/${gymConfig.whatsapp}?text=${encodeURIComponent(msg ?? gymConfig.whatsappMessage)}`;
