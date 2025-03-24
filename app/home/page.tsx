'use client'
import { Suspense, lazy } from 'react'
import { motion } from 'motion/react'

const DynamicLogo = lazy(() => import('./components/DynamicLogo'))

const HomePage = () => {
  return (
    <div className="snap-y snap-mandatory overflow-y-auto flex flex-col h-screen w-full bg-gradient-to-b from-background to-background/80">
      <div className="snap-always relative snap-center min-h-screen flex justify-center pt-24">
        <motion.div
          className="text-center z-10 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h3
            className="text-3xl italic"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hello, I'm
          </motion.h3>
          <motion.h1
            className="text-5xl font-extrabold tracking-tight lg:text-7xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Ryozm
          </motion.h1>
          <motion.h3
            className="text-3xl italic"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            A front-end developer{' '}
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1
              }}
              className="inline-block"
            >
              ❤️
            </motion.span>
          </motion.h3>
        </motion.div>

        <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full">
          <Suspense>
            <DynamicLogo />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default HomePage
