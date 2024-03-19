import { useCode } from '../lib/use-code'
import { CodeBlock } from './CodeBlock'
import * as Tabs from '@radix-ui/react-tabs'
import styles from './MdCodeViewer.css'

type Props = {
  markdown: string
  initOpen?: string
}
export const MdCodeViewer = ({ markdown, initOpen }: Props) => {
  const codeblocks = useCode(markdown)

  if (initOpen === undefined) {
    initOpen = codeblocks.at(0)?.filename
  }

  return (
    <Tabs.Root defaultValue={initOpen} className={styles.main}>
      <Tabs.List>
        {codeblocks.map((v, i) => (
          <Tabs.Trigger key={i} value={v.filename ?? ''} className={styles.tab}>
            {v.filename ?? v.lang}
          </Tabs.Trigger> 
        ))}
      </Tabs.List>
      {codeblocks.map((v, i) => (
        <Tabs.Content key={i} value={v.filename ?? ''}>
          <CodeBlock className={`language-${v.lang}`}>
            {v.code}
          </CodeBlock>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
