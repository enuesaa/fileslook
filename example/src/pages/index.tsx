import { Link } from 'react-router-dom'
import '../../node_modules/@enuesaa/fileslook/dist/index.css'

export default function Page() {
  return (
    <>
      <Link to={'/markdown'} style={{ color: '#fafafa', display: 'block' }}>markdown</Link>
      <Link to={'/article'} style={{ color: '#fafafa', display: 'block' }}>article</Link>
    </>
  )
}
