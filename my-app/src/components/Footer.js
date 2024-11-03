// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../theme';

const FooterContainer = styled.footer`
  background-color: ${colors.secondary};
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

const LinkItem = styled.a`
  color: ${colors.white};
  text-decoration: none;
  margin: 0.5rem 0;

  &:hover {
    color: ${colors.accent};
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <QuickLinks>
        <h3>Quick Links</h3>
        <LinkItem href="/about">About Us</LinkItem>
        <LinkItem href="/events">Events</LinkItem>
        <LinkItem href="/membership">Membership</LinkItem>
        <LinkItem href="/contact">Contact</LinkItem>
      </QuickLinks>
      <div>
        <h3>Contact Info</h3>
        <p>Email: info@dssc.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
