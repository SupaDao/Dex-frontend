import { Outlet } from "react-router-dom"
import Header from "./components/Header"


const Layout = () => {
  return (
    <div className="bg-black mw-100 h-min-100 text-light">
      <Header />
      <Outlet/>
    </div>
  )
}

export default Layout
