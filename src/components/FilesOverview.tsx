import { type Fileinfo } from '../type'

const FilesOverviewRoot = () => {
  return (<div>root</div>)
}

const FilesOverviewContent = () => {
  return (<div>content</div>)
}

const FilesOverviewImpl = () => {
  return (<div>impl</div>)
}

export const FilesOverview = Object.assign(
  FilesOverviewImpl,
  {
    Root: FilesOverviewRoot,
    Content: FilesOverviewContent,
  }
)
