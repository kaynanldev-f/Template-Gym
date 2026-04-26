import { gymConfig } from "../../config/gymConfig";
import Reveal from "../Reveal";

export default function Gallery() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <Reveal className="text-center mb-14">
          <span className="text-accent font-bold uppercase tracking-wider text-sm">
            Galeria
          </span>
          <h2 className="text-4xl md:text-5xl mt-3 font-bold text-primary">
            Conheça nosso espaço
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {gymConfig.gallery.map((src, i) => (
            <Reveal
              key={i}
              delay={i * 80}
              className="group relative aspect-square overflow-hidden rounded-xl shadow-card-soft"
            >
              <img
                src={src.src}
                alt={`Foto da academia ${i + 1}`}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover transition-bounce group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-smooth" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
