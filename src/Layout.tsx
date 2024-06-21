import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import {MainProvider} from "./context/MainContext"


const Layout = () => {
  return (
<<<<<<< HEAD
    <MainProvider>
      <div className="bg-dark h-min-100 text-light">
        <Header />
        <Outlet/>
      </div>
    </MainProvider>
=======
    <div className="bg-black mw-100 h-min-100 text-light">
      <Header />
      <Outlet/>
    </div>
>>>>>>> 2f1091e055b23a68a0571ba0b96223449204bb29
  )
}

export default Layout
