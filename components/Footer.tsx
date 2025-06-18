import Link from "next/link"
import { Github, Mail, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Raj Dave
            </Link>
            <p className="text-sm text-gray-600">Building clean code for a messy world.</p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/rajdavee"
              className="text-gray-400 hover:text-gray-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link href="mailto:raj.dave@jashom.com" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Mail className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/rajdavee"
              className="text-gray-400 hover:text-gray-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Raj Dave. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
