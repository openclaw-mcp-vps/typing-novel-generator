import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TypingForge — Generate Custom Typing Practice from Any Text',
  description: 'Convert articles, books, code, or custom content into typing practice exercises with real-time WPM tracking, accuracy metrics, and progress analytics.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d6fe2743-742c-46d0-ae3a-852a1998a4f3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
