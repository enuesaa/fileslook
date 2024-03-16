import { type Meta, type StoryObj } from '@storybook/react'
import { ArticleFileViewer } from './ArticleFileViewer'

const meta: Meta<typeof ArticleFileViewer> = {
  title: 'ArticleFileViewer',
  component: ArticleFileViewer,
}

export default meta;

type Story = StoryObj<typeof meta>
export const Primary: Story = {
  args: {
    markdown: `
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
a
~~~js
export const a = 'b'
~~~
`,
  },
}
