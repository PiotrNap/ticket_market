import React from 'react';
import Register from './register';
import styled from 'styled-components';
import theme from './styles/theme';
import { device } from './styles/device';

const { colors, fontSizes } = theme;

const StyledNewsletter = styled.div`
  height: 50vh;
  padding-bottom: 2.5rem;
  background-color: ${colors.transPurple};
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2.5px solid ${colors.purple};
  border-bottom: 2.5px solid ${colors.purple};

  @media ${device.mobileL} {
    height: 35vh;
  }
`;

const StyledRegisterBox = styled.div`
  flex: 0 0 60%;
`;

const Newsletter = () => {
  return (
    <StyledNewsletter>
      <StyledRegisterBox>
        <Register />
      </StyledRegisterBox>
    </StyledNewsletter>
  );
};

export default Newsletter;
