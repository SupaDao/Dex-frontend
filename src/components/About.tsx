import { Col, Container, Image, Row } from "react-bootstrap"
import icon from "../assets/icon.png"
import monad from "../assets/monad.png"
import collab from "../assets/collab.png"
import { BsArrowRight, BsGithub, BsTelegram, BsTwitterX } from "react-icons/bs"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <section id="about">
      <Container className="border-lemon rounded-4 py-2">
        <Row>
          <Col xs={3} md={2}>
            <Image fluid src={icon} alt="supadao"/>
          </Col>
          <Col xs={3} md={2}>
            <Image fluid src={collab} alt="collaboration"/>
          </Col>
          <Col xs={3} md={2}>
            <Image fluid src={monad} alt="Monad"/>
          </Col>
        </Row>
        <Row className="pt-2">
          <p>
            <span className=" fs-5 text-uppercase text-lemon font-supadao">who we are</span><BsArrowRight className="text-purple-300 d-inline-block fs-5 fw-bold" /> SupaDao is an innovative decentralized exchange (DEX) designed to revolutionize the DeFi landscape on the Monad blockchain. Our platform enables seamless liquidity provision, efficient token swap and a robust governance participation for liquidity providers.
          </p>
        </Row>
      </Container>
      <div className="d-flex container py-3">
        <Link to="https://x.com/supa_dao" target="_blank" className="text-purple-300 nav-link">
          <BsTwitterX className="fs-5"/>
        </Link>
        <Link to="https://github.com/SupaDao" target="_blank" className="text-purple-300 nav-link mx-2">
          <BsGithub className="fs-5"/>
        </Link>
        <Link to="https://t.me/supadao" target="_blank" className="text-purple-300 nav-link">
          <BsTelegram className="fs-5"/>
        </Link>
      </div>
    </section>
  )
}

export default About
