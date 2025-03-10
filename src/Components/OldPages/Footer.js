// src/components/Footer.js
import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../theme";
import { Link } from "react-router-dom";
//import Logo from "my-app/public/assets/logo.png";
//import UTD_Logo from "my-app/public/assets/UTD_Logo.png";
import { FaFacebook, FaTwitter, FaTelegram, FaInstagram } from "react-icons/fa";

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
  align-items: center;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const LinkItem = styled(Link)`
  color: ${colors.white};
  text-decoration: none;

  &:hover {
    color: ${colors.accent};
  }
`;

const LogoImage = styled.img`
  height: 200px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  color: ${colors.white};
  font-size: 1.5rem;

  &:hover {
    opacity: 0.8;
  }
`;

const Title = styled.h1`
  margin: 0.5rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div style={{ display: "flex", alignItems: "center" }}>
        {/*<LogoImage src={UTD_Logo} alt="UTD Logo" />*/}
      </div>

      <QuickLinks>
        <Title>Design Society Student Chapter</Title>
        <Title>at the University of Texas at Dallas</Title>
        <LinksContainer>
          <LinkItem to="/AboutUs">About Us</LinkItem>
          <LinkItem to="/Events">Events</LinkItem>
          <LinkItem to="/Membership">Membership</LinkItem>
          <LinkItem to="/Gallery">Gallery</LinkItem>
          <LinkItem to="/Resources">Resources</LinkItem>
        </LinksContainer>
        <h3>Contact Us</h3>
        <SocialIcons>
          <SocialIcon href="#">
            {" "}
            {/* add in media link later */}
            <FaFacebook />
          </SocialIcon>
          <SocialIcon href="#">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon href="#">
            <FaTelegram />
          </SocialIcon>
          <SocialIcon href="#">
            <FaInstagram />
          </SocialIcon>
        </SocialIcons>
      </QuickLinks>
      <div style={{ display: "flex", alignItems: "center" }}>
        {/*<LogoImage src={Logo} alt="Website Logo" />*/}
      </div>
    </FooterContainer>
  );
};

export default Footer;
