import { Container, Row } from "react-bootstrap"
import { BsArrowRight } from "react-icons/bs"


const Aim = () => {
  return (
    <section className="py-2">
      <Container className="border-lemon rounded-4 py-2">
        <Row className="mt-1">
          <p>
            <span className=" fs-5 text-uppercase text-lemon font-supadao">our aim</span><BsArrowRight className="text-purple-300 d-inline-block fs-5 fw-bold" /> The aim of SupaDao is set to redefine the DEX landscape by leveraging the unique strengths of Monad blockchain. Our commitment to liquidity provision, efficient token swap, and the decentralized governance will empower users and drive the future of DeFi
          </p>
        </Row>
      </Container>
    </section>
  )
}

export default Aim
