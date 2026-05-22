import { siteConfig } from "@/config/site";

export default function Pricing() {
  const { heading, subheading, plans } = siteConfig.pricing;

  return (
    <section id="precios" className="py-24 px-6 bg-slate-900 light:bg-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 light:text-slate-900">
            {heading}
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto light:text-slate-600">
            {subheading}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 border ${
                plan.highlighted
                  ? "hover-float neon-glow border-green-400/60 bg-gradient-to-b from-green-500/20 to-slate-900 text-white shadow-xl scale-105 light:from-green-100 light:to-white light:text-slate-900"
                  : "hover-float border-slate-700 bg-slate-950 text-slate-200 light:border-slate-200 light:bg-white light:text-slate-700"
              }`}
            >
              <h3
                className={`text-lg font-semibold mb-1 ${
                  plan.highlighted ? "text-green-200 light:text-green-800" : "text-white light:text-slate-900"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mb-6 ${
                  plan.highlighted ? "text-green-100 light:text-green-700" : "text-slate-400 light:text-slate-500"
                }`}
              >
                {plan.description}
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span
                  className={`text-sm ${
                    plan.highlighted ? "text-green-100 light:text-green-700" : "text-slate-400 light:text-slate-500"
                  }`}
                >
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <svg
                      className={`w-5 h-5 shrink-0 ${
                        plan.highlighted ? "text-green-200 light:text-green-700" : "text-green-300 light:text-green-600"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className={`block w-full py-3 text-center rounded-full font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-green-400 text-slate-950 hover:bg-green-300"
                    : "bg-slate-800 border border-slate-600 text-white hover:border-green-400 hover:text-green-200 light:bg-slate-100 light:border-slate-300 light:text-slate-800 light:hover:text-green-700"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
