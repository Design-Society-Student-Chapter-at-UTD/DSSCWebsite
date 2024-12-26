// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, fonts } from "../theme";
import Logo from "../images/logo.png";

const Nav = styled.nav`
  background-color: ${colors.primary};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: ${colors.white};
  margin: 0 1rem;
  text-decoration: none;
  font-family: ${fonts.primary};

  &:hover {
    color: ${colors.accent};
  }
`;

const LogoImage = styled.img`
  height: 40px;
`;

const Header = () => {
  return (
    <Nav>
      <div style={{ display: "flex", alignItems: "center" }}>
        <LogoImage src={Logo} alt="Website Logo" />
        <NavLink to="/">DSSC</NavLink>
      </div>
      <div>
        <NavLink to="/AboutUs">About Us</NavLink>
        <NavLink to="/Events">Events</NavLink>
        <NavLink to="/Membership">Membership</NavLink>
        <NavLink to="/Gallery">Gallery</NavLink>
        <NavLink to="/Resources">Resources</NavLink>
        <NavLink to="/Sign up">Sign up</NavLink>
      </div>
    </Nav>
  );
};

export default Header;
