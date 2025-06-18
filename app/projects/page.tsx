import Link from "next/link"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: "fiberstage",
    title: "FiberStage",
    description: "A modern React + Next.js portfolio framework with built-in animations and responsive design.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    status: "Live",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "ecoinfra",
    title: "EcoInfra",
    description: "MERN + Python IoT infrastructure dashboard for monitoring environmental data in real-time.",
    tags: ["MERN", "Python", "IoT", "MongoDB", "Express"],
    status: "Live",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "promptforge",
    title: "PromptForge",
    description: "OpenAI prompt management tool for organizing, testing, and optimizing AI prompts.",
    tags: ["React", "OpenAI API", "Node.js", "PostgreSQL"],
    status: "Beta",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "gpt-audit",
    title: "GPT-Audit AI",
    description: "Python + GPT-4 powered content review tool for automated quality assurance.",
    tags: ["Python", "GPT-4", "FastAPI", "Machine Learning"],
    status: "Live",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function Projects() {
  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Projects</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            A collection of projects that showcase my skills in full-stack development, from concept to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-lg transition-all duration-300 border-gray-200"
              data-cursor="view"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                  <Badge variant={project.status === "Live" ? "default" : "secondary"}>{project.status}</Badge>
                </div>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <Button asChild size="sm" className="group/btn">
                    <Link href={`/projects/${project.id}`}>
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
