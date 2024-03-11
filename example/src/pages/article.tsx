import { Article } from '@enuesaa/fileslook'
import { Link } from 'react-router-dom'

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
`
  return (
    <>
      <Link to='/' style={{ color: '#fafafa' }}>top</Link>
      <section style={{width: '900px', margin: '10px auto', color: '#fafafa'}}>
        <Article.Root>
          <Article.Body markdown={markdown} />
        </Article.Root>
      </section>
    </>
  )
}
