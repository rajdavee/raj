import { Code, Lightbulb, Target } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const timeline = [
  {
    year: "2021",
    title: "Systems Foundation",
    description:
      "Built foundational expertise in distributed systems and high-performance computing architectures. Started with GPU computing fundamentals.",
  },
  {
    year: "2022",
    title: "GPU Computing Specialization",
    description:
      "Developed deep expertise in CUDA programming and GPU-accelerated computing. Led first multi-GPU training projects with measurable performance gains.",
  },
  {
    year: "2023",
    title: "AI Infrastructure Leadership",
    description:
      "Promoted to lead AI infrastructure initiatives. Architected distributed training systems and optimized inference pipelines serving enterprise workloads.",
  },
  {
    year: "2024",
    title: "Technical Leadership & Innovation",
    description:
      "Leading cross-functional teams of 8+ engineers building next-generation GPU-accelerated AI platforms and secure hardware attestation systems.",
  },
]

const values = [
  {
    icon: Code,
    title: "Performance at scale",
    description: "Architecting systems that handle massive computational workloads with optimal resource utilization.",
  },
  {
    icon: Target,
    title: "Technical excellence",
    description: "Deep expertise in GPU computing, distributed systems, and AI infrastructure optimization.",
  },
  {
    icon: Lightbulb,
    title: "Innovation leadership",
    description: "Driving breakthrough solutions in GPU-accelerated computing and secure AI systems.",
  },
]

export default function About() {
  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">About Me</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            From systems engineer to AI infrastructure technical lead over 4+ years, here's my journey in building
            high-performance computing solutions that power the future.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">My Journey</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white font-semibold text-sm">
                    {item.year.slice(-2)}
                  </div>
                  {index < timeline.length - 1 && <div className="mt-4 h-16 w-px bg-gray-300" />}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dev Values */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Dev Values</h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title} className="text-center border-gray-200">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                    <value.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Personal Note */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Leadership</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Over 4+ years, I've led technical teams in designing GPU-accelerated AI infrastructure, from distributed training systems
            to secure hardware attestation. My expertise spans CUDA optimization, multi-GPU architectures, and
            building production-ready AI systems that scale to enterprise demands with proven results.
          </p>
        </div>
      </div>
    </div>
  )
}
