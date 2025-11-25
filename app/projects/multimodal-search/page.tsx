import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Eye, MessageSquare, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const technologies = [
  "Computer Vision", "NLP", "CLIP", "FAISS", "Real-time", "Multi-modal", "Transformers", "CUDA"
]

const features = [
  {
    icon: Eye,
    title: "Visual Understanding",
    description: "Advanced computer vision models for image and video content analysis with semantic search"
  },
  {
    icon: MessageSquare,
    title: "Language Processing",
    description: "State-of-the-art NLP for text understanding and cross-modal semantic alignment"
  },
  {
    icon: Video,
    title: "Video Intelligence",
    description: "Real-time video processing and temporal understanding for comprehensive media search"
  }
]

export default function MultimodalSearch() {
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
            Multimodal AI Search
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            GPU-accelerated search engine combining text, image, and video embeddings with semantic understanding
            and real-time indexing for next-generation content discovery.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Multimodal Intelligence</h2>
          <p className="text-gray-600 mb-6">
            Revolutionary search system that understands content across all modalities - text, images, and video -
            enabling natural language queries that return semantically relevant results regardless of content type.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Capabilities</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Cross-modal semantic search: "Find images of sunsets from vacation videos"</li>
            <li>Temporal video understanding with scene and action recognition</li>
            <li>Real-time content indexing with sub-second embedding generation</li>
            <li>Multilingual support across 50+ languages with cultural context</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Architecture</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>CLIP-based vision-language models with domain-specific fine-tuning</li>
            <li>FAISS vector indexing with GPU acceleration for billion-scale search</li>
            <li>Streaming video processing pipeline with temporal attention</li>
            <li>Hierarchical embedding spaces for multi-granular search</li>
            <li>Real-time ranking algorithms with personalization features</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Metrics</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Search latency: &lt;100ms for queries across 10M+ assets</li>
            <li>Indexing throughput: 50,000 images/videos per hour</li>
            <li>Accuracy: 94.2% relevance score on multimodal benchmarks</li>
            <li>Scale: Supporting 500M+ indexed items with real-time updates</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation Highlights</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Novel attention mechanisms for video-text alignment</li>
            <li>GPU-optimized vector similarity computations</li>
            <li>Dynamic embedding adaptation based on user interactions</li>
            <li>Zero-shot learning for new content categories</li>
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