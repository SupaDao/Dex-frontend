import {Button} from "react-bootstrap";
import {useMainContext} from "../context/MainContext"

const Liquidity = () =>{
  
  const {connectToMetamask} = useMainContext()
  return (
    <div className="container-fluid container-md">
      <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
       <div className="rounded-4 shadow p-5">
        <p className="h4 fw-bold text-cyan-200 text-center">Liquidity Pool</p>
        <Button variant="cyan-300" onClick={()=> connectToMetamask("1")}className="mx-auto w-100"> Connect </Button>
       </div>
      </div>
    </div>
  )
};

export default Liquidity;