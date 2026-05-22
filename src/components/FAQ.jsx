"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-700 light:border-slate-200">
      <button
        className="w-full py-5 flex items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base font-medium text-white light:text-slate-900">{question}</span>
        <svg
          className={`w-5 h-5 text-green-300 shrink-0 ml-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <p className="pb-5 text-slate-300 leading-relaxed light:text-slate-600">{answer}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  const { heading, subheading, items } = siteConfig.faq;

  return (
    <section id="faq" className="py-24 px-6 bg-slate-950 light:bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 light:text-slate-900">
            {heading}
          </h2>
          <p className="text-lg text-slate-300 light:text-slate-600">
            {subheading}
          </p>
        </div>
        <div className="rounded-2xl border border-slate-700 bg-slate-900/70 px-6 neon-glow light:border-slate-200 light:bg-slate-50">
          {items.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
