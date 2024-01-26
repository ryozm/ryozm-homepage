import { Book, Briefcase, Mail, User } from 'lucide-react'
import { Suspense, lazy } from 'react'

const DynamicLogo = lazy(() => import('./components/DynamicLogo'))
const Cursor = lazy(() => import('./components/Cursor'))

const Home = () => {
  return (
    <div className=" snap-y snap-mandatory overflow-y-auto flex flex-col h-screen w-full">
      <Suspense>
        <Cursor />
      </Suspense>
      <div className="snap-always border-t-2 relative snap-center min-h-screen pt-[100px] bg-slate-400 dark:bg-slate-900">
        <div className="text-center">
          <h3 className="text-3xl italic">Hello,I'm </h3>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Ryozm
          </h1>
          <h3 className="text-3xl italic">A front-end developer ❤️.</h3>
        </div>
        <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full">
          <Suspense>
            <DynamicLogo />
          </Suspense>
        </div>
      </div>
      <div className="snap-always border-t-2 snap-center min-h-screen pt-[100px] bg-slate-400 dark:bg-slate-900">
        <div className="text-3xl italic flex justify-center items-center">
          <User className="mr-2 h-8 w-8" />
          About
        </div>
      </div>
      <div className="snap-always border-t-2 snap-center min-h-screen pt-[100px] bg-slate-400 dark:bg-slate-900">
        <div className="text-3xl italic flex justify-center items-center">
          <Briefcase className="mr-2 h-8 w-8" />
          Works
        </div>
      </div>
      <div className="snap-always border-t-2 snap-center min-h-screen pt-[100px] bg-slate-400 dark:bg-slate-900">
        <div className="text-3xl italic flex justify-center items-center">
          <Book className="mr-2 h-8 w-8" />
          Posts
        </div>
      </div>
      <div className="snap-always border-t-2 snap-center min-h-screen pt-[100px] bg-slate-400 dark:bg-slate-900">
        <div className="text-3xl italic flex justify-center items-center">
          <Mail className="mr-2 h-8 w-8" />
          Contact
        </div>
      </div>
    </div>
  )
}

export default Home
