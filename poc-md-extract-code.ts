import { unified, type Plugin, type Transformer } from 'unified'
import remarkParse from 'remark-parse'

const transform: Plugin = (): Transformer => {
  return (tree) => {
    return {
      ...tree,
      // @ts-ignore
      children: tree.children.filter(v => v.type === 'code'),
    }
  }
}

const markdown = `
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

~~~js
export const a = 'a'
~~~
`

const a = await unified().use(remarkParse).use(transform).process(markdown)
console.log(a.value)
