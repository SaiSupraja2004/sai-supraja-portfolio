import { Badge } from "@/components/ui/badge"

type Cat = { title: string; items: string[] }

export default function Skills({ categories }: { categories: Cat[] }) {
  return (
    <div className="mt-4 grid gap-4 md:grid-cols-3">
      {categories.map((cat) => (
        <div key={cat.title} className="rounded-xl border border-slate-200 p-4">
          <h3 className="text-lg font-medium">{cat.title}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {cat.items.map((i) => (
              <Badge key={i} variant="secondary" className="bg-slate-100 text-slate-800 hover:bg-slate-200">
                {i}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
