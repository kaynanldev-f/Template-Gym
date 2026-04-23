import { Button } from "@/components/ui/button";
import { gymConfig, whatsappLink } from "@/config/gym";
import { Check } from "lucide-react";

export default function Plans() {
  return (
    <section
      id="planos"
      className="py-20 md:py-28 bg-gradient-dark text-primary-foreground"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-accent font-bold uppercase tracking-wider text-sm">
            Planos
          </span>
          <h2 className="text-4xl md:text-5xl mt-3 mb-4">
            Escolha o plano ideal pra você
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Sem pegadinhas. Sem letra miúda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {gymConfig.plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-bounce hover:-translate-y-2 ${
                plan.featured
                  ? "bg-accent text-accent-foreground shadow-accent-glow scale-105"
                  : "bg-primary-glow/50 backdrop-blur border border-primary-foreground/10"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider">
                  {plan.badge}
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-sm align-top">R$</span>
                <span className="text-6xl font-black">{plan.price}</span>
                <span className="text-lg opacity-70">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 min-h-[160px]">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check
                      className="h-5 w-5 shrink-0 mt-0.5"
                      strokeWidth={3}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={plan.featured ? "navy" : "cta"}
                size="lg"
                className="w-full"
              >
                <a
                  href={whatsappLink(
                    `Olá! Tenho interesse no plano ${plan.name} (R$ ${plan.price}${plan.period}).`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {plan.cta}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
