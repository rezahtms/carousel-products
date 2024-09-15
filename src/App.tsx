
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage, NotFoundPage, ProductPage } from '@/components';


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Outlet/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/product/:id' element={<ProductPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
