import { gymConfig } from "@/config/gym";
import {
  Dumbbell,
  Flame,
  Heart,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const iconMap: Record<string, LucideIcon> = {
  Dumbbell,
  Flame,
  Heart,
  UserCheck,
};

export default function Benefits() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <Reveal className="text-center mb-14">
          <span className="text-accent font-bold uppercase tracking-wider text-sm">
            Benefícios
          </span>
          <h2 className="text-4xl md:text-5xl mt-3 text-primary">
            Resultados que você vai sentir
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {gymConfig.benefits.map((b, i) => {
            const Icon = iconMap[b.icon] ?? Dumbbell;
            return (
              <Reveal
                key={b.title}
                delay={i * 100}
                className="bg-card rounded-2xl p-8 text-center shadow-card-soft hover:shadow-elevated hover-lift transition-bounce border border-border"
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-accent mb-5">
                  <Icon
                    className="h-8 w-8 text-accent-foreground"
                    strokeWidth={2.5}
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {b.title}
                </h3>
                <p className="text-muted-foreground">{b.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
