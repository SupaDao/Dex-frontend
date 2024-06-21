import {createContext,useContext} from "react"

const MainContext = createContext<null | any>({})

  export const MainProvider = ({ children }: { children: React.ReactNode }) =>{
  
  return(
  <MainContext.Provider value={{}}>
     {children}
    </MainContext.Provider>
  )
}

export const useMainContext = () =>{
  return useContext(MainContext)
}