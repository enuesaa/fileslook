import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { FiCopy, FiCheck } from 'react-icons/fi'
import { MouseEventHandler, useState } from 'react'

type Props = JSX.IntrinsicElements['code']
export const CodeBlock = ({ className, children }: Props) => {
  // NOTE: children of <code> should be string.
  if (typeof children !== 'string') {
    return children
  }
  // NOTE: inline code does not have className.
  if (typeof className === 'undefined') {
    return <code className={className}>{children}</code>
  }

  const {language, filename} = extractMetadataFromClassName(className)

  return (
    <div style={{position: 'relative'}}>
      {filename === null ? (<></>) : (<FilenameLabel filename={filename} />)}
      <CopyButton text={children} />
      <SyntaxHighlighter
        style={nightOwl}
        customStyle={{boxShadow: '0 1px 2px rgba(0,0,0,0.3)', borderRadius: '5px'}}
        language={language ?? undefined}
        children={children} /> {/* this is because children should be string. */}
    </div>
  )
}

/**
 * @param className like `language-go` or `language-go:main.go`
 */
const extractMetadataFromClassName = (className: string): {language: null|string; filename: null|string} => {
  const match = /language-(\w+)(:([\w\-_.]+))?/.exec(className)
  if (match === null) {
    return {language: null, filename: null}
  }
  return {language: match[1], filename: match[3]}
}

const FilenameLabel = ({ filename }: { filename: string }) => {
  return (
    <span style={{position: 'absolute', top: '5px', right: '5px', color: '#aaaaaa', userSelect: 'none'}}>
      {filename}
    </span>
  )
}

const CopyButton = ({ text }: { text: string }) => {
  const [clicked, setClicked] = useState<boolean>(false)

  const handleCopy: MouseEventHandler<HTMLSpanElement> = async (e) => {
    e.preventDefault()
    await globalThis.navigator.clipboard.writeText(text)
    setClicked(true)
    setTimeout(() => { setClicked(false) }, 3000)
  }

  return (
    <span onClick={handleCopy} style={{position: 'absolute', bottom: '3px', right: '5px', color: '#aaaaaa', fontSize: '16px', cursor: 'pointer'}}>
      {clicked ? (<FiCheck />): (<FiCopy />)}
    </span>
  )
}
