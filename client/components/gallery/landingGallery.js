import React from 'react';
import styled from 'styled-components';
import { device } from '../styles/device';
import theme from '../styles/theme';

import subHero1 from '../../public/subHero1.jpg';
import subHero2 from '../../public/subHero2.jpg';
import subHero3 from '../../public/subHero3.jpg';
import subHero4 from '../../public/subHero4.jpg';

const { colors, fontSizes } = theme;

const StyledGallery = styled.section`
  margin: 5rem auto;
  max-width: 92vw;

  @media ${device.tablet} {
    max-width: 90%;
    margin: 1rem auto;
  }
`;

const StyledShowcase = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media ${device.tablet} {
    flex-wrap: wrap;
  }

  > * {
    margin: 0 0.7rem;
  }
`;

const StyledImgBlock = styled.div`
  display: flex;
  flex: 25%;
  max-width: 25%;
  flex-direction: column;
  justify-content: flex-end;
  height: 23rem;
  text-align: left;
  margin: 1rem 1rem;
  border-radius: 5px;
  background: ${(props) => `url(${props.image}) no-repeat`};
  background-size: cover;
  background-position: top;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 3rem 6rem rgba(38, 37, 38, 0.1);

  @media ${device.tablet} {
    flex: 50%;
    max-width: 50%;
  }

  @media ${device.mobileL} {
    flex: 100%;
    max-width: 100%;
  }
  p,
  h3 {
    color: ${colors.white};
  }

  h3 {
    font-size: ${fontSizes.big};
    font-weight: 600;
    margin-top: 0.2rem;
  }

  p {
    font-size: ${fontSizes.normal};
    font-weight: 400;
  }
`;

const StyledImgInner = styled.div`
  background-color: ${colors.darkText};
  height: 50%;
  padding: 0 1rem;
  opacity: 0.7;
  transition: all 0.2s;

  :hover {
    opacity: 0.9;
    transform: scale(1.05) translateY(5px);
  }
`;

const StyledImgBlockHead = styled.div`
  margin-bottom: ${theme.mbSm};
`;

const LandingGallery = () => {
  return (
    <StyledGallery>
      <StyledShowcase>
        <StyledImgBlock image={subHero1}>
          <StyledImgInner>
            <StyledImgBlockHead>
              <h3>Concert 1</h3>
            </StyledImgBlockHead>
            <div className='block-1__info'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </StyledImgInner>
        </StyledImgBlock>
        <StyledImgBlock image={subHero2}>
          <StyledImgInner>
            <StyledImgBlockHead>
              <h3>Concert 2</h3>
            </StyledImgBlockHead>
            <div className='block-2__info'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </StyledImgInner>
        </StyledImgBlock>
        <StyledImgBlock image={subHero3}>
          <StyledImgInner>
            <StyledImgBlockHead>
              <h3>Concert 3</h3>
            </StyledImgBlockHead>
            <div className='block-3__info'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </StyledImgInner>
        </StyledImgBlock>
        <StyledImgBlock image={subHero4}>
          <StyledImgInner>
            <StyledImgBlockHead>
              <h3>Concert 4</h3>
            </StyledImgBlockHead>
            <div className='block-4__info'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </StyledImgInner>
        </StyledImgBlock>
      </StyledShowcase>
    </StyledGallery>
  );
};

export default LandingGallery;
