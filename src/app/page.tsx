import Navbar from "../components/Navbar";
import About from "../components/sections/About";
import Benefits from "../components/sections/Benefits";
import CTAbanner from "../components/sections/CTAbanner";
import Gallery from "../components/sections/Gallery";
import Hero from "../components/sections/Hero";
import Plans from "../components/sections/Plans";
import Testimonials from "../components/sections/Testimonials";
import Location from "../components/sections/Location";
import Footer from "../components/sections/Footer";
import FloatingWhatsApp from "../components/FloatingWhat";
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Plans />
      <Benefits />
      <CTAbanner
        title="Agende uma aula experimental grátis"
        subtitle="Conheça nossa estrutura, tire dúvidas e treine sem compromisso."
        buttonText="Quero minha aula grátis"
        message="Olá! Quero agendar uma aula experimental grátis."
      />
      <Gallery />
      <Testimonials />
      <Location />
      <CTAbanner
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
