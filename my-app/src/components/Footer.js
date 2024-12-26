// src/components/Footer.js
import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../theme";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import UTD_Logo from "../images/UTD_Logo.png";

const FooterContainer = styled.footer`
  background-color: ${colors.accent};
  color: ${colors.white};
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  font-family: ${fonts.primary};
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

const LinkItem = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
  margin: 0.5rem 0;

  &:hover {
    color: ${colors.accent};
  }
`;

const LogoImage = styled.img`
  height: 150px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div style={{ display: "flex", alignItems: "center" }}>
        <LogoImage src={UTD_Logo} alt="UTD Logo" />
      </div>

      <QuickLinks>
        <h3>Design Society Student Chapter</h3>
        <h3>at the University of Texas at Dallas</h3>
        <LinkItem to="/AboutUs">About Us</LinkItem>
        <LinkItem to="/Events">Events</LinkItem>
        <LinkItem to="/Membership">Membership</LinkItem>
        <LinkItem to="/Gallery">Gallery</LinkItem>
        <LinkItem to="/Resources">Resources</LinkItem>
      </QuickLinks>
      {/* <div>
        <h3>Contact Info</h3>
        <p>Email: info@dssc.com</p>
        <p>Phone: (123) 456-7890</p>
      </div> */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <LogoImage src={Logo} alt="Website Logo" />
      </div>
    </FooterContainer>
  );
};

export default Footer;
