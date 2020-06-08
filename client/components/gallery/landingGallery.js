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
  margin: 4rem auto;
  max-width: 92vw;

  @media ${device.tablet} {
    max-width: 100%;
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

const StyledImgInner = styled.div`
  background-color: ${colors.darkText};
  height: 50%;
  padding: 0 1rem;
  opacity: 0.7;
  transition: all 0.2s;
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
  -webkit-box-shadow: 3px 6px 19px 1px rgba(0, 0, 0, 0.46);
  -moz-box-shadow: 3px 6px 19px 1px rgba(0, 0, 0, 0.46);
  box-shadow: 3px 6px 19px 1px rgba(0, 0, 0, 0.46);

  :hover {
    transform: scale(1.01);

    div${StyledImgInner} {
      opacity: 0.8;
    }
  }

  @media ${device.tablet} {
    flex: 40%;
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
    font-size: ${fontSizes.Xlarge};
    font-weight: 600;
    margin-top: 0.5rem;
    margin-bottom: -0.5rem;
    text-transform: uppercase;
  }
`;

const StyledImgBlockHead = styled.div`
  margin-bottom: ${theme.mbSm};
`;

const StyledInfo = styled.div`
  font-size: ${fontSizes.normal};
  font-weight: 500;
`;

const LandingGallery = () => {
  return (
    <StyledGallery>
      <StyledShowcase>
        <StyledImgBlock image={subHero1}>
          <StyledImgInner>
            <StyledImgBlockHead>
              <h3>Musemum - London</h3>
            </StyledImgBlockHead>
            <StyledInfo>
              <p>
                Discover some great value culture with a visit to these top free
                museums and galleries in London.
              </p>
            </StyledInfo>
          </StyledImgInner>
        </StyledImgBlock>
        <StyledImgBlock image={subHero2}>
          <StyledImgInner>
            <StyledImgBlockHead>
              <h3>NFL 2020/2021</h3>
            </StyledImgBlockHead>
            <StyledInfo>
              <p>Premium seating matchtickets. Super Bowl & much more.</p>
            </StyledInfo>
          </StyledImgInner>
        </StyledImgBlock>
        <StyledImgBlock image={subHero3}>
          <StyledImgInner>
            <StyledImgBlockHead>
              <h3>Symphony & Opera</h3>
            </StyledImgBlockHead>
            <StyledInfo>
              <p>Recent Opera Orchestra performances from around the world.</p>
            </StyledInfo>
          </StyledImgInner>
        </StyledImgBlock>
        <StyledImgBlock image={subHero4}>
          <StyledImgInner>
            <StyledImgBlockHead>
              <h3>Live Festivals</h3>
            </StyledImgBlockHead>
            <StyledInfo>
              <p>
                The best music festivals with special seats and accomodations.
              </p>
            </StyledInfo>
          </StyledImgInner>
        </StyledImgBlock>
      </StyledShowcase>
    </StyledGallery>
  );
};

export default LandingGallery;
