# designdoc
## Development plan
- extract code block from markdown string and construct FileViewer component.
- configure FilesViewer options with frontmatter

### Configurable items
|field|purpose|
|--|--|
|`files`|By the default, mawkdown-included code blocks are extracted and shown with its filename. In this section, also append more files.|
|`open`|Specify the filename to open initially|

### Markdown example
~~~md
# title
```js:src/index.ts
export const a = 'b'
```
~~~
