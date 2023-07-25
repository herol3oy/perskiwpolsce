'use client'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

const SyntaxHighLighter = ({ children }: { children: string }) => {
  return <SyntaxHighlighter language="javascript">{children}</SyntaxHighlighter>
}

export default SyntaxHighLighter
