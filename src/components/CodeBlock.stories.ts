import { type Meta, type StoryObj } from '@storybook/react'
import { CodeBlock } from './CodeBlock'

const meta: Meta<typeof CodeBlock> = {
  title: 'CodeBlock',
  component: CodeBlock,
}

export default meta;

type Story = StoryObj<typeof meta>
export const Primary: Story = {
  args: {
    className: 'language-go',
    children: `package main

import (
  "fmt"
)

func main() {
  fmt.Println("a")
}
`
  },
}

export const Inline: Story = {
  args: {
    children: 'fmt.Println("a")'
  },
}
