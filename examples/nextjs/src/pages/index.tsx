import Link from 'next/link'
import { FilesOverview } from '@enuesaa/fileslook'
import '../../node_modules/@enuesaa/fileslook/dist/index.css'

export default function Page() {
  return (
    <>
      <Link href={'markdown'} style={{ color: '#fafafa' }}>markdown</Link>
      <FilesOverview.Root />
      <FilesOverview.Content />
    </>
  )
}
