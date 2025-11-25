import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Gauge, Settings, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const technologies = [
  "TensorRT", "Model Optimization", "CUDA", "Kubernetes", "Auto-scaling", "PyTorch", "ONNX", "Triton"
]

const features = [
  {
    icon: Gauge,
    title: "Dynamic Model Switching",
    description: "Intelligent model selection based on request complexity and latency requirements"
  },
  {
    icon: Settings,
    title: "GPU Resource Allocation",
    description: "Optimized GPU memory and compute allocation with dynamic batching and request routing"
  },
  {
    icon: TrendingUp,
    title: "Cost Optimization",
    description: "Achieved 3x cost reduction through adaptive quality scaling and resource management"
  }
]

export default function AdaptiveInference() {
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
            Adaptive Inference Engine
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Intelligent GPU resource allocation system with dynamic model switching that achieved
            3x cost reduction while maintaining quality through adaptive scaling algorithms.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">System Architecture</h2>
          <p className="text-gray-600 mb-6">
            Built an intelligent inference orchestration system that dynamically adapts model selection,
            batch sizing, and GPU allocation based on real-time performance metrics and cost constraints.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Innovations</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>ML-based request complexity prediction for optimal model routing</li>
            <li>Dynamic GPU memory allocation with automatic defragmentation</li>
            <li>Multi-tier model serving with quality-latency trade-offs</li>
            <li>Real-time performance monitoring and adaptive scaling policies</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Results</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Cost reduction: 3x lower inference costs vs static deployment</li>
            <li>GPU utilization: 95%+ sustained utilization across fleet</li>
            <li>Quality preservation: 99.2% accuracy maintained across all tiers</li>
            <li>Latency optimization: 40% faster P99 response times</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Components</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>TensorRT model optimization pipeline with automatic INT8 quantization</li>
            <li>Kubernetes-native auto-scaling with GPU-aware scheduling</li>
            <li>Custom CUDA memory allocator for reduced fragmentation</li>
            <li>Distributed model registry with A/B testing capabilities</li>
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