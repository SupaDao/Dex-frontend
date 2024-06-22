import { BsCCircle } from "react-icons/bs";

const Footer = ()=>{
  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer className="sticky-bottom text-center bg-black py-1">
      <p className="font-supadao">
        <BsCCircle className="text-lemon me-1"/>
        {year} {" "} SupaDao
      </p>
    </footer>
  )
}

export default Footer;