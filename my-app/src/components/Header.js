// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors, fonts } from '../theme';

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

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">DSSC</NavLink>
      <div>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/membership">Membership</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </Nav>
  );
};

export default Header;
