export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Plans />
      <Benefits />
      <CTABanner
        title="Agende uma aula experimental grátis"
        subtitle="Conheça nossa estrutura, tire dúvidas e treine sem compromisso."
        buttonText="Quero minha aula grátis"
        message="Olá! Quero agendar uma aula experimental grátis."
      />
      <Gallery />
      <Testimonials />
      <Location />
      <CTABanner
        title="Pronto pra começar a transformação?"
        subtitle="Fale com a gente agora pelo WhatsApp e garanta sua matrícula."
        buttonText="Quero começar hoje"
        message="Olá! Quero começar hoje. Pode me passar mais informações?"
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
