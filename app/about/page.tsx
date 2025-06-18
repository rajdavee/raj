import { Code, Lightbulb, Target } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const timeline = [
  {
    year: "2020",
    title: "Learning Phase",
    description:
      "Started with HTML, CSS, and JavaScript. Built my first responsive website and fell in love with web development.",
  },
  {
    year: "2021",
    title: "First Deployments",
    description:
      "Learned React and Node.js. Deployed my first full-stack application and discovered the joy of seeing code come to life.",
  },
  {
    year: "2022",
    title: "Freelance Start",
    description:
      "Began freelancing while studying. Worked on 10+ projects, learning client communication and project management.",
  },
  {
    year: "2023",
    title: "Product Collaborations",
    description:
      "Joined product teams as a contractor. Contributed to scalable applications serving thousands of users.",
  },
  {
    year: "2024",
    title: "Full Stack Mastery",
    description:
      "Expanded into Python and AI integration. Building products that solve real problems with modern technology.",
  },
]

const values = [
  {
    icon: Code,
    title: "Simplicity over noise",
    description: "Clean, readable code that solves problems without unnecessary complexity.",
  },
  {
    icon: Target,
    title: "Function over flash",
    description: "Beautiful interfaces that prioritize user experience and accessibility.",
  },
  {
    icon: Lightbulb,
    title: "Long-term impact over hype",
    description: "Building solutions that stand the test of time and create lasting value.",
  },
]

export default function About() {
  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">About Me</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            From curious beginner to full-stack developer, here's my journey in building digital experiences that
            matter.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Beyond the Code</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or
            mentoring aspiring developers. I believe in the power of community and continuous learning in shaping the
            future of web development.
          </p>
        </div>
      </div>
    </div>
  )
}
