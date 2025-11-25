import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, FileText, Search, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const technologies = [
  "Python", "Streamlit", "OpenAI", "PDF Processing", "NLP", "PyPDF2", "FAISS", "Pandas"
]

const features = [
  {
    icon: FileText,
    title: "Document Processing",
    description: "Intelligent parsing of PDFs, Word docs, and text files with content extraction"
  },
  {
    icon: Search,
    title: "Natural Language Queries",
    description: "Ask questions in plain English and get accurate answers from document content"
  },
  {
    icon: Lightbulb,
    title: "Insight Generation",
    description: "Automatic summarization and key insight extraction from large documents"
  }
]

export default function DocumentQA() {
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
            Document Q&A Assistant
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            AI-powered document analysis tool that extracts insights from PDFs and documents
            using natural language queries, making information discovery effortless.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Application Features</h2>
          <p className="text-gray-600 mb-6">
            Created an intuitive document analysis tool that allows users to upload documents
            and ask questions in natural language, receiving accurate answers based on the content
            with source citations and confidence scores.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Capabilities</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Support for PDF, DOCX, and TXT file formats up to 50MB</li>
            <li>Automatic text extraction and preprocessing</li>
            <li>Question answering with 88% accuracy on test documents</li>
            <li>Document summarization and key point extraction</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Architecture</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Streamlit web interface for easy document upload and interaction</li>
            <li>PyPDF2 and python-docx for document text extraction</li>
            <li>OpenAI embeddings for semantic search capabilities</li>
            <li>FAISS vector database for efficient similarity search</li>
            <li>Chunk-based processing for handling large documents</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Usage Statistics</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Documents processed: 2,000+ across various domains</li>
            <li>Average processing time: 30 seconds for 100-page documents</li>
            <li>User satisfaction: 4.1/5 based on feedback surveys</li>
            <li>Query response time: Average 2.5 seconds per question</li>
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