import { ArticleBody } from './ArticleBody'
import { ArticleFileViewer } from './ArticleFileViewer'
import { ArticleRoot } from './ArticleRoot'

export const Article = Object.assign(
  {},
  {
    Root: ArticleRoot,
    Body: ArticleBody,
    FileViewer: ArticleFileViewer,
  }
)