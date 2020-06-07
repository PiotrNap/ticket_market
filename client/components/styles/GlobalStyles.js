import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import { device } from './device';

const { colors, fontSizes } = theme;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
    font-size: 100%;

    @media ${device.laptop} {
        font-size: 90%;
        line-height: 1.4;
    }

    @media ${device.tablet} {
    font-size: 80%;
    line-heigt: 1.2;
    }
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${colors.white};
    color: ${colors.darkText};
    font-family: ${theme.Inter};
    line-height: 1.5;
  }

  @media ${device.tablet} {
    line-heigt: 1.2;
  }

  h1,
  h2,
  h3 {
    font-weight: 600;
    color: ${colors.darkText};
    margin: 0 0 10px 0;
  }

  h1 {
      font-size: ${fontSizes.Xbig}
  }
  h2 {
      font-size: ${fontSizes.big}
  }
  h3 {
      font-size: ${fontSizes.large}
  }

  img {
      vertical-align: middle;
  }

  svg {
      fill: currentColor;
      vertical-align: middle;
  }

  button {
      cursor: pointer;
      border: 0;
      border-radius: 0;

      &:focus,
      &:active {
          outline-color: ${colors.lightPurple}
      }
  }

  input, textarea {
    border-radius: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }
    &::placeholder {
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  a {
      text-decoration: none;
  }

  ul {
      list-style: none;
  }
`;

export default GlobalStyle;
