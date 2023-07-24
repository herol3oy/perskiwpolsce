import { NAVIGATIONS } from '@/constance/navigations'
import Link from 'next/link'

const TopBar = () => (
  <nav className="mb-20 flex flex-col items-center justify-between md:flex-row">
    <Link href="/">
      <h1 className="text-xl font-extrabold">Metro Code</h1>
    </Link>
    <ul className="flex gap-1">
      {NAVIGATIONS.map((nav) => (
        <Link
          className="w-20 rounded-full p-3 text-center text-sm font-bold transition-all duration-300 hover:bg-black hover:text-white"
          href={`/${nav.toLocaleLowerCase()}`}
          key={nav}
        >
          <li>{nav}</li>
        </Link>
      ))}
    </ul>
  </nav>
)

export default TopBar
