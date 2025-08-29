type Item = {
  title: string
  period: string
  detail?: string
}

import Reveal from "@/components/reveal"

export default function EducationTimeline({ items }: { items: Item[] }) {
  return (
    <ol className="relative mt-4 list-none border-s-l border-slate-700 ps-6">
      {items.map((it, idx) => (
        <li key={idx} className="group relative mb-8 ms-4">
          <Reveal delay={idx * 0.1}>
            <div
              className="absolute -start-1.5 mt-1 h-3 w-3 rounded-full border border-white bg-blue-600 transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true"
            />
            <div className="rounded-lg border border-slate-800/60 bg-slate-900/40 p-4 shadow-sm transition-colors duration-300 group-hover:shadow-md group-hover:bg-slate-900/70">
              <h3 className="text-lg font-semibold text-white">{it.title}</h3>
              <p className="mt-1 text-sm text-white">{it.period}</p>
              {it.detail && <p className="mt-1 text-white">{it.detail}</p>}
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  )
}
