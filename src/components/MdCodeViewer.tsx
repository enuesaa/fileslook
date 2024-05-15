import { useCode } from '../lib/use-code'
import { CodeBlock } from './CodeBlock'
import styles from './MdCodeViewer.css'
import { useState } from 'react'

type Props = {
  markdown: string
  initOpen?: string
}
export const MdCodeViewer = ({ markdown, initOpen }: Props) => {
  const codeblocks = useCode(markdown)
  const [openFilename, setOpenFilename] = useState<string | undefined>(initOpen ?? codeblocks.at(0)?.filename)

  return (
    <>
      <section className={styles.main}>
        <div>
          {codeblocks.map((v, i) => {
            if (v.filename === openFilename) {
              return (
                <span key={i} className={styles.tabOpened} onClick={() => setOpenFilename(v.filename)}>
                  {v.filename ?? v.lang}
                </span>
              )
            }
            return (
              <span key={i} className={styles.tab} onClick={() => setOpenFilename(v.filename)}>
                {v.filename ?? v.lang}
              </span>
            )
          })}
        </div>
        {codeblocks.map((v, i) => (
          <div key={i}>
            {v.filename === openFilename && <CodeBlock className={`language-${v.lang}`}>{v.code}</CodeBlock>}
          </div>
        ))}
      </section>
    </>
  )
}
