import { Link } from 'react-router-dom'
import { MdCodeViewer } from '@enuesaa/fileslook'

export default function Page() {
  const markdown= `
# タイトル
## サブタイトル
本文あああ

~~~go:main.go
package main

import (
  "fmt"
)

func main() {
  fmt.Println("a")
}
~~~
a
~~~js
export const a = 'b'
~~~
`
  return (
    <>
      <Link to='/' style={{ color: '#fafafa' }}>top</Link>
      <section style={{width: '900px', margin: '10px auto', color: '#fafafa'}}>
        <MdCodeViewer markdown={markdown} />
      </section>
    </>
  )
}
