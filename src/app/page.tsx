// pages/index.tsx
import { formulas } from './data/formulas';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Serum Formula Parser Reference</h1>
      <ul className="grid gap-6">
        {formulas.map((f) => (
          <li key={f.id} className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
            <div className="flex items-start gap-6">
              <div className="w-32 h-32 bg-black flex items-center justify-center rounded-md">
                <Image
                  src={f.image}
                  alt={`Waveform for ${f.name}`}
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="font-semibold text-xl mb-2 text-gray-900">{f.name}</h2>
                <p className="text-gray-600 mb-3 leading-relaxed">{f.description}</p>
                <span className="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full">{f.category}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
