'use client';
import { SkinType } from '@/lib/types';

interface SkinSelectorProps {
  onSelect: (type: SkinType) => void;
}

const skinTypes: { id: SkinType; title: string; desc: string }[] = [
  { id: 'kuru', title: 'Dry Skin', desc: 'Flaky, rough, or tight feeling.' },
  { id: 'yagli', title: 'Oily Skin', desc: 'Shiny, greasy, and prone to breakouts.' },
  { id: 'karma', title: 'Combination', desc: 'Oily T-zone, dry or normal cheeks.' },
];

export default function SkinSelector({ onSelect }: SkinSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto mt-8">
      {skinTypes.map((type) => (
        <button
          key={type.id}
          onClick={() => onSelect(type.id)}
          className="group relative bg-white p-8 rounded-3xl border border-slate-100 text-left transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 hover:border-brand-light"
        >
          <div className="w-12 h-12 bg-brand-50 text-brand rounded-2xl flex items-center justify-center mb-6 transition-colors group-hover:bg-brand group-hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h3 className="text-xl font-semibold text-slate-800 mb-2">{type.title}</h3>
          <p className="text-slate-500 text-sm leading-relaxed">{type.desc}</p>
        </button>
      ))}
    </div>
  );
}