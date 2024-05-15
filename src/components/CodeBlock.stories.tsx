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

export const InlineLongText: Story = {
  args: {
    children: 'This is so very long text. here. hello. long long text here.'
  },
  decorators: [
    (Story) => (
      <div style={{width: '300px', padding: '10px', border: 'solid 3px #ff6633'}}>
        <Story />
      </div>
    ),
  ],
}
