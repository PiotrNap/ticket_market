import React from 'react';
import Register from './register';
import styled from 'styled-components';
import theme from './styles/theme';
import { device } from './styles/device';

const { colors, fontSizes } = theme;

const StyledNewsletter = styled.div`
  height: 45vh;
  background-color: ${colors.transPurple};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledRegisterBox = styled.div`
  display: flex;
  flex-direction: column;
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
