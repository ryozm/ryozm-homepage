'use client'
import { Copy, ExternalLink, Github, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'

const ContactPage = () => {
  const [greeting, setGreeting] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) setGreeting('Good morning!')
    else if (hour < 18) setGreeting('Good afternoon!')
    else setGreeting('Good evening!')
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText('ryozming@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md sm:max-w-2xl mx-auto p-6 sm:p-8 rounded-lg shadow-xl transform transition duration-500 hover:scale-105">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
          {greeting}
        </h1>
        <p className="mb-6 sm:mb-8 text-gray-500 text-base sm:text-lg">
          I'm thrilled you're here! Whether you have a project in mind or just
          want to connect, I'm always excited to chat about new opportunities.
        </p>

        <div className="space-y-4 sm:space-y-6">
          <div className="group">
            <button
              onClick={copyEmail}
              className="flex items-center space-x-3 text-base sm:text-lg hover:text-indigo-500 transition duration-150 ease-in-out focus:outline-none"
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
              <span>ryozming@gmail.com</span>
              <Copy className="h-4 w-4 sm:h-5 sm:w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </button>
            {copied && (
              <span className="text-green-500 text-sm ml-8 sm:ml-9 animate-fade-in-down">
                Copied to clipboard!
              </span>
            )}
          </div>
          <div className="group">
            <a
              href="https://github.com/ryozm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-base sm:text-lg hover:text-indigo-500 transition duration-150 ease-in-out focus:outline-none"
            >
              <Github className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
              <span>github.com/ryozm</span>
              <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>
          </div>
        </div>

        <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-gray-500">
          I'll get back to you faster than you can say "React hooks"! Looking
          forward to our potential collaboration.
        </p>
      </div>
    </div>
  )
}

export default ContactPage
