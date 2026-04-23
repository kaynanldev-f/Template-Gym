import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { gymConfig, whatsappLink } from "@/config/gym";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Planos", href: "#planos" },
  { label: "Localização", href: "#localizacao" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-smooth ${
        scrolled ? "bg-primary/95 backdrop-blur shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <a
          href="#"
          className="text-xl md:text-2xl font-black text-primary-foreground"
        >
          {gymConfig.name.split(" ")[0]}
          <span className="text-accent">
            {gymConfig.name.split(" ").slice(1).join(" ") &&
              ` ${gymConfig.name.split(" ").slice(1).join(" ")}`}
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-primary-foreground/90 hover:text-accent font-semibold transition-smooth"
            >
              {l.label}
            </a>
          ))}
          <Button asChild variant="cta" size="sm">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              Matricule-se
            </a>
          </Button>
        </nav>
        <button
          className="md:hidden text-primary-foreground p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-primary-foreground font-semibold py-2"
              >
                {l.label}
              </a>
            ))}
            <Button asChild variant="cta" size="sm">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                Matricule-se no WhatsApp
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
