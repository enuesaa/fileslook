import { type Plugin, type Transformer } from 'unified'
import { remark } from 'remark'
import { useState } from 'react'

const transform: Plugin = (): Transformer => {
  return (tree) => {
    return {
      ...tree,
      // @ts-ignore
      children: tree.children.filter(v => v.type === 'code'),
    }
  }
}

// parse markdown and extract codes.
const useCode = (markdown: string) => {
  const [data, setData] = useState<string>('')
  remark().use(transform).process(markdown).then(v => {
    console.log(v.value)
    setData('aa')
  })

  return data
}

type Props = {
  markdown: string
}
export const ArticleFileViewer = ({ markdown }: Props) => {
  const data = useCode(markdown)
  console.log(data)
  // render file viewer
  return (<></>)
}
