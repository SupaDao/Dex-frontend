import {createContext,useContext,useState,useEffect} from "react"

const MainContext = createContext<null | any>({})

interface ConnectInfo {
  chainId: string;
}


  export const MainProvider = ({ children }: { children: React.ReactNode }) =>{
    const [wallet, setWallet] = useState<null|any>(null)
    
    const connectToMetamask = (chainId:ConnectInfo.chainId)=>{
      if(!window.ethereum) {
        alert("Metamask not installed")
      console.log(window.ethereum.isConnected())
      
      }
      const wallet= window.ethereum.on("connect", handler (chainId))
    console.log(window.ethereum.isConnected())
    }
    
    useEffect(()=>{
      setWallet(window.ethereum)
    },[])
  
  return(
  <MainContext.Provider value={{wallet, connectToMetamask}}>
     {children}
    </MainContext.Provider>
  )
}

export const useMainContext = () =>{
  return useContext(MainContext)
}