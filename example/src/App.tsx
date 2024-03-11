import TopPage from './pages/index'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const App = () => {

  return (
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<TopPage />} />
     </Routes>
   </BrowserRouter>
  )
}