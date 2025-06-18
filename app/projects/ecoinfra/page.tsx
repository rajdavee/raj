import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function EcoInfra() {
  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>

          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">EcoInfra</h1>
            <Badge>Live</Badge>
          </div>

          <p className="text-xl text-gray-600 mb-8">
            MERN + Python IoT infrastructure dashboard for monitoring environmental data in real-time.
          </p>

          <div className="flex items-center gap-4 mb-12">
            <Button asChild>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Code
              </Link>
            </Button>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Overview</h2>
          <p>
            EcoInfra is a comprehensive IoT dashboard that monitors environmental data from multiple sensors across
            different locations. The system provides real-time visualization, alerts, and historical data analysis for
            environmental monitoring.
          </p>

          <h2>Role & Tech Stack</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {["MongoDB", "Express.js", "React", "Node.js", "Python", "IoT", "WebSocket", "Chart.js"].map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
          <p>
            Led the full-stack development, from IoT sensor integration using Python to building the React dashboard and
            Node.js backend with real-time data processing.
          </p>

          <h2>Key Features</h2>
          <ul>
            <li>Real-time data visualization with interactive charts</li>
            <li>Multi-location sensor monitoring</li>
            <li>Automated alert system for threshold breaches</li>
            <li>Historical data analysis and reporting</li>
            <li>Mobile-responsive dashboard</li>
            <li>Data export functionality (CSV, PDF)</li>
          </ul>

          <h2>Challenges & Solutions</h2>
          <p>
            <strong>Challenge:</strong> Handling high-frequency sensor data while maintaining real-time dashboard
            performance.
          </p>
          <p>
            <strong>Solution:</strong> Implemented data aggregation strategies, WebSocket connections for real-time
            updates, and efficient MongoDB indexing to handle thousands of data points per minute.
          </p>

          <h2>Outcome</h2>
          <p>
            Successfully deployed across 15+ monitoring stations, processing over 1M+ data points daily. Reduced manual
            monitoring time by 85% and improved environmental compliance reporting accuracy.
          </p>
        </div>
      </div>
    </div>
  )
}
