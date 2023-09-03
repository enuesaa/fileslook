import Link from 'next/link'
import { FilesOverviewButton } from '@enuesaa/fileslook'

export default function Page() {
  return (
    <>
      <Link href={'markdown'} style={{ color: '#fafafa' }}>markdown</Link>
      <FilesOverviewButton />
    </>
  )
}
