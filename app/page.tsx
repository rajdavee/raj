import Link from "next/link"
import { ArrowRight, Code2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import TechMarquee from "@/components/TechMarquee"

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 transition-all duration-300">
              Available for new opportunities{" "}
              <span className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Let's connect <ArrowRight className="inline h-4 w-4 ml-1" />
              </span>
            </div>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            <span className="block">Raj Dave</span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-600 mt-2">
              Full Stack Developer specializing in MERN Stack, Next.js, and Python
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Expert in building modern web applications with{" "}
            <span className="font-semibold text-gray-900">RAG</span> and{" "}
            <span className="font-semibold text-gray-900">Gen AI</span> integration. Crafting intelligent solutions
            that scale.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get in touch
            </Link>
            <Link href="/projects" className="text-sm font-semibold leading-6 text-gray-900">
              View projects <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Brief Intro Section */}
      <section className="px-6 py-16 lg:px-8 bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center mb-6">
            <Sparkles className="h-8 w-8 text-indigo-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Quality code, scalable systems, curiosity-driven development
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            I believe in writing code that doesn't just work today, but stands the test of time. Every project is an
            opportunity to build something meaningful, solve real problems, and push the boundaries of what's possible
            with modern web technologies.
          </p>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tech Stack</h2>
            <p className="text-gray-600">Technologies I work with daily</p>
          </div>
          <TechMarquee />
        </div>
      </section>
    </div>
  )
}
