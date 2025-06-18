import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function PromptForge() {
  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>

          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">PromptForge</h1>
            <Badge variant="secondary">Beta</Badge>
          </div>

          <p className="text-xl text-gray-600 mb-8">
            OpenAI prompt management tool for organizing, testing, and optimizing AI prompts.
          </p>

          <div className="flex items-center gap-4 mb-12">
            <Button asChild>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Code
              </Link>
            </Button>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Overview</h2>
          <p>
            PromptForge is a comprehensive tool for managing AI prompts, allowing users to organize, test, and optimize
            their prompts for various AI models. The platform includes version control, A/B testing, and performance
            analytics.
          </p>

          <h2>Role & Tech Stack</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {["React", "Node.js", "PostgreSQL", "OpenAI API", "TypeScript", "Prisma", "NextAuth"].map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
          <p>
            Full-stack development including API integration with OpenAI, database design for prompt versioning, and
            building an intuitive user interface for prompt management.
          </p>

          <h2>Key Features</h2>
          <ul>
            <li>Prompt library with categorization and tagging</li>
            <li>Version control for prompt iterations</li>
            <li>A/B testing framework for prompt optimization</li>
            <li>Performance analytics and success metrics</li>
            <li>Team collaboration features</li>
            <li>API integration with multiple AI providers</li>
          </ul>

          <h2>Challenges & Solutions</h2>
          <p>
            <strong>Challenge:</strong> Creating an efficient system for comparing prompt performance across different
            models and use cases.
          </p>
          <p>
            <strong>Solution:</strong> Developed a flexible testing framework that allows parallel execution of prompts
            across multiple models, with automated scoring and statistical analysis of results.
          </p>

          <h2>Outcome</h2>
          <p>
            Currently in beta with 200+ active users. Users report 40% improvement in prompt effectiveness and 60%
            reduction in time spent on prompt optimization. Planning public launch in Q2 2024.
          </p>
        </div>
      </div>
    </div>
  )
}
