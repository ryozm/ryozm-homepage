import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CodeIcon, GithubIcon, MailIcon } from 'lucide-react'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <main className="flex p-10 py-[80px] flex-col items-center justify-center space-y-10">
      <Avatar className="w-32 h-32 rounded-full ring ring-primary">
        <AvatarImage src="https://github.com/ryozm.png" />
        <AvatarFallback>Ryozm</AvatarFallback>
      </Avatar>
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Ryozm</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Front-end Developer | Open Source Enthusiast
        </p>
      </div>
      <div className="w-full max-w-2xl space-y-4">
        <h2 className="text-2xl font-bold">Skills & Interests</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <CodeIcon className="h-6 w-6" />
            <span>JavaScript</span>
          </div>
          <div className="flex items-center gap-2">
            <CodeIcon className="h-6 w-6" />
            <span>React</span>
          </div>
          <div className="flex items-center gap-2">
            <CodeIcon className="h-6 w-6" />
            <span>React Native</span>
          </div>
          <div className="flex items-center gap-2">
            <CodeIcon className="h-6 w-6" />
            <span>Vue</span>
          </div>
          <div className="flex items-center gap-2">
            <CodeIcon className="h-6 w-6" />
            <span>Node.js</span>
          </div>
          <div className="flex items-center gap-2">
            <CodeIcon className="h-6 w-6" />
            <span>Java</span>
          </div>
        </div>
      </div>
      <div className="w-full max-w-2xl space-y-4">
        <h2 className="text-2xl font-bold">Education & Experience</h2>
        <div className="space-y-2">
          <div className="font-semibold">Software Engineering Major - XMUT</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            2016 - 2020
          </div>
        </div>
        <div className="space-y-2">
          <div className="font-semibold">
            Front-end Developer - Rootcloud Co., Ltd.
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            2020 - 2024
          </div>
        </div>
        <div className="space-y-2">
          <div className="font-semibold">Freelancer</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            2024 - Present
          </div>
        </div>
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
          <a
            className="flex items-center gap-2 hover:ring ring-primary rounded-md p-2"
            href="https://twitter.com/ryozm__"
            target="_blank"
          >
            <Image
              width={24}
              height={24}
              alt="X"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAAAAABWESUoAAAA3ElEQVR4Ac2SGQDFMBBE1ylOcYpTner0neK0TnGpU53iFKc6xWl+p+f25D7InZ295Cv0mGjFUOzWDVVVa/WykaBiaBBFfsiyory3JASRjs8mInqxUGRw47CIBIy7Ew0Sh0nED4OXCwkNh8h7GrrgCkVK9a7w6Q2BjoVa6Oo9EZEDVJ7I1M4UeMDXzIEhvoukFxNMaP8o4gpon1l9qnqc7DcPIgpd7Ce0t/fJVO0q0qIsVeuY1XwNYK1gwm8J2GAqvHRF5mD7BcG0Rl6yegjw0BqdakE8Bni0RyjyDf4Y1Y0n0wNT4wAAAABJRU5ErkJggg=="
            />
            <span>@ryozm__</span>
          </a>
        </div>
      </div>
    </main>
  )
}

export default AboutPage
