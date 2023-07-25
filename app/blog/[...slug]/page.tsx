import { HAMED_SEDIGHI_PORTRAIT } from '@/constance/my-portrait'
import { formatDate } from '@/utils/format-date'
import { getPostContent } from '@/utils/get-post-content'
import { MarkdownOptions } from '@/utils/markdown-options'
import Markdown from 'markdown-to-jsx'
import Image from 'next/image'

interface PostPageProp {
  params: { slug: string }
}

export async function generateMetadata({ params }: PostPageProp) {
  const slug = params.slug
  const post = getPostContent(slug)

  return {
    title: `Metro Code | ${post.data.title}`,
  }
}

const PostPage = ({ params }: PostPageProp) => {
  const slug = params.slug
  const post = getPostContent(slug)

  return (
    <>
      <div className="">
        <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tighter md:leading-none lg:text-5xl">
          {post.data.title}
        </h1>
        <div className="flex items-center gap-2 text-gray-400">
          <Image
            src={HAMED_SEDIGHI_PORTRAIT}
            width={45}
            height={45}
            alt="Hamed Sedighi"
            className="rounded-full"
          />
          <small className="flex gap-2">
            <span>Hamed Sedighi</span>/
            <time dateTime={post.data.date}>{formatDate(post.data.date)}</time>
          </small>
        </div>
      </div>

      <article className="mt-5">
        <Markdown options={MarkdownOptions}>{post.content}</Markdown>
      </article>
    </>
  )
}

export default PostPage
