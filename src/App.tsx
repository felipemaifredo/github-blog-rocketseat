//Imports
import "./App.css"
import { Route, Routes, HashRouter } from "react-router-dom"
//Layouts
import { DefaultLayout } from "./layouts/DefaultLayout"
//Pages
import { Home } from "./pages/Home"
import { IssePage } from "./pages/IssuePage"

export function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/issue/:id" element={<IssePage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
