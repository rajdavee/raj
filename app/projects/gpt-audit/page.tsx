import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function GPTAudit() {
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
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">GPT-Audit AI</h1>
            <Badge>Live</Badge>
          </div>

          <p className="text-xl text-gray-600 mb-8">
            Python + GPT-4 powered content review tool for automated quality assurance.
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
            GPT-Audit AI is an automated content review system that uses GPT-4 to analyze and audit various types of
            content for quality, compliance, and consistency. The tool helps content teams maintain high standards at
            scale.
          </p>

          <h2>Role & Tech Stack</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Python", "FastAPI", "GPT-4", "PostgreSQL", "Redis", "Docker", "Celery"].map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
          <p>
            Architected and developed the entire system, from the Python backend with FastAPI to the AI integration and
            queue management for processing large volumes of content.
          </p>

          <h2>Key Features</h2>
          <ul>
            <li>Automated content quality scoring</li>
            <li>Compliance checking against custom guidelines</li>
            <li>Batch processing for large content volumes</li>
            <li>Detailed audit reports with recommendations</li>
            <li>API integration for existing workflows</li>
            <li>Custom rule engine for specific requirements</li>
          </ul>

          <h2>Challenges & Solutions</h2>
          <p>
            <strong>Challenge:</strong> Processing large volumes of content while maintaining accuracy and managing API
            costs effectively.
          </p>
          <p>
            <strong>Solution:</strong> Implemented intelligent batching, content preprocessing to reduce token usage,
            and a caching system for similar content patterns, reducing costs by 60% while maintaining quality.
          </p>

          <h2>Outcome</h2>
          <p>
            Deployed across 3 major content platforms, processing 10,000+ pieces of content daily. Reduced manual review
            time by 75% and improved content quality scores by 45% through consistent automated feedback.
          </p>
        </div>
      </div>
    </div>
  )
}
