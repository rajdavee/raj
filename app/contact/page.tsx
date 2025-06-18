import { Mail, Phone, Linkedin, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Let's Build Something</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-gray-200">
            <CardHeader className="text-center">
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>Ready to start your next project? Here's how to reach me.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                  <Mail className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Email</p>
                  <a
                    href="mailto:raj.dave@jashom.com"
                    className="text-indigo-600 hover:text-indigo-500 transition-colors text-lg"
                  >
                    raj.dave@jashom.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                  <Phone className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Phone</p>
                  <a
                    href="tel:+919106532603"
                    className="text-indigo-600 hover:text-indigo-500 transition-colors text-lg"
                  >
                    +91 9106532603
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                  <Linkedin className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/rajdavee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-500 transition-colors text-lg"
                  >
                    linkedin.com/in/rajdavee
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                  <Github className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">GitHub</p>
                  <a
                    href="https://github.com/rajdavee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-500 transition-colors text-lg"
                  >
                    github.com/rajdavee
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="flex-1">
                    <a href="mailto:raj.dave@jashom.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="flex-1">
                    <a href="https://www.linkedin.com/in/rajdavee" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 text-center">
            <h3 className="font-semibold text-gray-900 mb-2">Ready to start your project?</h3>
            <p className="text-gray-600 mb-4">
              I'm currently available for new projects and collaborations. Let's discuss how we can work together.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                Available
              </span>
              <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                Remote Friendly
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
