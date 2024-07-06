# fileslook
React Component to share code snippets.

> [!NOTE]
> This React component is highly experimental.

## Install
```bash
pnpm add remark @enuesaa/fileslook 
```

## Usage
```tsx
import { MdCodeViewer } from '@enuesaa/fileslook'

export default function Page() {
  const markdown= `
~~~go:main.go
package main

import (
  "fmt"
)

func main() {
  fmt.Println("a")
}
~~~
`
  return <MdCodeViewer markdown={markdown} />
}
```
