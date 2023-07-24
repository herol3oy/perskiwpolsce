import { FRAMEWORK_STACKS } from '@/constance/framework-stacks'
import { HAMED_SEDIGHI_PORTRAIT } from '@/constance/my-portrait'
import Image from 'next/image'

const AboutMe = () => (
  <div className="mb-20 flex flex-col-reverse gap-5 xl:flex-row">
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-black">
        Hey, I&apos;m Hamed <small className="text-purple-600">/hə.med/</small>
      </h1>
      <p className="text-gray-600">
        Welcome to <code className="font-black">Metro Code</code> where I share
        my thoughts and ideas as a front-end developer. I&apos;m a front-end
        developer based in Warsaw, Poland focused on web applications using:
      </p>
      <ul className="flex justify-center gap-5">
        {FRAMEWORK_STACKS.map((icon) => (
          <li className="transition-slow w-7" key={icon.title}>
            {icon.svg}
          </li>
        ))}
      </ul>
    </div>
    <Image
      className="h-52 w-52 rounded-md bg-gradient-to-r from-cyan-100 to-blue-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:rotate-3 hover:shadow-xl"
      src={HAMED_SEDIGHI_PORTRAIT}
      width={200}
      height={200}
      alt="Hamed Sedighi"
    />
  </div>
)

export default AboutMe
