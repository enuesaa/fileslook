import { useCode } from '../lib/use-code'
import { CodeBlock } from './CodeBlock'
import * as Tabs from '@radix-ui/react-tabs'
import styles from './ArticleFileViewer.css'

type Props = {
  markdown: string
}
export const ArticleFileViewer = ({ markdown }: Props) => {
  const codeblocks = useCode(markdown)

  return (
    <Tabs.Root className={styles.main}>
      <Tabs.List>
        {codeblocks.map((v, i) => (
          <Tabs.Trigger key={i} value={`${v.lang}-${v.filename}`} className={styles.tab}>
            {v.lang}-{v.filename}
          </Tabs.Trigger> 
        ))}
      </Tabs.List>
      {codeblocks.map((v, i) => (
        <Tabs.Content key={i} value={`${v.lang}-${v.filename}`}>
          <CodeBlock className={`language-${v.lang}`}>
            {v.code}
          </CodeBlock>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
