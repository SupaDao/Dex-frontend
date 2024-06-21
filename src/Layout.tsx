  import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import {MainProvider} from "./context/MainContext"


const Layout = () => {
  return (
    <MainProvider>
      <div className="bg-black mw-100 h-min-100 text-light">
        <Header />
      <Outlet/>
    </div>
    </MainProvider>
  )
}

export default Layout
