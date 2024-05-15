import { type Meta, type StoryObj } from '@storybook/react'
import { MdCodeViewer } from './MdCodeViewer'

const meta: Meta<typeof MdCodeViewer> = {
  title: 'MdCodeViewer',
  component: MdCodeViewer,
}

export default meta

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
