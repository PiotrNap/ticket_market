import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import landingHero from '../../public/landingHero.jpg';
import landingHeroMobile from '../../public/landingHeroMobile.jpg';
import { device } from '../styles/device';
import theme from '../styles/theme';

const { colors, fontSizes } = theme;

const StyledHero = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 85vh;
  background-image: linear-gradient(
      to top right,
      rgba(26, 25, 28, 0.1),
      rgba(252, 250, 255, 0.1)
    ),
    url(${landingHero});
  background-size: cover;
  background-position: center;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);

  @media ${device.tablet} {
    background-image: url(${landingHeroMobile});
  }
`;

const StyledHeroSection = styled.div`
  padding-left: 4rem;
  @media ${device.tablet} {
    padding: 0;
    margin: 0 1.5rem;
  }
`;

const StyledHeroHeading = styled.div`
  text-transform: uppercase;
  h1 {
    color: ${colors.white};
    font-weight: 800;
    letter-spacing: 0.5px;
    font-size: ${fontSizes.Xbig};
    margin-bottom: 0 auto ${theme.mbSm} auto;
  }
`;

const StyledHeroSubHeading = styled.div`
  color: ${colors.white};
  font-weight: 600;
  max-width: 35rem;
  margin-bottom: ${theme.mbMd};
  p {
    font-size: ${fontSizes.large};
  }
`;

const StyledButton = styled.a`
  margin-left: 0.2rem;
  padding: 0.75rem 3.5rem;
  border-radius: 100px;
  border: 2px solid ${colors.white};
  color: ${colors.white};
  background-color: transparent;
  font-size: ${fontSizes.normal};
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
  :hover {
    background-color: ${colors.white};
    color: ${colors.purple};
  }
`;

const HeroSection = () => {
  return (
    <StyledHero>
      <StyledHeroSection>
        <StyledHeroHeading>
          <h1>Don't miss the latest events!</h1>
        </StyledHeroHeading>
        <StyledHeroSubHeading>
          <p>
            Get ready for your next adventure. Find the ticket for the best
            price and order it today!
          </p>
        </StyledHeroSubHeading>

        <Link href='auth/signup'>
          <StyledButton>Make an account</StyledButton>
        </Link>
      </StyledHeroSection>
    </StyledHero>
  );
};

export default HeroSection;
