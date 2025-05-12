// pages/index.tsx
import { formulas } from './data/formulas';

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Serum Formula Parser Reference</h1>
      <ul className="grid gap-4">
        {formulas.map((f) => (
          <li key={f.id} className="border p-4 rounded shadow">
            <h2 className="font-semibold text-lg">{f.name}</h2>
            <p className="text-sm text-gray-700">{f.description}</p>
            <span className="text-xs bg-gray-200 p-1 rounded">{f.category}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
