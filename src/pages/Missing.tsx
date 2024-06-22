import { Container, Row, Col, Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import notFound from "../assets/404.svg"


const Missing = () =>{
  return (
    <section className="vh-100 d-flex align-items-center justify-content-center">
     <Container className="border-lemon rounded-4 py-2">
       <Row>
         <Col xs={10} md={6} lg={4} className="mx-auto">
           <Image fluid src={notFound} alt="Page not found"/>
           <p className="fs-5 text-lemon font-supadao">Page Not Found</p>
         <p>We’re sorry, but the page you’re looking for cannot be found. It might have been moved, deleted, or the URL might be incorrect.
<br/>
Please check the URL and try again, or use the navigation menu to find what you’re looking for.</p>
        <Link to="/" className="btn-custom btn text-capitalize mx-auto my-3">
              Home
            </Link> 
         </Col>
       </Row>
     </Container> 
    </section>
  )
}

export default Missing