import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Incident Runbook Builder — Build Playbooks from Past Outages',
  description: 'Analyze past incidents to automatically generate response playbooks for SRE teams and DevOps engineers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d68ded93-97b0-4b26-a73b-5eaaac9fee3b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
