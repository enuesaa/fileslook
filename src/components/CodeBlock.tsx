import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { CopyButton } from './CopyButton'
import styles from './CodeBlock.css'
import { extractMetadataFromClassName } from '../lib/metadata'

type Props = JSX.IntrinsicElements['code']
export const CodeBlock = ({ className, children }: Props) => {
  // NOTE: children of <code> should be string.
  if (typeof children !== 'string') {
    return children
  }
  // NOTE: inline code does not have className.
  if (typeof className === 'undefined') {
    return (
      <SyntaxHighlighter style={nightOwl} PreTag={'span'} customStyle={{padding: '1.5px 3px', margin: '0', display: 'inline-block', verticalAlign: 'middle', borderRadius: '5px'}}>
        {children}          
      </SyntaxHighlighter>
    )
  }

  const {language, filename} = extractMetadataFromClassName(className)

  return (
    <div style={{position: 'relative'}}>
      {filename && (<FilenameLabel filename={filename} />)}
      <div className={styles.copyButton}>
        <CopyButton text={children} />
      </div>
      <SyntaxHighlighter
        style={nightOwl}
        PreTag={'div'}
        customStyle={{boxShadow: '0 1px 2px rgba(0,0,0,0.3)', border: 'solid 0.5px rgba(255,255,255,0.2)', borderRadius: '5px', margin: '0'}}
        language={language ?? undefined}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  )
}

const FilenameLabel = ({ filename }: { filename: string }) => {
  return (
    <span className={styles.label}>
      {filename}
    </span>
  )
}
