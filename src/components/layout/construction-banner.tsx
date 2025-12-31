export default function ConstructionBanner() {
  const message =
    "Ce site est en cours de construction et n'est pas encore finalisé. Certaines fonctionnalités peuvent être incomplètes ou indisponibles.";
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary/90 text-primary-foreground py-2.5 text-sm font-semibold whitespace-nowrap overflow-hidden">
      <div className="flex animate-marquee-infinite">
        <span className="mx-8">{message}</span>
        <span className="mx-8">{message}</span>
        <span className="mx-8">{message}</span>
        <span className="mx-8">{message}</span>
      </div>
    </div>
  );
}
