"use client"

const technologies = [
  "MongoDB",
  "Express.js",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "FastAPI",
  "Git",
  "Vercel",
  "Tailwind CSS",
  "TypeScript",
  "Docker",
  "Firebase",
  "PostgreSQL",
  "Redis",
  "AWS",
]

export default function TechMarquee() {
  return (
    <div className="relative overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...technologies, ...technologies].map((tech, index) => (
          <span
            key={index}
            className="mx-8 text-lg font-medium text-gray-700 hover:text-indigo-600 transition-colors cursor-pointer"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
