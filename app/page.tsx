import Link from "next/link"
import { ArrowRight, Code2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import TechMarquee from "@/components/TechMarquee"

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 sm:mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 transition-all duration-300 bg-white/50 backdrop-blur-sm">
              Available for new opportunities{" "}
              <span className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Let's connect <ArrowRight className="inline h-4 w-4 ml-1" />
              </span>
            </div>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            <span className="block">Raj Dave</span>
            <span className="block text-xl sm:text-2xl lg:text-3xl font-normal text-gray-600 mt-2 sm:mt-3">
              AI Infrastructure & GPU Computing Technical Lead
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 max-w-2xl mx-auto px-4">
            Technical leader with 4+ years specializing in{" "}
            <span className="font-semibold text-gray-900">GPU-accelerated computing</span>,{" "}
            <span className="font-semibold text-gray-900">distributed AI systems</span>, and{" "}
            <span className="font-semibold text-gray-900">high-performance ML infrastructure</span>.
            Building reliable, scalable AI solutions.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6 px-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-200 text-center"
            >
              Get in touch
            </Link>
            <Link href="/projects" className="w-full sm:w-auto text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors duration-200 text-center">
              View projects <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Brief Intro Section */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center mb-4 sm:mb-6">
            <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-600" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Production AI systems, GPU optimization, distributed computing
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed px-4">
            With 4+ years of hands-on experience, I build and optimize GPU-accelerated AI systems for production environments.
            From multi-GPU training pipelines to efficient inference deployment, I focus on creating reliable,
            scalable solutions that deliver measurable business value.
          </p>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">Core Technologies</h2>
            <p className="text-sm sm:text-base text-gray-600">Technologies I work with in production</p>
          </div>
          <TechMarquee />
        </div>
      </section>
    </div>
  )
}
