"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CheckCircle2, Github, Linkedin, Mail, Phone } from "lucide-react"
import TypewriterText from "@/components/typewriter-text"
import Reveal from "@/components/reveal"
import EducationTimeline from "@/components/education-timeline"
import Skills from "@/components/skills"
import { CertificationCard, InternshipCard, ProjectCard } from "@/components/cards"
import { cn } from "@/lib/utils"
import React from "react"

function SiteHeader() {
  const NAV = [
    { id: "home", label: "Home" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "internships", label: "Internships" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "achievements", label: "Achievements" },
  ]
  const [active, setActive] = React.useState<string>("home")

  React.useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[]
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = e.target.id
            setActive(id)
          }
        })
      },
      {
        // Ensure the section counts as active a bit before it reaches the top,
        // accounting for sticky header height.
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0.1,
      },
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        {/* brand */}
        <a href="#home" className="text-sm font-semibold tracking-tight">
          Sai Supraja Dharani
        </a>

        {/* primary nav */}
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "rounded-md px-2.5 py-1.5 text-sm transition-colors",
                active === item.id
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="border-t md:hidden">
        <nav aria-label="Primary Mobile" className="mx-auto max-w-5xl px-4 py-2">
          <div className="flex snap-x items-center gap-2 overflow-x-auto">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "snap-start rounded-md px-3 py-1.5 text-sm transition-colors",
                  active === item.id
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                )}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default function HomePage() {
  const heroTags = ["Aspiring Software Engineer", "Web Developer", "Machine Learning Enthusiast", "AWS Cloud Learner"]

  return (
    <div className="dark">
      <SiteHeader />
      <main className="min-h-dvh bg-background text-foreground">
        {/* Hero */}
        <section id="home" className="scroll-mt-24 mx-auto max-w-5xl px-4 pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="flex flex-col-reverse items-center gap-8 md:grid md:grid-cols-2 md:items-center md:gap-12">
            <Reveal>
              <div className="w-full">
                <h1 className="text-pretty text-3xl font-semibold tracking-tight md:text-5xl">Sai Supraja Dharani</h1>
                <div className="mt-3 h-9 text-lg text-muted-foreground md:h-10 md:text-xl">
                  <TypewriterText items={heroTags} />
                </div>
                <p className="mt-4 max-w-prose text-balance text-muted-foreground">
                  I’m a tech enthusiast passionate about building on the web, exploring machine learning, and learning
                  the foundations of cloud with AWS. I enjoy crafting simple, useful solutions.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <a href="https://drive.google.com/file/d/1NkASE87_1WR7JBsxz_pchv4Jizl8Py7_/view?usp=sharing" download aria-label="Download Resume">
                      Resume
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="#projects">View Projects</a>
                  </Button>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <a
                    href="https://github.com/SaiSupraja2004"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile: SaiSupraja2004"
                    className="inline-flex items-center gap-2 rounded-md px-1.5 py-1 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">GitHub</span>
                    <span className="hidden sm:inline">GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/sai-supraja-dharani-65598a28a"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn: Sai Supraja Dharani"
                    className="inline-flex items-center gap-2 rounded-md px-1.5 py-1 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">LinkedIn</span>
                    <span className="hidden sm:inline">LinkedIn</span>
                  </a>

                  <a
                    href="mailto:saisupraja1126@gmail.com"
                    aria-label="Email: saisupraja1126@gmail.com"
                    className="inline-flex items-center gap-2 rounded-md px-1.5 py-1 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">Email</span>
                    <span className="hidden sm:inline">saisupraja1126@gmail.com</span>
                  </a>

                  <a
                    href="tel:7731842843"
                    aria-label="Phone: 7731842843"
                    className="inline-flex items-center gap-2 rounded-md px-1.5 py-1 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">Phone</span>
                    <span className="hidden sm:inline">7731842843</span>
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative">
                <div className="relative h-48 w-48 overflow-hidden rounded-2xl ring-1 ring-slate-200 md:h-64 md:w-64">
                  <Image
                    src="/images/profile.png"
                    alt="Professional photo of Sai Supraja Dharani"
                    fill
                    className="object-cover transition-transform duration-500 will-change-transform hover:scale-105"
                    sizes="(max-width: 768px) 192px, 256px"
                    priority
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 mx-auto max-w-5xl px-4 py-8 md:py-12">
          <Reveal>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl">About Me</CardTitle>
                <CardDescription>A short introduction</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I am a Computer Science undergraduate at SR University (2022–2026) with strong interest in software
                  engineering, web development, and machine learning. I’ve also begun exploring cloud fundamentals with
                  AWS. I enjoy learning by building practical projects and improving them iteratively.
                </p>
              </CardContent>
            </Card>
          </Reveal>
        </section>

        {/* Education */}
        <section id="education" className="scroll-mt-24 mx-auto max-w-5xl px-4 py-8 md:py-12">
          <Reveal>
            <h2 className="text-pretty text-2xl font-semibold">Education</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <EducationTimeline
              items={[
                {
                  title: "SR University — B.Tech in Computer Science",
                  period: "Oct 2022 – June 2026",
                  detail: "GPA: 9.2/10",
                },
                {
                  title: "Resonance Junior College — Intermediate (MPC)",
              
                  detail: "Score: 975/1000",
                },
                {
                  title: "St. Joseph's High School",
              
                  detail: "GPA: 10/10",
                },
              ]}
            />
          </Reveal>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-24 mx-auto max-w-5xl px-4 py-8 md:py-12">
          <Reveal>
            <h2 className="text-pretty text-2xl font-semibold">Technical Skills</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <Skills
              categories={[
                {
                  title: "Languages",
                  items: ["Python", "C (Basic)", "SQL", "Java"],
                },
                {
                  title: "Technologies",
                  items: ["VS Code", "AWS (Cloud Fundamentals)"],
                },
                {
                  title: "Web Programming",
                  items: ["HTML", "CSS", "JavaScript"],
                },
              ]}
            />
          </Reveal>
        </section>

        {/* Internships */}
        <section id="internships" className="scroll-mt-24 mx-auto max-w-5xl px-4 py-8 md:py-12">
          <Reveal>
            <h2 className="text-pretty text-2xl font-semibold">Internships</h2>
          </Reveal>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Reveal delay={0.05}>
              <InternshipCard
                title="NIT Warangal (Machine Learning)"
                period="July 2024"
                description="Online purchase viewers intentions using ML"
                certificateUrl="https://drive.google.com/file/d/1lNHyKbNwb9eJIxwCotFnizFPzWRkzwD0/view?usp=sharing"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <InternshipCard
                title="InternPe (Web Development)"
                period="July 2024"
                description="4 key tasks, hands-on web development"
                certificateUrl="https://drive.google.com/file/d/19VvlOhznmBRsn-t_n5eK7wYWY7rWgtri/view"
              />
            </Reveal>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-24 mx-auto max-w-5xl px-4 py-8 md:py-12">
          <Reveal>
            <h2 className="text-pretty text-2xl font-semibold">Projects</h2>
          </Reveal>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <Reveal delay={0.05}>
              <ProjectCard
                title="Organic Life"
                description="E-commerce website built using HTML, CSS, and JavaScript."
                tags={["HTML", "CSS", "JavaScript"]}
              />
            </Reveal>
            <Reveal delay={0.1}>
              <ProjectCard
                title="Wine Quality Prediction"
                description="Machine learning model to predict wine quality."
                tags={["Python", "ML"]}
              />
            </Reveal>
            <Reveal delay={0.15}>
              <ProjectCard
                title="Obstacle Avoiding Robot"
                description="Autonomous navigation with obstacle avoidance."
                tags={["Robotics"]}
              />
            </Reveal>
          </div>
        </section>

        {/* Achievements */}
        <section id="achievements" className="scroll-mt-24 mx-auto max-w-5xl px-4 py-8 md:py-12">
          <Reveal>
            <h2 className="text-pretty text-2xl font-semibold">Achievements</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <ul className="mt-3 space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-500" aria-hidden="true" />
                <span>Participated in a 12-hour internal hackathon at SR University.</span>
              </li>
            </ul>
          </Reveal>
        </section>

        {/* Certifications */}
        <section id="certifications" className="scroll-mt-24 mx-auto max-w-5xl px-4 py-8 md:py-12">
          <Reveal>
            <h2 className="text-pretty text-2xl font-semibold">Certifications</h2>
          </Reveal>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Reveal delay={0.05}>
              <CertificationCard
                title="AWS Academy Cloud Foundations (2024)"
                certificateUrl="https://drive.google.com/file/d/1tg4KP2pWD2GopaDDSdt14rOtvlgCOx2m/view?usp=sharing"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <CertificationCard
                title="CCNA: Introduction to Networks (2024)"
                certificateUrl="https://drive.google.com/file/d/1FMbAVZcH77uWsJI7lOnRateYKHNS-0eM/view?usp=sharing"
              />
            </Reveal>
            <Reveal delay={0.15}>
              <CertificationCard
                title="CCNA: Switching, Routing & Wireless Essentials (2024)"
                certificateUrl="https://drive.google.com/file/d/1iPhNxIw4ZWNygmAHkAb0l6mbbcZG5tXI/view?usp=sharing"
              />
            </Reveal>
            <Reveal delay={0.2}>
              <CertificationCard
                title="AIML Virtual Internship – AWS Academy (2023)"
                certificateUrl="https://drive.google.com/file/d/1-q-7Z3-I18BOwQplEvDdWn69Q7_Q2qrK/view?usp=sharing"
              />
            </Reveal>
          </div>
        </section>

        {/* Footer note (no contact info per requirement) */}
        <footer className="mx-auto max-w-5xl px-4 pb-10 pt-6 text-center text-sm text-slate-500">
          <span>© {new Date().getFullYear()} Sai Supraja Dharani</span>
        </footer>
      </main>
    </div>
  )
}
