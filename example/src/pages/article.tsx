import Markdown from 'react-markdown'
import { Link } from 'react-router-dom'
import { ArticleCodeSnippet, ArticleFileViewer } from '@enuesaa/fileslook'

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
        <Markdown components={{code: ArticleCodeSnippet}}>{markdown}</Markdown>
        <ArticleFileViewer markdown={markdown} />
      </section>
    </>
  )
}
