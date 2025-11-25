import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Shield, Cpu, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const technologies = [
  "Rust", "CUDA", "SPDM", "H100", "Cryptography", "Security", "NVML", "ECDSA P-384"
]

const features = [
  {
    icon: Shield,
    title: "Hardware Security",
    description: "Real certificate chain validation using NVIDIA GPU hardware attestation APIs"
  },
  {
    icon: Lock,
    title: "Cryptographic Verification",
    description: "ECDSA P-384 signature verification with SHA-384 for maximum security"
  },
  {
    icon: Cpu,
    title: "GPU Integration",
    description: "Direct integration with H100 Confidential Computing features"
  }
]

export default function GPUAttestation() {
  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            nvTrust GPU Attestation System
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enterprise-grade secure hardware attestation system for NVIDIA H100 GPUs implementing
            cryptographic verification protocols for trusted AI workloads.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mb-16">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                  <feature.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="prose prose-lg max-w-none mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Overview</h2>
          <p className="text-gray-600 mb-6">
            The nvTrust system implements a two-stage verification architecture where the server performs
            initial cryptographic verification and the client independently validates results to detect tampering.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Architecture</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Remote attestation verification server with strict error handling</li>
            <li>Core cryptographic verification library with zero bypass logic</li>
            <li>Client SDK for independent result validation</li>
            <li>GPU data collection agent with NVML integration</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Security Features</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Real certificate chain validation using NVIDIA APIs</li>
            <li>CRL/OCSP certificate revocation checking</li>
            <li>Timing attack protection and replay protection</li>
            <li>32-byte cryptographically secure random nonces</li>
          </ul>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}