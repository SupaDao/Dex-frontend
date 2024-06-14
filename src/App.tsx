import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import Swap from "./pages/Swap"



function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="swap" element={<Swap/>}/>
      </Route>
    </Routes>
  )
}

export default App
