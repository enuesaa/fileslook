import { type Fileinfo } from '../type'

const FilesOverviewRoot = () => {
  return (<div>root</div>)
}

const FilesOverviewContent = () => {
  return (<div>content</div>)
}

export const FilesOverview = Object.assign(
  {},
  {
    Root: FilesOverviewRoot,
    Content: FilesOverviewContent,
  }
)
