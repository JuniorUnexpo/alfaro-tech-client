import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Inventary } from './pages/Inventary'
import { Navbar } from './components/Navbar'
import { Repair } from './pages/Repair'


export const App = function({  }){
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/inventario' element={<Inventary />} />
        <Route path='/reparaciones' element={<Repair />} />
      </Routes>
    </BrowserRouter>
  )
}