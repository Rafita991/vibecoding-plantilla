import { siteConfig } from "@/config/site";

export default function Hero() {
  const { badge, title, titleHighlight, subtitle, ctaPrimary, ctaSecondary, ctaPrimaryUrl, ctaSecondaryUrl } = siteConfig.hero;

  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-32 pb-24 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 light:from-slate-50 light:via-white light:to-slate-100"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-green-400/15 blur-3xl" />
        <div className="absolute top-24 -left-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>
      <div className="relative max-w-5xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-green-200 bg-green-400/10 rounded-full border border-green-400/40 neon-glow light:text-green-800 light:bg-green-50 light:border-green-300">
          {badge}
        </span>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight mb-6 light:text-slate-900">
          {title}
          <span className="text-green-300 neon-text light:text-green-600"> {titleHighlight}</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed light:text-slate-600">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={ctaPrimaryUrl}
            className="hover-float neon-glow w-full sm:w-auto px-8 py-3.5 bg-green-500 text-slate-950 font-semibold rounded-full hover:bg-green-400 transition-all text-center"
          >
            {ctaPrimary}
          </a>
          <a
            href={ctaSecondaryUrl}
            className="hover-float w-full sm:w-auto px-8 py-3.5 border border-slate-600 text-slate-100 font-medium rounded-full hover:border-green-300 hover:text-green-200 hover:bg-slate-800 transition-all text-center light:border-slate-300 light:text-slate-700 light:hover:bg-slate-100 light:hover:text-green-700 light:hover:border-green-500"
          >
            {ctaSecondary}
          </a>
        </div>
        <div className="mt-14 mx-auto w-full max-w-xl rounded-3xl border border-green-400/30 bg-slate-900/70 p-6 neon-glow hover-float light:bg-white light:border-green-200">
          <div className="relative mx-auto flex h-56 w-full items-center justify-center overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 light:border-slate-200 light:bg-slate-100">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-transparent via-cyan-300 to-transparent laser-line" />
            <div className="absolute left-0 right-0 top-[58%] h-0.5 bg-gradient-to-r from-transparent via-green-300 to-transparent laser-line" />
            <div className="absolute bottom-10 h-14 w-28 rounded-full bg-orange-500/40 blur-2xl flame-core" />
            <svg viewBox="0 0 220 220" className="relative h-40 w-40 text-green-300">
              <rect x="58" y="58" width="104" height="104" rx="14" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="4" />
              <rect x="82" y="82" width="56" height="56" rx="8" fill="currentColor" fillOpacity="0.22" />
              <path d="M109 50V30M131 52V32M87 52V32M52 88H32M52 110H32M52 132H32M188 88h-20M188 110h-20M188 132h-20M109 190v-20M131 188v-20M87 188v-20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
          <p className="mt-4 text-sm text-slate-300 light:text-slate-600">
            Infraestructura lista para alto rendimiento: estable, rapida y visualmente brutal.
          </p>
        </div>
      </div>
    </section>
  );
}
