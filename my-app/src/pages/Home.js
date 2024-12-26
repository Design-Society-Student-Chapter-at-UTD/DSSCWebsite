// src/pages/Home.js
import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../theme";

const HeroSection = styled.section`
  background-color: ${colors.lightGray};
  padding: 4rem 2rem;
  text-align: center;
  font-family: ${fonts.primary};
`;

const HeroImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
`;

const Introduction = styled.p`
  font-size: 1.2rem;
  margin-top: 2rem;
`;

const SectionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 4rem;
`;

const SectionCard = styled.div`
  background-color: ${colors.white};
  padding: 2rem;
  width: 20%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Home = () => {
  return (
    <HeroSection>
      <HeroImage src="/images/hero.jpg" alt="Design Image" />
      <Introduction>
        Welcome to Design Society Student Chapter (DSSC). We foster creativity
        and collaboration among design enthusiasts.
      </Introduction>
      <SectionsContainer>
        <SectionCard>
          <h3>About Us</h3>
          <p>Learn more about our mission and team.</p>
        </SectionCard>
        <SectionCard>
          <h3>Events</h3>
          <p>Check out our upcoming events and activities.</p>
        </SectionCard>
        <SectionCard>
          <h3>Membership</h3>
          <p>Join us and be part of our vibrant community.</p>
        </SectionCard>
        <SectionCard>
          <h3>Gallery</h3>
          <p>
            Get inspired by seeing winning projects from our design challenge.
          </p>
        </SectionCard>
        <SectionCard>
          <h3>Resources</h3>
          <p>Learn more by viewing recommended resources.</p>
        </SectionCard>
      </SectionsContainer>
    </HeroSection>
  );
};

export default Home;
