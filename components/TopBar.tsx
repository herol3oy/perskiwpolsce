import { NAVIGATIONS } from '@/constance/navigations'
import Link from 'next/link'

const TopBar = () => (
  <nav className="mb-20 flex flex-col items-center justify-between md:flex-row">
    <Link href="/">
      <h1 className="text-xl font-extrabold hover:text-gray-400 transition-all duration-300 ease-in-out">Metro Code</h1>
    </Link>
    <ul className="flex gap-1">
      {NAVIGATIONS.map((nav) => (
        <Link
          className="w-28 rounded-md p-3 text-center text-sm font-bold transition-all duration-300 hover:bg-black hover:text-white"
          href={`/${nav.split(' ')[1].toLocaleLowerCase()}`}
          key={nav}
        >
          <li className="flex gap-2">
            <span>{nav.split(' ')[0]}</span>
            {nav.split(' ')[1]}
          </li>
        </Link>
      ))}
    </ul>
  </nav>
)

export default TopBar
