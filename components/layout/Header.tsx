'use client'
import { useState, MouseEvent } from 'react'
import { Button } from '@/components/ui/button'
import {
  // Book,
  // Briefcase,
  ChevronsDownUp,
  Code,
  Home,
  Mail,
  Menu,
  Moon,
  Sun,
  User
} from 'lucide-react'
import { useTheme } from 'next-themes'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

const Header = () => {
  const { theme, setTheme } = useTheme()

  const router = useRouter()

  const [logoHover, setLogoHover] = useState(false)

  const [menuOpen, setMenuOpen] = useState(false)

  function toggleTheme(event: MouseEvent) {
    const isDark = theme === 'light'

    const isAppearanceTransition =
      !!document.startViewTransition &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!isAppearanceTransition) {
      setTheme(isDark ? 'dark' : 'light')
      return
    }

    const x = event.clientX
    const y = event.clientY
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )

    const transition = document.startViewTransition(async () => {
      setTheme(isDark ? 'dark' : 'light')
    })
    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`
      ]
      document.documentElement.animate(
        {
          clipPath: isDark ? [...clipPath].reverse() : clipPath
        },
        {
          duration: 400,
          easing: 'ease-out',
          pseudoElement: isDark
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)'
        }
      )
    })
  }

  return (
    <header className="fixed backdrop-blur-md bg-opacity-50 dark:bg-opacity-50 z-20 shadow-lg top-4 left-4 right-4 px-4 lg:px-6 h-16 bg-gray-200 dark:bg-gray-700 text-gray-800 justify-between flex flex-row items-center rounded-[40px]">
      <div
        onMouseEnter={() => setLogoHover(true)}
        onMouseLeave={() => setLogoHover(false)}
        className="transition-all group flex justify-center items-center cursor-pointer font-bold"
      >
        <Code
          className="transition-all w-6 h-6 mr-2 text-primary"
          strokeWidth={logoHover ? 4 : 2}
        />
        <span className="transition-all font-bold text-primary group-hover:text-cyan-500 group-hover:border-b dark:border-gray-400">
          Ryozm
        </span>
      </div>
      <div className="flex flex-row items-center gap-2 font-bold">
        <Button
          className="hidden md:flex hover:ring ring-primary"
          variant="link"
          onClick={() => router.push('/home')}
        >
          <Home className="mr-2 h-4 w-4" />
          Home
        </Button>
        <Button
          className="hidden md:flex hover:ring ring-primary"
          variant="link"
          onClick={() => router.push('/about')}
        >
          <User className="mr-2 h-4 w-4" />
          About
        </Button>
        {/* <Button
          className="hidden md:flex hover:ring ring-primary"
          variant="link"
          onClick={() => router.push('/works')}
        >
          <Briefcase className="mr-2 h-4 w-4" />
          Works
        </Button>
        <Button
          className="hidden md:flex hover:ring ring-primary"
          variant="link"
          onClick={() => router.push('/posts')}
        >
          <Book className="mr-2 h-4 w-4" />
          Posts
        </Button> */}
        <Button
          className="hidden md:flex hover:ring ring-primary"
          variant="link"
          onClick={() => router.push('/contact')}
        >
          <Mail className="mr-2 h-4 w-4" />
          Contact
        </Button>
        <DropdownMenu open={menuOpen} onOpenChange={open => setMenuOpen(open)}>
          <DropdownMenuTrigger asChild>
            <Button className="flex md:hidden" variant="link">
              <Menu
                className={cn(
                  !menuOpen ? 'scale-100 rotate-0' : 'scale-0 rotate-180',
                  'h-6 w-6 transition-all duration-500'
                )}
              />
              <ChevronsDownUp
                className={cn(
                  menuOpen ? 'scale-100 rotate-0' : 'scale-0 rotate-180',
                  'absolute h-6 w-6 transition-all duration-500'
                )}
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => router.push('/home')}>
                <Home className="mr-2 h-4 w-4" />
                <span>Home</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push('/about')}>
                <User className="mr-2 h-4 w-4" />
                <span>About</span>
              </DropdownMenuItem>
              {/* <DropdownMenuItem onClick={() => router.push('/works')}>
                <Briefcase className="mr-2 h-4 w-4" />
                <span>Works</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push('/posts')}>
                <Book className="mr-2 h-4 w-4" />
                <span>Posts</span>
              </DropdownMenuItem> */}
              <DropdownMenuItem onClick={() => router.push('/contact')}>
                <Mail className="mr-2 h-4 w-4" />
                <span>Contact</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          className="rounded-full"
          onClick={toggleTheme}
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
