import AboutMe from '@/components/AboutMe'
import { formatDate } from '@/utils/format-date'
import { getPostMetadata } from '@/utils/get-post-metadata'
import Link from 'next/link'

export default function Home() {
  const postMetadata = getPostMetadata()

  return (
    <div className="flex flex-col gap-5">
      <AboutMe />
      <h1 className="text-2xl font-bold">Recent notes</h1>
      {postMetadata.map((p) => (
        <div className="flex justify-between" key={p.slug}>
          <Link
            className="w-fit transition-all duration-500 hover:text-gray-600"
            href={`/blog/${p.slug}`}
          >
            <p>{p.title}</p>
          </Link>
          <small className="text-gray-400">
            <time dateTime={p.date}>{formatDate(p.date)}</time>
          </small>
        </div>
      ))}
    </div>
  )
}
