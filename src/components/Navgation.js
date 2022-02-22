import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/lgBox.svg";
import styled from "styled-components";

const Navgation = () => {
  return (
    <NavBarStyled collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" width="120" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <NavStyled className="ms-auto">
            <NavLink to="/">home</NavLink>
            <NavLink to="/aboutus">about us</NavLink>
            <NavLink to="/services">services</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <ButtonStyled>
              <NavLink to="/agent/login">Login </NavLink>
            </ButtonStyled>
          </NavStyled>
        </Navbar.Collapse>
      </Container>
    </NavBarStyled>
  );
};

const NavBarStyled = styled(Navbar)`
  background: none;
  position: fixed;
  width: 100%;
  backdrop-filter: blur(40px);
  background: #0000001a;
  padding: 1rem 0;
  z-index: 5;
`;
const NavStyled = styled(Nav)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  @media screen and (max-width: 992px) {
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  a {
    text-decoration: none;
    color: #fff;
    text-transform: capitalize;
    position: relative;
    padding: 0.5rem 0;
    transition: all 0.3s;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 100%;
      width: 0%;
      height: 3px;
      border-radius: 1rem;
      background: var(--secoundColor);
      transition: all 0.3s;
    }
    &.active {
      color: var(--secoundColor);
      transition: all 0.3s;
      &::after {
        width: 100%;
      }
    }
  }
`;

const ButtonStyled = styled(Button)`
  background: var(--secoundColor);
  border: none;
  font-size: 14px;
  padding: 0.5rem 1rem;
  letter-spacing: 2px;
  &:hover {
    background-color: var(--mainColor);
  }
  a {
    &:hover {
      color: var(--secoundColor);
    }
    &.active {
      color: #000;

      &::after {
        width: 0;
      }
    }
  }
`;

export default Navgation;
