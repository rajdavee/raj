import Link from "next/link"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: "neural-rag",
    title: "Enterprise RAG System",
    description: "Production RAG implementation with vector search and GPU acceleration, serving 10K+ daily queries with high accuracy.",
    tags: ["RAG", "Python", "Vector DB", "FastAPI", "Redis"],
    status: "Live",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "ai-customer-support",
    title: "AI Customer Support Bot",
    description: "Intelligent chatbot with RAG-enhanced responses, handling 5K+ customer queries monthly with 85% resolution rate.",
    tags: ["OpenAI API", "LangChain", "React", "Node.js", "MongoDB"],
    status: "Live",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "document-qa",
    title: "Document Q&A Assistant",
    description: "AI-powered document analysis tool that extracts insights from PDFs and documents with natural language queries.",
    tags: ["Python", "Streamlit", "OpenAI", "PDF Processing", "NLP"],
    status: "Live",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "code-review-bot",
    title: "Code Review Assistant",
    description: "LLM-powered code analysis tool that provides automated suggestions and identifies potential issues in pull requests.",
    tags: ["GitHub API", "Python", "FastAPI", "Code Analysis", "CI/CD"],
    status: "Beta",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "smart-content-generator",
    title: "Content Generation Platform",
    description: "Marketing content generator using fine-tuned models, creating blog posts and social media content with brand consistency.",
    tags: ["Fine-tuning", "React", "PostgreSQL", "Content Strategy"],
    status: "Live",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "distributed-training",
    title: "Multi-GPU Training System",
    description: "Distributed training pipeline supporting 4-8 GPU setups with optimized communication and checkpointing.",
    tags: ["PyTorch", "CUDA", "Distributed", "MLOps"],
    status: "Live",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function Projects() {
  return (
    <div className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">Projects</h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 max-w-2xl mx-auto px-4">
            Real-world AI projects showcasing 4+ years of hands-on experience in GPU computing,
            distributed systems, and production AI deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-lg transition-all duration-300 border-gray-200 h-full flex flex-col"
            >
              <CardHeader className="flex-shrink-0">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg sm:text-xl font-semibold leading-tight">{project.title}</CardTitle>
                  <Badge variant={project.status === "Live" ? "default" : "secondary"} className="shrink-0">{project.status}</Badge>
                </div>
                <CardDescription className="text-sm sm:text-base mt-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-center mt-auto">
                  <Button asChild size="sm" className="group/btn w-full sm:w-auto">
                    <Link href={`/projects/${project.id}`}>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
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
