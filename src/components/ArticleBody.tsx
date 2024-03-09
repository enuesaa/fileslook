import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type Props = {
  markdown: string,
}
export const ArticleBody = ({ markdown }: Props) => {
  return (
    <Markdown remarkPlugins={[remarkGfm]}>
      {markdown}
    </Markdown>
  )
}
