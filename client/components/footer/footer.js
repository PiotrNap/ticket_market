import { Fragment } from 'react';
import theme from '../styles/theme';
import { device } from '../styles/device';
import styled from 'styled-components';
import IconCode from '../icons/code';
import IconBuy from '../icons/buy';
import IconGuarantee from '../icons/guarantee';
import IconApprove from '../icons/approve';
import IconFanprotect from '../icons/fanprotect';

const { colors, fontSizes } = theme;

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 3rem auto;
  padding-top: 1rem;
  border-top: 2px solid ${colors.transPurple};
`;

const StyledFooterMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin: 0 2rem;

  @media ${device.mobileL} {
    flex-wrap: wrap;
  }
`;

const StyledMainIcons = styled.div`
  flex: 60%;

  @media ${device.mobileL} {
    display: none;
  }
`;

const StyledIconRow = styled.div`
  display: flex;
  flex: 70%;
  flex-direction: row;
  align-items: center;
  margin-top: ${(props) => props.marginTop || '1.4rem'};

  @media ${device.mobileL} {
    flex: 0 0 100%;
  }

  svg {
    margin-left: 7px;
    margin-right: 10px;
    color: ${colors.purple};
  }
  p {
    font-weight: 500;
    color: ${colors.lightText};
    font-size: ${fontSizes.small};
  }
`;

const FooterMenuLeft = styled.div`
  flex: 0 0 20%;
  text-align: end;
  p {
    font-size: ${fontSizes.large};
    font-weight: 700;
    color: ${colors.purple};
    margin-bottom: 5px;
  }
  ul {
    li {
      text-transform: capitalize;
      color: ${colors.lightText};
      font-weight: 500;
      font-size: ${fontSizes.normal};
      margin-bottom: 0.5px;
      transition: all 0.1s;
      cursor: pointer;

      :hover,
      :focus {
        color: ${colors.purple};
      }
    }
  }
  @media ${device.mobileL} {
    flex: 0 0 50%;
    text-align: start;
  }
`;

const FooterMenuRight = styled.div`
  flex: 0 0 20%;
  text-align: end;
  p {
    font-size: ${fontSizes.large};
    font-weight: 700;
    color: ${colors.purple};
    margin-bottom: 5px;
  }
  ul {
    li {
      text-transform: capitalize;
      color: ${colors.lightText};
      font-weight: 500;
      transition: all 0.1s;
      margin-bottom: 0.5px;
      cursor: pointer;

      :hover,
      :focus {
        color: ${colors.purple};
      }
    }
  }
  @media ${device.mobileL} {
    flex: 0 0 50%;
    ul {
      padding-inline-start: 0;
    }
  }
`;

const StyledCopyright = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  border-top: 2px solid ${colors.transPurple};
  background-color: ${colors.transPurple};
`;

const StyledCopyrightText = styled.div`
  font-weight: 400;

  svg {
    width: 18px;
    height: 18px;
    margin-top: -2px;
    color: ${colors.purple};
  }
`;

export default () => {
  return (
    <Fragment>
      <StyledFooter>
        <StyledFooterMain>
          <StyledMainIcons>
            <IconFanprotect />
            <StyledIconRow>
              <IconBuy />
              <p>Buy and sell with confidence</p>
            </StyledIconRow>
            <StyledIconRow marginTop={'1rem'}>
              <IconApprove />
              <p>Customer service from beginning to your seat</p>
            </StyledIconRow>
            <StyledIconRow marginTop={'1rem'}>
              <IconGuarantee />
              <p>Each order with 100% guaranty</p>
            </StyledIconRow>
          </StyledMainIcons>
          <FooterMenuLeft>
            <p>Get more info</p>
            <ul>
              <li>Why choose us</li>
              <li>How does it work</li>
              <li>Quick steps</li>
              <li>FAQ</li>
              <li>Visit our blog</li>
              <li>See all Plans</li>
            </ul>
          </FooterMenuLeft>
          <FooterMenuRight>
            <p>Quick Links</p>
            <ul>
              <li>All Categories</li>
              <li>Privacy Policy</li>
              <li>Carrers</li>
              <li>Terms of Use</li>
              <li>Support Desk</li>
            </ul>
          </FooterMenuRight>
        </StyledFooterMain>
      </StyledFooter>

      <StyledCopyright>
        <StyledCopyrightText>
          © {new Date().getFullYear()} Ticket Market. <IconCode /> by Piotr N.
        </StyledCopyrightText>
      </StyledCopyright>
    </Fragment>
  );
};
