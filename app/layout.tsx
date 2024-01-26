import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Header from '@/components/layout/Header'
import { Suspense, lazy } from 'react'

const Cursor = lazy(() => import('@/components/Cursor'))

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: `Ryozm's website`,
  description: `Ryozm's website`
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn(
          'min-w-[300px] min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          // disableTransitionOnChange
        >
          <Header />
          <div className="bg-[#f9f6f4] dark:bg-[#1c2025] min-h-screen">
            {children}
          </div>
          <Suspense>
            <Cursor />
          </Suspense>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
