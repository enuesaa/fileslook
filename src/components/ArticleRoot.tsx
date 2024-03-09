import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export const ArticleRoot = ({ children }: Props) => {
  return (
    <article>
      {children}
    </article>
  )
}
