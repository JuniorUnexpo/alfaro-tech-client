import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Inventary } from './pages/Inventary'
import { Navbar } from './components/Navbar'
import { Repair } from './pages/Repair'
import { Report } from './pages/Report'


export const App = function({  }){
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/inventario' element={<Inventary />} />
        <Route path='/reparaciones' element={<Repair />} />
        <Route path='/reportar-equipo' element={<Report />} />
      </Routes>
    </BrowserRouter>
  )
}