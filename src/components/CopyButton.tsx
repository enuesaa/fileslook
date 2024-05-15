import { MouseEventHandler, useState } from 'react'
import { FiCheck, FiCopy } from 'react-icons/fi'
import styles from './CopyButton.css'

export const CopyButton = ({ text }: { text: string }) => {
  const [clicked, setClicked] = useState<boolean>(false)

  const handleCopy: MouseEventHandler<HTMLSpanElement> = async (e) => {
    e.preventDefault()
    await globalThis.navigator.clipboard.writeText(text)
    setClicked(true)
    setTimeout(() => {
      setClicked(false)
    }, 3000)
  }

  return (
    <span onClick={handleCopy} className={styles.main}>
      {clicked ? <FiCheck /> : <FiCopy />}
    </span>
  )
}
