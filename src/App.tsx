//Imports
import './App.css'
import { Route, Routes, HashRouter } from "react-router-dom"
//Layouts
import { DefaultLayout } from './layouts/DefaultLayout'
//Pages
import { Home } from './pages/Home'

export function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />  
        </Route>
      </Routes>
    </HashRouter>
  )
}
