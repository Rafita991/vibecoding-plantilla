import { siteConfig } from "@/config/site";

export default function Footer() {
  const { name } = siteConfig;
  const { tagline, links, copyright } = siteConfig.footer;

  return (
    <footer className="border-t border-slate-800 py-12 px-6 bg-black light:bg-slate-50 light:border-slate-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <span className="text-lg font-bold text-green-300 neon-text light:text-green-700">{name}</span>
          <p className="text-sm text-slate-300 mt-1 light:text-slate-600">{tagline}</p>
        </div>

        <ul className="flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate-300 hover:text-green-300 transition-colors light:text-slate-600 light:hover:text-green-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-sm text-slate-400 light:text-slate-500">
          &copy; {new Date().getFullYear()} {name}. {copyright}
        </p>
      </div>
    </footer>
  );
}
