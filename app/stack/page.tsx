import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const techStack = {
  "AI & Machine Learning": {
    description: "Artificial Intelligence and Machine Learning Solutions",
    technologies: [
      { name: "LangChain", level: "Expert", description: "Framework for building LLM applications" },
      { name: "OpenAI API", level: "Expert", description: "Large Language Model integration" },
      { name: "RAG", level: "Advanced", description: "Retrieval Augmented Generation" },
      { name: "Vector Databases", level: "Advanced", description: "Pinecone, Weaviate, ChromaDB" },
      { name: "Hugging Face", level: "Intermediate", description: "ML models and transformers" },
      { name: "TensorFlow", level: "Intermediate", description: "Machine Learning framework" },
    ],
  },
  Frontend: {
    description: "Modern web development with React ecosystem",
    technologies: [
      { name: "React", level: "Expert", description: "Component-based UI development" },
      { name: "Next.js", level: "Expert", description: "Full-stack React framework" },
      { name: "TypeScript", level: "Advanced", description: "Type-safe JavaScript development" },
      { name: "Tailwind CSS", level: "Expert", description: "Utility-first CSS framework" },
      { name: "Framer Motion", level: "Intermediate", description: "Animation library for React" },
    ],
  },
  Backend: {
    description: "Server-side development and API design",
    technologies: [
      { name: "Node.js", level: "Expert", description: "JavaScript runtime for servers" },
      { name: "Express.js", level: "Expert", description: "Web framework for Node.js" },
      { name: "Python", level: "Advanced", description: "Versatile programming language" },
      { name: "FastAPI", level: "Advanced", description: "Modern Python web framework" },
      { name: "GraphQL", level: "Intermediate", description: "Query language for APIs" },
    ],
  },
  Database: {
    description: "Data storage and management solutions",
    technologies: [
      { name: "MongoDB", level: "Expert", description: "NoSQL document database" },
      { name: "PostgreSQL", level: "Advanced", description: "Relational database system" },
      { name: "Redis", level: "Intermediate", description: "In-memory data structure store" },
      { name: "Prisma", level: "Advanced", description: "Next-generation ORM" },
    ],
  },
  Infrastructure: {
    description: "Deployment, hosting, and DevOps tools",
    technologies: [
      { name: "Vercel", level: "Expert", description: "Frontend deployment platform" },
      { name: "Docker", level: "Intermediate", description: "Containerization platform" },
      { name: "AWS", level: "Intermediate", description: "Cloud computing services" },
      { name: "Git", level: "Expert", description: "Version control system" },
      { name: "GitHub Actions", level: "Intermediate", description: "CI/CD automation" },
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
            The tools and technologies I use to build modern, scalable web applications.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Always Learning</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Technology evolves rapidly, and so do I. I'm constantly exploring new tools, frameworks, and best practices
            to stay at the forefront of web development. Currently diving deeper into AI integration and serverless
            architectures.
          </p>
        </div>
      </div>
    </div>
  )
}
