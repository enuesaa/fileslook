import { useCode } from '../lib/use-code'

type Props = {
  markdown: string
}
export const ArticleFileViewer = ({ markdown }: Props) => {
  const codeblocks = useCode(markdown)
  console.log(codeblocks)

  return (
    <>
      {codeblocks.map((v, i) => (
        <div key={i}>
          <div>{v.lang} in {v.filename}</div>
          <pre>
            <code>
              {v.code}
            </code>
          </pre>
        </div>
      ))}
    </>
  )
}
