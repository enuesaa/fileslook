/**
 * @param className like `language-go` or `language-go:main.go`
 */
export const extractMetadataFromClassName = (className: string): {language: null|string; filename: null|string} => {
  const match = /language-(\w+)(:([\w\-_.]+))?/.exec(className)
  if (match === null) {
    return {language: null, filename: null}
  }
  return {language: match[1], filename: match[3]}
}
