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
`

  return (
    <>
      <Link to={'/'} style={{ color: '#fafafa' }}>top</Link>
      <section style={{width: '900px', margin: '10px auto', color: '#fafafa'}}>
        {/* @ts-ignore TODO fix type mismatch */}
        <Markdown components={{code: CodeBlock}}>{markdown}</Markdown>
      </section>
    </>
  )
}
