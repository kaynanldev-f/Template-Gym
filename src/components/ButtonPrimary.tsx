import clsx from "clsx";

interface buttonProps {
  children: React.ReactNode;
  moreClass?: string;
}

export default function ButtonPrimary({ children, moreClass }: buttonProps) {
  return (
    <button
      className={clsx(
        "px-6 py-3 rounded-lg font-bold text-sm",
        "bg-linear-to-r from-accent to-accent-glow",
        "text-foreground",
        "transition-all duration-200",

        // Interações
        "hover:brightness-110 hover:scale-105",
        "active:scale-95",

        // Acessibilidade
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b400]",
      )}
      style={{
        backgroundImage: "linear-gradient(135deg, #f5b400 0%, #ffc21f 100%)",
        boxShadow: "0 10px 40px -10px rgba(245, 180, 0, 0.5)",
      }}
    >
      {children}
    </button>
  );
}
