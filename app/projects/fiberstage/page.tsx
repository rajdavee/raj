import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function FiberStage() {
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
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">FiberStage</h1>
            <Badge>Live</Badge>
          </div>

          <p className="text-xl text-gray-600 mb-8">
            A modern React + Next.js portfolio framework with built-in animations and responsive design.
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
            FiberStage is a comprehensive portfolio framework built with React and Next.js, designed to help developers
            create stunning portfolio websites with minimal setup. The framework includes pre-built components,
            animations, and responsive layouts.
          </p>

          <h2>Role & Tech Stack</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"].map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
          <p>
            As the sole developer, I handled everything from initial concept and design to development and deployment.
            The project showcases modern React patterns, TypeScript integration, and advanced CSS techniques.
          </p>

          <h2>Key Features</h2>
          <ul>
            <li>Responsive design that works on all devices</li>
            <li>Built-in dark/light mode toggle</li>
            <li>Smooth animations and micro-interactions</li>
            <li>SEO optimized with Next.js</li>
            <li>Component-based architecture for easy customization</li>
            <li>Performance optimized with lazy loading and code splitting</li>
          </ul>

          <h2>Challenges & Solutions</h2>
          <p>
            <strong>Challenge:</strong> Creating a framework that's both flexible and opinionated enough to provide
            value out of the box.
          </p>
          <p>
            <strong>Solution:</strong> Implemented a modular component system with customizable themes and layouts,
            allowing users to maintain their unique style while benefiting from pre-built functionality.
          </p>

          <h2>Outcome</h2>
          <p>
            FiberStage has been used by over 50+ developers to create their portfolio websites. The framework reduces
            development time by 70% while maintaining high performance and accessibility standards.
          </p>
        </div>
      </div>
    </div>
  )
}
