// pages/index.tsx
import { formulas } from './data/formulas';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8 min-h-screen bg-[#10182A]">
      <div className="flex items-baseline mb-8">
        <h1 className="text-3xl font-bold text-white">Serum Formula Parser Reference</h1>
        <span className="text-lg text-blue-200 font-light ml-4">by Mikail Syed</span>
      </div>
      <ul className="grid gap-6">
        {formulas.map((f) => (
          <li key={f.id} className="border border-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-[#182040]">
            <div className="flex items-start gap-6">
              <div className="w-32 h-32 bg-black flex items-center justify-center rounded-md overflow-hidden p-2">
                <Image
                  src={f.image}
                  alt={`Waveform for ${f.name}`}
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="font-semibold text-xl mb-2 text-white">{f.name}</h2>
                <p className="text-gray-300 mb-3 leading-relaxed">{f.description}</p>
                <span className="inline-block px-3 py-1 text-sm bg-blue-900 text-blue-200 rounded-full">{f.category}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
