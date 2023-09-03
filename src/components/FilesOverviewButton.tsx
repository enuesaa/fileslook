import { MouseEventHandler, useState } from 'react'
import { FilesOverview } from './FilesOverview'
import { type Fileinfo } from '../type'

type Props = {
  files: Fileinfo[]
}
export const FilesOverviewButton = ({ files }: Props) => {
  const [showOverview, setShowOverview] = useState<boolean>(false)

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    setShowOverview(true)
  }

  return (
    <>
      <button onClick={handleClick}>aa</button>
      {showOverview ? <FilesOverview files={files} /> : <></>}
    </>
  )
}
