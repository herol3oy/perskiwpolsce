import { NAVIGATIONS } from '@/constance/navigations'
import { SOCIAL_ICONS } from '@/constance/social-icons'
import Link from 'next/link'

const YEAR = new Date().getFullYear()

const Footer = () => (
  <footer className="my-20 flex flex-col gap-10">
    <ul className="flex justify-center gap-2 md:gap-10">
      {NAVIGATIONS.map((nav) => (
        <li
          className="transition-slow w-20 rounded-full p-2 text-center font-bold text-gray-400 hover:text-purple-600"
          key={nav}
        >
          <Link href={`/${nav.toLocaleLowerCase()}`}>{nav}</Link>
        </li>
      ))}
    </ul>
    <ul className="flex justify-center gap-5">
      {SOCIAL_ICONS.map((icon) => (
        <li className="transition-slow w-7 cursor-pointer" key={icon.title}>
          <Link href={icon.link} target="_blank">
            {icon.svg}
          </Link>
        </li>
      ))}
    </ul>
    <small className="text-center text-gray-400">
      © {YEAR} Metro Code. Made with 🍄 in Warsaw, Poland.{' '}
    </small>
  </footer>
)

export default Footer
