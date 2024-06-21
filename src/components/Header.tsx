import { Col, Image, NavbarBrand, Row } from "react-bootstrap";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container-fluid container-md">
        <Row>
          <Col xs={3} className="my-auto mx-auto">
            <NavbarBrand href="/">
              <Image fluid src={logo} alt="Logo" className="inline-block"/>
            </NavbarBrand>
          </Col>
          <Col xs={2} className="my-auto mx-auto">
            <Link to="#about" className="nav-link font-supadao">Home</Link>
          </Col>
          <Col xs={2} className="my-auto mx-auto">
            <Link to="#about" className="nav-link font-supadao">About</Link>
          </Col>
          <Col xs={2} className="my-auto mx-auto">
            <Link to="#about" className="nav-link font-supadao">Features</Link>
          </Col>
          <Col xs={2} className="my-auto mx-auto">
            <Link to="#about" className="nav-link font-supadao">Whitepaper</Link>
          </Col>
        </Row>
      </div>
      <hr className="custom-hr my-1" />
    </header>
  )
}

export default Header
