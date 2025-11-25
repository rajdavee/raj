import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Zap, Layers, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const technologies = [
  "PyTorch", "CUDA", "Distributed", "MLOps", "Python", "Docker", "Kubernetes", "Monitoring"
]

const features = [
  {
    icon: Zap,
    title: "GPU Optimization",
    description: "Optimized multi-GPU training with efficient memory utilization and communication"
  },
  {
    icon: Layers,
    title: "Distributed Architecture",
    description: "Scalable training system supporting 4-8 GPU configurations with fault tolerance"
  },
  {
    icon: BarChart3,
    title: "Performance Monitoring",
    description: "Real-time training metrics and automated performance optimization"
  }
]

export default function DistributedTraining() {
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
            Multi-GPU Training System
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Distributed training pipeline supporting 4-8 GPU setups with optimized communication
            and reliable checkpointing for large model training workflows.
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
            Built a production-grade distributed training system that scales efficiently across multiple GPUs
            with optimized communication patterns and robust fault tolerance mechanisms.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>85%+ GPU utilization across 4-8 GPU configurations</li>
            <li>Automated gradient synchronization with compressed communication</li>
            <li>Robust checkpointing system for long-running training jobs</li>
            <li>Dynamic batch size adjustment based on available memory</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Results</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Training throughput: 8,000+ tokens/second on 4x GPU setup</li>
            <li>Memory efficiency: Support for models up to 13B parameters</li>
            <li>Communication overhead: &lt;8% of total training time</li>
            <li>Scaling efficiency: 80%+ linear scaling up to 8 GPUs</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Components</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>PyTorch distributed training with optimized data loaders</li>
            <li>Custom monitoring and logging for training metrics</li>
            <li>Automated hyperparameter optimization</li>
            <li>Integration with MLOps pipeline for model versioning</li>
            <li>Kubernetes deployment with GPU resource management</li>
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