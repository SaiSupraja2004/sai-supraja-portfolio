import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function InternshipCard({
  title,
  period,
  description,
  certificateUrl,
}: {
  title: string
  period: string
  description: string
  certificateUrl: string
}) {
  return (
    <Card className="h-full border-slate-200 transition-shadow hover:shadow-md">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{period}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-white">{description}</p>
        <div className="mt-4">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <a href={certificateUrl} target="_blank" rel="noopener noreferrer">
              Certificate
              <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export function CertificationCard({
  title,
  certificateUrl,
}: {
  title: string
  certificateUrl: string
}) {
  return (
    <Card className="h-full border-slate-200 transition-shadow hover:shadow-md">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Button asChild variant="outline" className="hover:bg-slate-100 bg-transparent">
          <a href={certificateUrl} target="_blank" rel="noopener noreferrer">
            Certificate
            <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}

export function ProjectCard({
  title,
  description,
  tags,
}: {
  title: string
  description: string
  tags?: string[]
}) {
  return (
    <Card className="h-full border-slate-200 transition-shadow hover:shadow-md">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
