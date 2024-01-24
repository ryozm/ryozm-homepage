import { Book, Briefcase, Mail, User } from 'lucide-react'
import DynamicLogo from './components/DynamicLogo'
import Header from './components/Header'

const Home = () => {
  return (
    <div className=" snap-y snap-mandatory overflow-y-auto flex flex-col h-screen w-full">
      <Header />
      <div className="snap-always border-t-2 relative snap-center min-h-screen pt-[100px] bg-slate-400 dark:bg-slate-900">
        <div className="text-center">
          <h3 className="text-3xl italic">Hello,I'm Ryozm</h3>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            I'm a front-end developer ❤️.
          </h1>
        </div>
        <div className=" absolute top-0 bottom-0 left-0 right-0 w-full h-full">
          <DynamicLogo />
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
