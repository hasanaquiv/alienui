import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoLight from "../../assets/img/logo-light.png";
import logoDark from "../../assets/img/logo-dark.png";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
} from "reactstrap";

function DropdownScrollNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [logo, setLogo] = React.useState(logoLight);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 499 ||
        document.body.scrollTop > 499
      ) {
        setNavbarColor("");
        setLogo(logoDark);
      } else if (
        document.documentElement.scrollTop < 500 ||
        document.body.scrollTop < 500
      ) {
        setNavbarColor(" navbar-transparent");
        setLogo(logoLight);
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top" + navbarColor} color="white" expand="lg">
        <Container>
          <UncontrolledDropdown className="button-dropdown">
            <DropdownToggle
              caret
              tag="a"
              data-toggle="dropdown"
              href="#pablo"
              id="navbarDropdown"
              onClick={(e) => e.preventDefault()}
            >
              <span className="button-bar"></span>
              <span className="button-bar"></span>
              <span className="button-bar"></span>
            </DropdownToggle>
          </UncontrolledDropdown>
          <div className="navbar-translate">
            <NavbarBrand to="/" tag={Link} id="navbar-brand">
              <img src={logo} alt="logo" width="165" />
              {/* debsh */}
            </NavbarBrand>
            <button
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              className="navbar-toggler"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse isOpen={collapseOpen} navbar>
            <Nav className="ml-auto" id="ceva" navbar>
              <UncontrolledDropdown nav>
                <NavLink to="/" className="nav-link">
                  <i className="now-ui-icons education_paper"></i>
                  <p>Home</p>
                </NavLink>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <NavLink to="/about" className="nav-link">
                  <i className="now-ui-icons business_bulb-63"></i>
                  <p>About</p>
                </NavLink>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <NavLink to="/service" className="nav-link">
                  <i className="now-ui-icons ui-2_settings-90"></i>
                  <p>Service</p>
                </NavLink>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <NavLink to="/payment" className="nav-link">
                  <i className="now-ui-icons business_money-coins"></i>
                  <p>Payment</p>
                </NavLink>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <NavLink to="/contact" className="nav-link">
                  <i className="now-ui-icons location_pin"></i>
                  <p>Contact</p>
                </NavLink>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default DropdownScrollNavbar;
