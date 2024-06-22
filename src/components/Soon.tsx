import { Container, Row, Col, Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import soon from "../assets/soon.svg"


const Soon = () =>{
  return (
    <section className="vh-100 d-flex align-items-center justify-content-center">
     <Container className="border-lemon rounded-4 py-2">
       <Row>
         <Col xs={10} md={6} lg={4} className="mx-auto">
           <Image fluid src={soon} alt="Building"/>
           <p className="fs-5 text-lemon font-supadao">Page Under Construction</p>
         <p>We’re working hard to improve your experience. This page is currently under construction and will be available soon. Please check back later for updates.</p>
        <Link to="/" className="btn-custom btn text-capitalize mx-auto my-3">
              Home
            </Link> 
         </Col>
       </Row>
     </Container> 
    </section>
  )
}

export default Soon