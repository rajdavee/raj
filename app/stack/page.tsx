import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const techStack = {
  "GPU Computing & HPC": {
    description: "High-Performance Computing and GPU-Accelerated Systems",
    technologies: [
      { name: "CUDA", level: "Expert", description: "Custom kernel development and optimization" },
      { name: "A100 / H100", level: "Expert", description: "NVIDIA enterprise GPU architectures" },
      { name: "NCCL", level: "Expert", description: "Multi-GPU communication optimization" },
      { name: "TensorRT", level: "Advanced", description: "GPU inference optimization" },
      { name: "Triton", level: "Advanced", description: "GPU kernel development framework" },
      { name: "cuDNN", level: "Advanced", description: "Deep learning GPU primitives" },
    ],
  },
  "AI Infrastructure": {
    description: "Distributed AI Systems and Machine Learning Platforms",
    technologies: [
      { name: "PyTorch", level: "Expert", description: "Distributed training and inference" },
      { name: "Transformers", level: "Expert", description: "Large language model architectures" },
      { name: "Distributed Training", level: "Expert", description: "Multi-node, multi-GPU scaling" },
      { name: "Model Optimization", level: "Expert", description: "Quantization, pruning, distillation" },
      { name: "MLOps", level: "Advanced", description: "Production ML pipeline management" },
      { name: "Inference Serving", level: "Advanced", description: "High-throughput model serving" },
    ],
  },
  "Systems Programming": {
    description: "Low-level systems and performance optimization",
    technologies: [
      { name: "Rust", level: "Expert", description: "Systems programming and cryptography" },
      { name: "Python", level: "Expert", description: "AI/ML development and automation" },
      { name: "C++", level: "Advanced", description: "Performance-critical applications" },
      { name: "SPDM Protocol", level: "Advanced", description: "Hardware security attestation" },
      { name: "Cryptography", level: "Advanced", description: "ECDSA, secure protocols" },
    ],
  },
  "Cloud & Infrastructure": {
    description: "Enterprise-scale deployment and orchestration",
    technologies: [
      { name: "Kubernetes", level: "Expert", description: "GPU workload orchestration" },
      { name: "Docker", level: "Expert", description: "Containerized GPU applications" },
      { name: "AWS", level: "Advanced", description: "EC2 P4/P5 GPU instances" },
      { name: "Slurm", level: "Advanced", description: "HPC cluster management" },
      { name: "Prometheus", level: "Advanced", description: "GPU metrics and monitoring" },
    ],
  },
}

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-green-100 text-green-800"
    case "Advanced":
      return "bg-blue-100 text-blue-800"
    case "Intermediate":
      return "bg-yellow-100 text-yellow-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function Stack() {
  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Tech Stack</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Advanced technologies and frameworks I leverage to architect GPU-accelerated AI systems
            and high-performance computing infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {Object.entries(techStack).map(([category, { description, technologies }]) => (
            <Card key={category} className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl">{category}</CardTitle>
                <CardDescription className="text-base">{description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-semibold text-gray-900">{tech.name}</h3>
                          <Badge className={getLevelColor(tech.level)} variant="secondary">
                            {tech.level}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">{tech.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-indigo-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Leadership</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Leading innovation in GPU computing and AI infrastructure. Currently advancing the state-of-the-art
            in multi-GPU distributed systems, secure hardware attestation, and next-generation
            AI acceleration technologies.
          </p>
        </div>
      </div>
    </div>
  )
}
