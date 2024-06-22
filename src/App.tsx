import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Swap from "./pages/Swap";
import Liquidity from "./pages/Liquidity";
import Whitepaper from "./pages/Whitepaper"
import Missing from "./pages/Missing"
import NFTMarket from "./pages/NFTMarket"



function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="swap" element={<Swap/>}/>
        <Route path="liquidity" element={<Liquidity/>}/>
        <Route path="whitepaper" element={<Whitepaper/>}/>
        <Route path="market-place" element={<NFTMarket/>}/>
        <Route path="*" element={<Missing/>}/> 
      </Route>
    </Routes>
  )
}

export default App
