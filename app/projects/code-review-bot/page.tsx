import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Code, GitPullRequest, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const technologies = [
  "GitHub API", "Python", "FastAPI", "Code Analysis", "CI/CD", "OpenAI", "AST", "Docker"
]

const features = [
  {
    icon: Code,
    title: "Code Analysis",
    description: "Static analysis and pattern detection for common bugs and code quality issues"
  },
  {
    icon: GitPullRequest,
    title: "PR Integration",
    description: "Seamless GitHub integration with automated comments on pull requests"
  },
  {
    icon: CheckCircle,
    title: "Smart Suggestions",
    description: "Context-aware recommendations for code improvements and best practices"
  }
]

export default function CodeReviewBot() {
  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Code Review Assistant
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            LLM-powered code analysis tool that provides automated suggestions and identifies
            potential issues in pull requests, improving code quality and developer productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mb-16">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                  <feature.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="prose prose-lg max-w-none mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Development Tool</h2>
          <p className="text-gray-600 mb-6">
            Built an automated code review assistant that integrates with GitHub to provide
            intelligent feedback on pull requests, helping teams maintain code quality
            and catch potential issues early in the development process.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Automated detection of common coding issues and anti-patterns</li>
            <li>Security vulnerability identification with severity scoring</li>
            <li>Performance optimization suggestions</li>
            <li>Code style and best practice recommendations</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Implementation</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>GitHub webhook integration for real-time PR analysis</li>
            <li>FastAPI backend with async processing for scalability</li>
            <li>AST (Abstract Syntax Tree) parsing for deep code analysis</li>
            <li>LLM integration for context-aware code understanding</li>
            <li>Configurable rules engine for team-specific standards</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Impact & Results</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Pull requests analyzed: 500+ across multiple repositories</li>
            <li>Issues identified: 200+ potential bugs and improvements</li>
            <li>Developer adoption: 78% of team members actively use suggestions</li>
            <li>Review time reduction: 30% decrease in manual review time</li>
          </ul>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}