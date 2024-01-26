import { Suspense, lazy } from 'react'

const DynamicLogo = lazy(() => import('./components/DynamicLogo'))

const HomePage = () => {
  return (
    <div className=" snap-y snap-mandatory overflow-y-auto flex flex-col h-screen w-full">
      <div className="snap-always border-b-2 relative snap-center min-h-screen pt-[100px]">
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
    </div>
  )
}

export default HomePage
