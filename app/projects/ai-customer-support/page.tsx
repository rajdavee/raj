import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, MessageCircle, Brain, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const technologies = [
  "OpenAI API", "LangChain", "React", "Node.js", "MongoDB", "WebSocket", "Express", "JWT"
]

const features = [
  {
    icon: MessageCircle,
    title: "Intelligent Conversations",
    description: "Natural language processing with context-aware responses and conversation memory"
  },
  {
    icon: Brain,
    title: "RAG Integration",
    description: "Knowledge base integration for accurate, up-to-date information retrieval"
  },
  {
    icon: Users,
    title: "Multi-channel Support",
    description: "Seamless integration with web chat, email, and messaging platforms"
  }
]

export default function AICustomerSupport() {
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
            AI Customer Support Bot
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Intelligent chatbot system with RAG-enhanced responses, successfully handling
            5K+ customer queries monthly with an 85% resolution rate.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
          <p className="text-gray-600 mb-6">
            Built an AI-powered customer support system that combines LangChain with OpenAI&apos;s API
            to provide intelligent, context-aware responses while maintaining conversation history
            and integrating with existing knowledge bases.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>85% query resolution rate without human intervention</li>
            <li>Average response time under 3 seconds</li>
            <li>Support for 20+ common customer inquiry types</li>
            <li>Seamless handoff to human agents when needed</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Implementation</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>React frontend with real-time WebSocket communication</li>
            <li>Node.js backend with Express and MongoDB for conversation storage</li>
            <li>LangChain integration for prompt management and memory</li>
            <li>Vector database for knowledge base search and retrieval</li>
            <li>Admin dashboard for monitoring conversations and analytics</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Metrics</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Monthly queries handled: 5,000+ with 99.2% uptime</li>
            <li>Customer satisfaction: 4.2/5 average rating</li>
            <li>Response accuracy: 92% based on user feedback</li>
            <li>Cost reduction: 60% compared to previous support model</li>
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