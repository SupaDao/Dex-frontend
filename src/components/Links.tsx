import { Col, Container, Image, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { BsArrowRight, BsGithub, BsTelegram, BsTwitterX, BsDiscord, BsArrowUpRight, BsFileEarmarkRichtext } from "react-icons/bs"

const Links = () =>{
  return (
    <section className="py-2">
      <Container className="border-lemon mx-auto text-center rounded-4 py-2">
    <Link to="/whitepaper" className="btn-custom btn text-capitalize mx-auto w-75 w-md-50 my-3">
    <BsFileEarmarkRichtext className="fs-5 me-2"/>
                whitepaper
              <BsArrowUpRight className="text-purple-500 d-inline-block fs-5 fw-bold ms-2"/>
            </Link> 
            <Link to="https://github.com/SupaDao" target="_blank" className="btn-custom btn text-capitalize mx-auto w-75 w-md-50 my-3">
            <BsGithub className="fs-5 me-2"/>
                github
              <BsArrowUpRight className="text-purple-500 d-inline-block fs-5 fw-bold ms-2"/>
            </Link>
            <Link to="https://t.me/supadao" target="_blank"  className="btn-custom btn text-capitalize mx-auto w-75 w-md-50 my-3">
            <BsTelegram className="fs-5 me-2"/>
                telegram
              <BsArrowUpRight className="text-purple-500 d-inline-block fs-5 fw-bold ms-2"/>
            </Link>
            <Link to="https://discord.gg/DNjtZfqy" target="_blank" className="btn-custom btn text-capitalize mx-auto w-75 w-md-50 my-3">
            <BsDiscord className="fs-5 me-2"/>
                discord
              <BsArrowUpRight className="text-purple-500 d-inline-block fs-5 fw-bold ms-2"/>
            </Link>
            <Link to="https://x.com/supa_dao" target="_blank" className="btn-custom btn text-capitalize mx-auto w-75 w-md-50 my-3">
            <BsTwitterX className="fs-5 me-2"/>
                X
              <BsArrowUpRight className="text-purple-500 d-inline-block fs-5 fw-bold ms-2"/>
            </Link>
      </Container>
    </section>
  )
}


export default Links