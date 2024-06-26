import { remark } from 'remark'

type Code = {
  lang: string
  filename?: string
  code: string
}

// parse markdown and extract codes.
export const useCode = (markdown: string): Code[] => {
  const parsed = remark.parse(markdown)
  const files = parsed.children.filter((v) => v.type === 'code')
  const codeblocks = files.map((v) => {
    // @ts-ignore
    const markedlang: string = v.lang
    const lang = markedlang.includes(':') ? markedlang.split(':')[0] : markedlang
    const filename = markedlang.includes(':') ? markedlang.split(':')[1] : undefined
    // @ts-ignore
    const code = v.value

    return { lang, filename, code }
  })

  return codeblocks
}
