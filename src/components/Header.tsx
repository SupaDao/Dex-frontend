import { Nav, NavLink, Navbar, NavbarCollapse, NavbarToggle } from "react-bootstrap"
import { Link } from "react-router-dom"
import logo from "../assets/26.png"

const Header = () => {
  return (
    <Navbar expand="lg" collapseOnSelect  bg="indigo-900" variant="dark">
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
      </div>
    </Navbar>
  )
}

export default Header
