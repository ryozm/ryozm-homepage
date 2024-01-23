'use client'
import { useState, SVGProps } from 'react'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

const Header = () => {
  const { theme, setTheme } = useTheme()

  const [logoHover, setLogoHover] = useState(false)
  return (
    <header className="fixed z-20 shadow-lg top-4 left-4 right-4 px-4 lg:px-6 h-16 bg-gray-200 dark:bg-gray-700 text-gray-800 justify-between flex flex-row items-center rounded-[40px]">
      <div
        onMouseEnter={() => setLogoHover(true)}
        onMouseLeave={() => setLogoHover(false)}
        className="transition-all group flex justify-center items-center cursor-pointer font-bold"
      >
        <CodeIcon
          className="transition-all w-6 h-6 mr-2 text-primary"
          strokeWidth={logoHover ? 4 : 2}
        />
        <span className="transition-all font-bold text-primary group-hover:text-cyan-500 group-hover:border-b dark:border-gray-400">
          Ryozm
        </span>
      </div>
      <div className="flex flex-row items-center gap-2 font-bold">
        <Button variant="link">about</Button>
        <Button variant="link">work</Button>
        <Button variant="link">post</Button>
        <Button variant="link">contact</Button>
        <Button
          className="rounded-full"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          variant="outline"
          size="icon"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 " />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-cyan-700" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  )
}

export default Header

function CodeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}
