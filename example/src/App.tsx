import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TopPage from './pages/index'
import ArticlePage from './pages/article'
import MarkdownPage from './pages/markdown'
import './styles/globals.css'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TopPage />} />
        <Route path='/markdown' element={<MarkdownPage />} />
        <Route path='/article' element={<ArticlePage />} />
      </Routes>
   </BrowserRouter>
  )
}
