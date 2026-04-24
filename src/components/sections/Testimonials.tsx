import { gymConfig } from "../../config/gymConfig";
import { Quote, Star } from "lucide-react";
import Reveal from "../../components/Reveal";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <Reveal className="text-center mb-14">
          <span className="text-accent font-bold uppercase tracking-wider text-sm">
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-5xl mt-3 text-primary">
            Quem treina aqui, recomenda
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {gymConfig.testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 120}
              className="bg-card rounded-2xl p-8 shadow-card-soft hover:shadow-elevated hover-lift transition-smooth border border-border relative"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-accent/30" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-5 w-5 text-accent"
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-primary">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
