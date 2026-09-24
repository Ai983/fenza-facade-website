import { Link } from "react-router-dom";
import type { SystemFamily } from "@/lib/systems";
import { imgUrl } from "@/lib/systems";

export default function SystemCard({
  system,
  index = 0,
}: {
  system: SystemFamily;
  index?: number;
}) {
  return (
    <Link
      to={`/systems/${system.slug}`}
      className="group relative block overflow-hidden rounded-lg border border-cream/10 bg-ink-soft transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lift"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={imgUrl(system.card)}
          alt={`${system.name} facade system by Fenza`}
          loading={index < 3 ? "eager" : "lazy"}
          width={800}
          height={800}
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <span className="text-[0.66rem] font-semibold tracking-wide2 text-gold">
            {system.code}
          </span>
          <span className="text-[0.6rem] uppercase tracking-wide2 text-sand">
            {system.category}
          </span>
        </div>
        <h3 className="mt-2 font-display text-xl text-cream">{system.name}</h3>
        <p className="mt-1 line-clamp-1 text-xs text-cream/50">
          {system.variants.slice(0, 3).join(" · ")}
        </p>
      </div>
      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
    </Link>
  );
}
