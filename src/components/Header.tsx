import { Col, Image, NavbarBrand, Row } from "react-bootstrap";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
<<<<<<< HEAD
    <Navbar expand="lg" collapseOnSelect fixed="top"  bg="indigo-900" variant="dark">
      <div className="container-fluid container-md">
        <Link to="/" className="navbar-brand text-cyan-200">
          <img
            alt=""
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-center"
            />{' '}
            SupaDao
        </Link>
        <NavbarToggle aria-controls="basic-navbar-nav" className="text-cyan-200" />
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink eventKey={1}>
              <Link className="nav-link text-cyan-200" to="/">Home</Link>
            </NavLink>
            <NavLink eventKey={2}>
              <Link className="nav-link text-cyan-200" to="swap">Swap</Link>
            </NavLink>
            <NavLink eventKey={3}>
              <Link className="nav-link text-cyan-200" to="/liquidity">Liquidity Pool</Link>
            </NavLink>
            <NavLink eventKey={4} disabled>
              <p className="fw-bold">Loan
                <span style={{ fontSize:"0.6rem" }} className="mt-0 d-block">coming soon...</span>
              </p>
            </NavLink>
          </Nav>
        </NavbarCollapse>
=======
    <header>
      <div className="container-fluid mw-100 container-md">
        <Row>
          <Col xs={3} className="my-auto">
            <NavbarBrand href="/">
              <Image fluid src={logo} alt="Logo" className="d-inline-block"/>
            </NavbarBrand>
          </Col>
          <Col xs={2} className="my-auto">
            <Link to="#about" className="nav-link font-supadao">About</Link>
          </Col>
          <Col xs={2} className="my-auto">
            <Link to="#about" className="nav-link font-supadao">Features</Link>
          </Col>
          <Col xs={3} className="my-auto mx-auto">
            <Link to="#about" className="nav-link font-supadao">Whitepaper</Link>
          </Col>
        </Row>
>>>>>>> 2f1091e055b23a68a0571ba0b96223449204bb29
      </div>
      <hr className="custom-hr my-1" />
    </header>
  )
}

export default Header
