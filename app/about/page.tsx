'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CodeIcon, GithubIcon, MailIcon } from 'lucide-react'
import { motion } from 'motion/react'

const AboutPage = () => {
  return (
    <main className="flex min-h-screen p-10 py-[80px] flex-col items-center justify-center space-y-12 bg-gradient-to-b from-background to-background/80">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Avatar className="w-36 h-36 rounded-full ring-4 ring-primary shadow-lg hover:scale-105 transition-transform duration-300">
          <AvatarImage src="https://github.com/ryozm.png" />
          <AvatarFallback>Ryozm</AvatarFallback>
        </Avatar>
      </motion.div>
      
      <motion.div 
        className="text-center space-y-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Ryozm</h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          Front-end Developer | Open Source Enthusiast
        </p>
      </motion.div>
      
      <div className="w-full max-w-2xl space-y-4">
        <h2 className="text-2xl font-bold">Skills & Interests</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "JavaScript", "React", "React Native", 
            "Vue", "Node.js", "Java"
          ].map((skill, index) => (
            <motion.div 
              key={skill}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent transition-colors"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <CodeIcon className="h-5 w-5 text-primary" />
              <span>{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="w-full max-w-2xl space-y-4">
        <h2 className="text-2xl font-bold">Education & Experience</h2>
        {
          [
            {
              content: "Software Engineering Major - XMUT",
              date: "2016 - 2020"
            },
            {
              content: "Front-end Developer - Rootcloud Co., Ltd.",
              date: "2020 - 2024"
            },
            {
              content: "Freelancer",
              date: "2024 - Present"
            }
          ].map((item, index) => (
            <motion.div
              key={item.content}
              className="space-y-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
            <div className="font-semibold">
              {item.content}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {item.date}
            </div>
            </motion.div>
          ))
        }
      </div>
      <div className="w-full max-w-2xl space-y-4">
        <h2 className="text-2xl font-bold">Contact</h2>
        <div className="flex flex-col items-start gap-4">
          <a
            className="flex items-center gap-2 hover:ring ring-primary rounded-md p-2"
            href="https://github.com/ryozm"
            target="_blank"
          >
            <GithubIcon className="h-6 w-6" />
            <span>ryozm</span>
          </a>
          <a
            className="flex items-center gap-2 hover:ring ring-primary rounded-md p-2"
            href="mailto:ryozming@gmail.com"
          >
            <MailIcon className="h-6 w-6" />
            <span>ryozming@gmail.com</span>
          </a>
        </div>
      </div>
    </main>
  )
}

export default AboutPage
