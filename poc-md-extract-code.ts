import { remark } from 'remark'
import unified from 'unified';
import { type Node } from 'unist'
import { VFileCompatible } from 'vfile'

const transform: unified.Plugin = () => {
  return (tree: Node, file: VFileCompatible) => {
    return {
      ...tree,
      //@ts-ignore
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

const a = await remark().use(transform).process(markdown)
console.log(a.value)
