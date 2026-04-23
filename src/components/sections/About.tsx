import { gymConfig } from "@/config/gym";
import { Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <Reveal className="text-center mb-12">
          <span className="text-accent font-bold uppercase tracking-wider text-sm">
            Sobre nós
          </span>
          <h2 className="text-4xl md:text-5xl mt-3 mb-6 text-primary">
            {gymConfig.about.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {gymConfig.about.description}
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-4">
          {gymConfig.about.differentials.map((d, i) => (
            <Reveal
              key={d}
              delay={i * 80}
              className="flex items-center gap-3 p-5 rounded-xl bg-secondary border border-border hover:border-accent transition-smooth"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent">
                <Check
                  className="h-5 w-5 text-accent-foreground"
                  strokeWidth={3}
                />
              </div>
              <span className="font-semibold text-primary">{d}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
