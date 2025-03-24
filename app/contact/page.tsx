'use client'
import { Copy, ExternalLink, Github, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

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

  // 定义动画变体
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const contactItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    },
    hover: { scale: 1.03, transition: { type: 'spring', stiffness: 400 } }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <motion.div
        className="w-full max-w-md sm:max-w-2xl mx-auto p-6 sm:p-8 rounded-lg shadow-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 transform transition duration-500 hover:scale-105"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.div
          className="flex items-center mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.div
            className="w-2 h-12 bg-indigo-500 rounded-full mr-4"
            initial={{ height: 0 }}
            animate={{ height: 48 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          ></motion.div>
          <motion.h1
            className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {greeting}
          </motion.h1>
        </motion.div>

        <motion.p
          className="mb-8 text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          I'm thrilled you're here! Whether you have a project in mind or just
          want to connect, I'm always excited to chat about new opportunities.
        </motion.p>

        <motion.div
          className="space-y-5 sm:space-y-6 mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="group p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
            variants={contactItemVariants}
            whileHover="hover"
          >
            <button
              onClick={copyEmail}
              className="w-full flex items-center space-x-3 text-base sm:text-lg hover:text-indigo-500 transition duration-150 ease-in-out focus:outline-none"
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 text-indigo-500" />
              <span className="flex-grow text-left">ryozming@gmail.com</span>
              <Copy className="h-4 w-4 sm:h-5 sm:w-5 opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
            </button>
            {copied && (
              <motion.span
                className="text-green-500 text-sm mt-2 flex items-center justify-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Copied to clipboard!
              </motion.span>
            )}
          </motion.div>

          <motion.div
            className="group p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
            variants={contactItemVariants}
            whileHover="hover"
          >
            <a
              href="https://github.com/ryozm"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center space-x-3 text-base sm:text-lg hover:text-indigo-500 transition duration-150 ease-in-out focus:outline-none"
            >
              <Github className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 text-indigo-500" />
              <span className="flex-grow text-left">github.com/ryozm</span>
              <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-gray-200 dark:border-gray-700 pt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.p
            className="text-sm text-gray-500 dark:text-gray-400 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.5 }}
          >
            Looking forward to our potential collaboration.
          </motion.p>
          <div className="mt-4 flex justify-center space-x-4">
            {[0, 1, 2].map(i => (
              <motion.span
                key={i}
                className={`inline-flex h-2 w-2 rounded-full ${
                  i === 0
                    ? 'bg-indigo-500'
                    : i === 1
                    ? 'bg-pink-500'
                    : 'bg-yellow-500'
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 1.9 + i * 0.2,
                  duration: 0.3,
                  type: 'spring'
                }}
                whileHover={{ scale: 1.5 }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ContactPage
