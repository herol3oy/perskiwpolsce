import { SOCIAL_ICONS } from '@/constance/social-icons'
import Link from 'next/link'

const YEAR = new Date().getFullYear()

const Footer = () => (
  <footer className="my-20 flex items-end justify-between gap-5">
    {/* <ul className="flex justify-center gap-2 md:gap-10">
      {NAVIGATIONS.map((nav) => (
        <li
          className="transition-slow w-20 rounded-full p-2 text-center font-bold text-gray-400 hover:text-purple-600"
          key={nav}
        >
          <Link href={`/${nav.toLocaleLowerCase()}`}>{nav}</Link>
        </li>
      ))}
    </ul> */}
    <small className="text-gray-400">
      Made with 🍄 in Warsaw, Poland. <br /> © {YEAR} Metro Code.{' '}
    </small>
    <ul className="flex justify-center gap-5">
      {SOCIAL_ICONS.map((icon) => (
        <li className="transition-slow w-7 cursor-pointer" key={icon.title}>
          <Link className='hover:fill-gray-600 ' href={icon.link} target="_blank">
            {icon.svg}
          </Link>
        </li>
      ))}
    </ul>
  </footer>
)

export default Footer
