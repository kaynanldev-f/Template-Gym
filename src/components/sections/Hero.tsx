import { gymConfig, whatsappLink } from "../../config/gymConfig";
import { MessageCircle, ChevronDown, Star, Users, Trophy } from "lucide-react";
import Button from "../Button";
export default function Hero() {
  const words = gymConfig.hero.headline.split(" ");
  const lastWord = words.slice(-1)[0];
  const firstWords = words.slice(0, -1).join(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with slow zoom */}
      <img
        src={gymConfig.hero.image.src}
        alt="Academia moderna com pessoas treinando"
        className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
        width={1920}
        height={1280}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Decorative animated blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-blob" />
      <div
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary-glow/30 blur-3xl animate-blob"
        style={{ animationDelay: "4s" }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/40 backdrop-blur-sm mb-6 animate-fade-up">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent animate-pulse-dot" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="text-accent text-xs md:text-sm font-semibold uppercase tracking-wider">
            {gymConfig.tagline}
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.05] animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          {firstWords}{" "}
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-accent via-accent-glow to-accent bg-clip-text text-transparent">
              {lastWord}
            </span>
            <span className="absolute bottom-1 left-0 w-full h-3 md:h-4 bg-accent/30 -skew-x-6 -z-0" />
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto text-primary-foreground/85 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          {gymConfig.hero.subheadline}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 items-center justify-center animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Button>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-6 w-6" />
              {gymConfig.hero.cta}
            </a>
          </Button>
          <Button variant="bg-transparent border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground backdrop-blur-sm">
            <a href="#planos">Ver planos</a>
          </Button>
        </div>

        {/* Social proof stats */}
        <div
          className="mt-14 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          {[
            { icon: Users, value: "500+", label: "Alunos ativos" },
            { icon: Star, value: "4.9", label: "Avaliação média" },
            { icon: Trophy, value: "10+", label: "Anos de história" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 px-2 py-3 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm hover-lift"
            >
              <stat.icon className="h-5 w-5 text-accent mb-1" />
              <span className="text-2xl md:text-3xl font-black text-primary-foreground">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm text-primary-foreground/70 text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />

      {/* Scroll indicator */}
      <a
        href="#sobre"
        aria-label="Rolar para baixo"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-primary-foreground/70 hover:text-accent transition-colors animate-bounce-soft"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
}
