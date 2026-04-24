import { whatsappLink } from "../../config/gymConfig";
import { MessageCircle } from "lucide-react";
import Button from "../Button";

interface CTABannerProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  message?: string;
}

export default function CTAbanner({
  title,
  subtitle,
  buttonText,
  message,
}: CTABannerProps) {
  return (
    <section className="py-20 md:py-24 bg-gradient-primary relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, hsl(var(--accent)) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(var(--accent)) 0%, transparent 50%)",
        }}
      />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl text-primary-foreground mb-4 max-w-3xl mx-auto">
          {title}
        </h2>
        {subtitle && (
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            {subtitle}
          </p>
        )}
        <Button>
          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="mr-2 h-6 w-6" />
            {buttonText}
          </a>
        </Button>
      </div>
    </section>
  );
}
