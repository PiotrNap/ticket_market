import React from 'react';
import styled from 'styled-components';
import heroMobile2 from '../../public/heroMobile2.jpg';
import { device } from '../styles/device';
import theme from '../styles/theme';
import bgVideo from '../../public/bgVideo.mp4';
import SearchBox from '../search/searchbox';

const { colors, fontSizes } = theme;

const StyledHero = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 80vh;

  &:not(:first-child) {
    justify-content: center;
  }

  @media ${device.tablet} {
    background-image: linear-gradient(
        to top right,
        rgba(26, 25, 28, 0.1),
        rgba(252, 250, 255, 0.1)
      ),
      url(${heroMobile2});
    background-size: cover;
    background-position: center;
    opacity: 0.8;
  }
`;

const StyledVideoContent = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
  @media ${device.tablet} {
    display: none;
  }
`;

const StyledVideo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 0.8;
  overflow: hidden;
`;

const StyledHeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 12rem;
  @media ${device.tablet} {
    padding: 0;
    margin: 0 1.5rem;
  }
`;


const HeroSection = () => {
  return (
    <StyledHero>
      <StyledVideo>
        <StyledVideoContent src={bgVideo} autoPlay loop>
          Your browser is not supported!
        </StyledVideoContent>
      </StyledVideo>
      <StyledHeroSection>
        <SearchBox/>
      </StyledHeroSection>
    </StyledHero>
  );
};

export default HeroSection;
