import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import { device } from '../styles/device';

import IconWhyus from '../icons/whyus';
import IconCustomers from '../icons/customers';
import IconJoinus from '../icons/joinus';

const { colors, fontSizes } = theme;

const StyledFeatured = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 1rem 2.5rem 1.5rem;
  justify-content: center;
  align-items: center;

  @media ${device.mobileL} {
    margin: 1.5rem auto;
    padding: 1rem 1.5rem 1rem;
  }
`;

const StyledRow = styled.div`
  min-height: 20rem;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: ${(props) => props.direction};

  @media ${device.mobileL} {
    flex-direction: column;
  }
`;

const StyledRowImg = styled.div`
  flex: 0 0 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    min-width: 20rem;
    height: auto;
  }

  @media ${device.mobileL} {
    svg {
      min-width: 15rem;
      height: auto;
      margin-bottom: ${theme.mbSm};
    }
  }
`;

const StyledRowText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 0 0 50%;
  text-align: ${(props) => props.textAlign || 'left'};
  align-items: ${(props) => props.alignItems || 'left'};

  @media ${device.mobileL} {
    text-align: center;
  }
`;

const StyledRowTextHead = styled.div`
  margin-bottom: ${theme.mbMd};

  h2 {
    font-size: ${fontSizes.big};
    font-weight: 800;
    color: ${colors.purple};
  }

  @media ${device.mobileL} {
    margin-bottom: ${theme.mbSm};
  }
`;

const StyledRowTextSubH = styled.div`
  max-width: 75%;
  p {
    font-size: ${fontSizes.normal};
    font-weight: 500;
  }
  @media ${device.mobileL} {
    max-width: 90%;
    margin: 0 auto;
  }
`;

const Featured = () => {
  return (
    <StyledFeatured>
      <StyledRow direction={'row'}>
        <StyledRowImg>
          <IconWhyus />
        </StyledRowImg>
        <StyledRowText>
          <StyledRowTextHead>
            <h2>Why choosing our services?</h2>
          </StyledRowTextHead>
          <StyledRowTextSubH>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium repellat temporibus explicabo, reiciendis ullam illo.
            </p>
          </StyledRowTextSubH>
        </StyledRowText>
      </StyledRow>
      <StyledRow direction={'row-reverse'}>
        <StyledRowImg>
          <IconCustomers />
        </StyledRowImg>
        <StyledRowText textAlign={'right'} alignItems={'flex-end'}>
          <StyledRowTextHead>
            <h2>We serverd over 500,000 customers.</h2>
          </StyledRowTextHead>
          <StyledRowTextSubH>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis unde cumque ullam!
            </p>
          </StyledRowTextSubH>
        </StyledRowText>
      </StyledRow>
      <StyledRow direction={'row'}>
        <StyledRowImg>
          <IconJoinus />
        </StyledRowImg>
        <StyledRowText>
          <StyledRowTextHead>
            <h2>Start Today and gain a free ticket!</h2>
          </StyledRowTextHead>
          <StyledRowTextSubH>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
              omnis? Assumenda debitis commodi velit maiores vero.
            </p>
          </StyledRowTextSubH>
        </StyledRowText>
      </StyledRow>
    </StyledFeatured>
  );
};

export default Featured;
