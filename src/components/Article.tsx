import Markdown from 'react-markdown'
import { ArticleFileViewer } from './ArticleFileViewer'
import remarkGfm from 'remark-gfm'
import { ReactNode } from 'react'

type Props = {
  markdown: string
  children?: ReactNode
}
const ArticleRoot = ({ markdown, children }: Props) => {
  return (
    <article>
      <Markdown remarkPlugins={[remarkGfm]}>
        {markdown}
      </Markdown>
      {children}
    </article>
  )
}

export const Article = Object.assign(
  ArticleRoot,
  {
    FileViewer: ArticleFileViewer,
  }
)