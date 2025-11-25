import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, PenTool, Target, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const technologies = [
  "Fine-tuning", "React", "PostgreSQL", "Content Strategy", "OpenAI", "Python", "Next.js", "Stripe"
]

const features = [
  {
    icon: PenTool,
    title: "Brand-Consistent Writing",
    description: "Fine-tuned models that maintain consistent brand voice and messaging across all content"
  },
  {
    icon: Target,
    title: "Multi-Format Generation",
    description: "Create blog posts, social media content, emails, and marketing copy with optimized formats"
  },
  {
    icon: Zap,
    title: "Workflow Integration",
    description: "Seamless integration with content calendars and approval workflows for team collaboration"
  }
]

export default function SmartContentGenerator() {
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
            Content Generation Platform
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Marketing content generator using fine-tuned models, creating blog posts and social media content
            with brand consistency and automated workflow integration.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Marketing Solution</h2>
          <p className="text-gray-600 mb-6">
            Developed a comprehensive content generation platform that helps marketing teams
            create consistent, high-quality content at scale while maintaining brand voice
            and meeting specific campaign objectives.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Platform Capabilities</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Generate 500+ word blog posts in under 2 minutes</li>
            <li>Create social media content for 5+ platforms simultaneously</li>
            <li>Email campaign generation with A/B testing suggestions</li>
            <li>SEO optimization with keyword integration and meta descriptions</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Features</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Next.js frontend with real-time content preview</li>
            <li>PostgreSQL database for content templates and brand guidelines</li>
            <li>Fine-tuned GPT models for brand-specific content generation</li>
            <li>User authentication and team collaboration features</li>
            <li>Analytics dashboard for content performance tracking</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Impact</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Content pieces generated: 1,200+ across 15 client brands</li>
            <li>Time savings: 70% reduction in content creation time</li>
            <li>Quality consistency: 4.3/5 average client satisfaction score</li>
            <li>Active users: 45+ marketing professionals using platform monthly</li>
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