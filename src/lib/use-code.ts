// import { type Plugin } from 'unified'
// import { type Root } from 'mdast'
import { remark } from 'remark'
import { useState } from 'react'

//see https://giraph.me/articles/unified-with-ts/
// const transform: Plugin<void[], Root, Root> = () => {
//   return (tree) => {
//     tree.children.filter(v => v.type === 'code').map(v => {
//       // console.log(v)
//     })

//     return {
//       ...tree,
//       children: tree.children.filter(v => v.type === 'code'),
//     }
//   }
// }

export type CodeBlock = {
  lang: string
  filename?: string
  code: string
}

// parse markdown and extract codes.
export const useCode = (markdown: string): CodeBlock[] => {
  const parsed = remark.parse(markdown)
  const files = parsed.children.filter(v => v.type === 'code')
  const codeblocks = files.map(v => {
    // @ts-ignore
    const markedlang: string = v.lang
    const lang = markedlang.includes(':') ? markedlang.split(':')[0] : markedlang;
    const filename = markedlang.includes(':') ? markedlang.split(':')[1] : undefined;
    // @ts-ignore
    const code = v.value

    return { lang, filename, code }
  })

  return codeblocks
}
