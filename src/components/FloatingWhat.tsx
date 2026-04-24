import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../config/gymConfig";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[hsl(142_70%_45%)] text-white shadow-lg animate-float-pulse hover:scale-110 transition-bounce"
    >
      <MessageCircle className="h-8 w-8" fill="white" />
    </a>
  );
}
