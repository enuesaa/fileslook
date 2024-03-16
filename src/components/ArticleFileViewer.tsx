import { useCode } from '../lib/use-code'
import { CodeBlock } from './CodeBlock'

type Props = {
  markdown: string
}
export const ArticleFileViewer = ({ markdown }: Props) => {
  const codeblocks = useCode(markdown)

  return (
    <>
      {codeblocks.map((v, i) => (
        <div key={i}>
          <div>{v.lang} in {v.filename}</div>
          <CodeBlock className={`language-${v.lang}:${v.filename}`}>{v.code}</CodeBlock>
        </div>
      ))}
    </>
  )
}
