import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Clock, Cpu, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const technologies = [
  "CUDA", "TensorRT", "Speculative Decoding", "Low-latency", "Optimization", "Custom Kernels", "Memory Pool"
]

const features = [
  {
    icon: Clock,
    title: "Sub-50ms Inference",
    description: "Ultra-low latency inference pipeline with custom CUDA kernels and memory optimization"
  },
  {
    icon: Cpu,
    title: "Speculative Decoding",
    description: "Advanced speculative decoding algorithms reducing inference time by 2.5x"
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Streaming token generation with optimized attention mechanisms and KV-cache management"
  }
]

export default function RealTimeLLM() {
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
            Real-time LLM Pipeline
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ultra-low latency inference pipeline achieving sub-50ms response times for large language models
            using custom CUDA kernels and advanced speculative decoding optimization.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Performance Engineering</h2>
          <p className="text-gray-600 mb-6">
            Engineered a breakthrough low-latency inference system that pushes the boundaries of what&apos;s possible
            with large language model serving, achieving latencies previously thought impossible.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Optimization Breakthroughs</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Custom CUDA kernels with hand-tuned memory access patterns</li>
            <li>Speculative decoding with 85% acceptance rate for 2.5x speedup</li>
            <li>Zero-copy memory management and GPU-persistent KV caches</li>
            <li>Optimized attention mechanisms with FlashAttention-3 integration</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Latency Breakdown</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>First token latency: &lt;25ms for 7B parameter models</li>
            <li>Token generation: 150+ tokens/second sustained</li>
            <li>Context processing: 10,000 tokens/second throughput</li>
            <li>Memory bandwidth utilization: &gt;90% of theoretical maximum</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Innovations</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Continuous batching with dynamic sequence length handling</li>
            <li>Multi-draft speculative decoding for complex prompts</li>
            <li>CUDA graph capture for elimination of kernel launch overhead</li>
            <li>Custom memory pool allocator with predictive prefetching</li>
            <li>Quantization-aware inference with INT4/FP16 mixed precision</li>
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