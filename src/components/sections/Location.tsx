import { gymConfig } from "../../config/gymConfig";
import { MapPin } from "lucide-react";

export default function Location() {
  return (
    <section id="localizacao" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-accent font-bold uppercase tracking-wider text-sm">
            Localização
          </span>
          <h2 className="text-4xl md:text-5xl mt-3 text-primary">
            Venha nos visitar
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
          <div className="bg-secondary rounded-2xl p-8 flex flex-col justify-center">
            <MapPin className="h-12 w-12 text-accent mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-3">
              {gymConfig.name}
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              {gymConfig.address}
            </p>
            <div className="space-y-2 text-foreground">
              <p>
                <span className="font-bold">Seg–Sex:</span> 06h às 23h
              </p>
              <p>
                <span className="font-bold">Sábado:</span> 08h às 18h
              </p>
              <p>
                <span className="font-bold">Domingo:</span> 08h às 13h
              </p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-elevated min-h-[320px]">
            <iframe
              src={gymConfig.mapEmbedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa da academia"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
