import Link from 'next/link'
import '../../node_modules/@enuesaa/fileslook/dist/index.css'

export default function Page() {
  return (
    <>
      <Link href={'/markdown'} style={{ color: '#fafafa', display: 'block' }}>markdown</Link>
      <Link href={'/article'} style={{ color: '#fafafa', display: 'block' }}>article</Link>
    </>
  )
}
