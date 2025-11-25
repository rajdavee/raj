import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Brain, Search, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const technologies = [
  "Python", "FastAPI", "Vector DB", "Redis", "LangChain", "Transformers", "PostgreSQL", "Docker"
]

const features = [
  {
    icon: Brain,
    title: "Multi-modal Embeddings",
    description: "Advanced embedding models for text, images, and documents with GPU-accelerated processing"
  },
  {
    icon: Search,
    title: "Vector Search at Scale",
    description: "Sub-millisecond vector similarity search across millions of embeddings using optimized CUDA kernels"
  },
  {
    icon: Zap,
    title: "Real-time Knowledge Synthesis",
    description: "Dynamic knowledge graph construction and real-time context assembly for precise AI responses"
  }
]

export default function NeuralRAG() {
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
            Enterprise RAG System
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Production-ready RAG implementation with vector search optimization,
            serving 10K+ daily queries for enterprise knowledge management.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Implementation</h2>
          <p className="text-gray-600 mb-6">
            Built a scalable RAG system using modern vector databases and efficient retrieval algorithms
            to support enterprise knowledge management with reliable performance and accuracy.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>92% accuracy on internal knowledge retrieval tasks</li>
            <li>Sub-200ms query response times for typical use cases</li>
            <li>Support for 100K+ document corpus with regular updates</li>
            <li>Multi-format document processing (PDF, Word, text)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Architecture Components</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>FastAPI backend with async request handling</li>
            <li>Redis caching layer for frequently accessed embeddings</li>
            <li>Automated document processing pipeline</li>
            <li>Vector database optimization for similarity search</li>
            <li>Configurable chunking strategies for different content types</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Production Metrics</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Daily queries: 10K+ with 99.5% uptime</li>
            <li>Document processing: 5,000 documents/hour</li>
            <li>Response time: P95 under 200ms</li>
            <li>Cost efficiency: 30% reduction vs previous system</li>
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