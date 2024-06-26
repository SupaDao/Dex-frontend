import { Col, Image, NavbarBrand, Row } from "react-bootstrap";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container-fluid mw-100 container-md">
        <Row>
          <Col xs={3} className="my-auto">
            <NavbarBrand href="/">
              <Image fluid src={logo} alt="Logo" className="d-inline-block"/>
            </NavbarBrand>
          </Col>
          <Col xs={2} className="my-auto text-center">
            <Link to="/#about" className="nav-link font-supadao">About</Link>
          </Col>
          <Col xs={3} className="my-auto text-center">
            <Link to="/#features" className="nav-link font-supadao">Features</Link>
          </Col>
          <Col xs={3} className="my-auto text-center borde">
            <Link to="/whitepaper" className="nav-link font-supadao">Whitepaper</Link>
          </Col>
        </Row>
      </div>
      <hr className="custom-hr my-1" />
    </header>
  )
}

export default Header
