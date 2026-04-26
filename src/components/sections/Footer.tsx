import { gymConfig, whatsappLink } from "../../config/gymConfig";
import { MessageCircle, Phone, CircleFadingPlus, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-dark text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-black mb-2">
              {gymConfig.name.split(" ")[0]}{" "}
              <span className="text-accent">
                {gymConfig.name.split(" ").slice(1).join(" ")}
              </span>
            </div>
            <p className="text-primary-foreground/70">{gymConfig.tagline}</p>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-accent uppercase text-sm tracking-wider">
              Contato
            </h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> {gymConfig.phone}
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-accent transition-smooth"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-accent uppercase text-sm tracking-wider">
              Siga-nos
            </h4>
            <div className="flex gap-3">
              <a
                href={gymConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-smooth"
              >
                <CircleFadingPlus></CircleFadingPlus>
              </a>
              <a
                href={gymConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-smooth"
              >
                <Mail></Mail>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6 text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} {gymConfig.name}. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
