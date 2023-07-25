import SyntaxHighLighter from '@/components/SyntaxHighLighter'
import { ReactNode } from 'react'

interface ComponentType {
  children: ReactNode
}

const H1 = ({ children, ...props }: ComponentType) => (
  <h1 {...props}>{children}</h1>
)

const H2 = ({ children, ...props }: ComponentType) => (
  <h2 {...props}>{children}</h2>
)

const H3 = ({ children, ...props }: ComponentType) => (
  <h3 {...props}>{children}</h3>
)

const Link = ({ children, ...props }: ComponentType) => (
  <a {...props}>{children}</a>
)

export const MarkdownOptions = {
  overrides: {
    h1: {
      component: H1,
      props: {
        className: 'my-4 text-4xl font-bold',
      },
    },
    h2: {
      component: H2,
      props: {
        className: 'my-3 text-3xl font-bold',
      },
    },
    h3: {
      component: H3,
      props: {
        className: 'my-2 text-2xl font-bold',
      },
    },
    a: {
      component: Link,
      props: {
        className: 'text-blue-500 hover:underline',
      },
    },
    code: {
      component: SyntaxHighLighter,
    },
  },
}
