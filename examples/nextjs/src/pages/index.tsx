import Link from 'next/link'
import { FilesOverviewButton } from '@enuesaa/fileslook'
import '../../node_modules/@enuesaa/fileslook/dist/index.css'

export default function Page() {
  return (
    <>
      <Link href={'markdown'} style={{ color: '#fafafa' }}>markdown</Link>
      <FilesOverviewButton />
    </>
  )
}
