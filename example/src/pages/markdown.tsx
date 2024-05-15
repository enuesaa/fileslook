import { Link } from 'react-router-dom'
import Markdown from 'react-markdown'
import { CodeBlock } from '@enuesaa/fileslook'

export default function Page() {
  const markdown= `
# タイトル
~~~go:main.go
package main

import (
  "fmt"
)

func main() {
  fmt.Println("a")
}
~~~
  
  
Inline: \`fmt.Println("aa")\`.

Inline Long Text: \`This is so very long text. here. hello. long long text here\`.
`

  return (
    <>
      <Link to={'/'} style={{ color: '#fafafa' }}>top</Link>
      <section style={{width: '500px', margin: '10px auto', color: '#fafafa', lineHeight: '1.7'}}>
        {/* @ts-ignore TODO fix type mismatch */}
        <Markdown components={{code: CodeBlock}}>{markdown}</Markdown>
      </section>
    </>
  )
}
