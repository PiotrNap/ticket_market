import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import { device } from '../styles/device';
import IconArrow from '../icons/arrow';
import Link from 'next/link';

const { colors, fontSizes } = theme;

const StyledSection = styled.section`
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5rem 5rem 3rem;
  background-color: ${colors.transPurple};
  border-bottom: ${colors.shadowWhite};

  @media ${device.laptop} {
    padding: 3rem 3rem 1.5rem;
  }
  @media ${device.tablet} {
    padding: 1.5rem 1rem;
  }
  @media ${device.mobileL} {
    padding: 1rem 0;
  }
`;
const StyledInnerSection = styled.div`
  max-width: 70%;
  border: 3px solid ${colors.purple};
  border-radius: 10px;
  padding: 1rem 3rem;
  margin-bottom: ${theme.mbLg};
  @media ${device.tablet} {
    margin-bottom: ${theme.mbMd};
  }
  @media ${device.mobileL} {
    margin-bottom: ${theme.mbSm};
  }
`;
const StyledHeader = styled.div`
  text-align: center;
  h1 {
    font-size: ${fontSizes.big};
    color: ${colors.purple};
    font-weight: 600;
  }
`;
const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.7rem;
  margin-right: 0.7rem;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
const StyledQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  p {
    font-size: ${fontSizes.large};
    font-weight: 600;
    color: ${colors.darkText};
  }
  span {
    font-size: ${fontSizes.Xlarge};
    color: ${colors.purple};
    font-weight: 700;
  }
`;
const StyledIconFirst = styled.button`
  height: auto;
  min-width: 20px;
  color: ${colors.purple};
  cursor: pointer;
  background-color: transparent;
  border-radius: 100px;
  transform: rotateX(180deg);
  overflow: hidden;
  transform: ${(props) => (props.open ? `rotateX(0deg)` : '')};
  @media ${device.tablet} {
    min-width: 15px;
  }
`;
const StyledIconSecond = styled.button`
  height: auto;
  min-width: 20px;
  color: ${colors.purple};
  cursor: pointer;
  background-color: transparent;
  border-radius: 100px;
  transform: rotateX(180deg);
  overflow: hidden;
  transform: ${(props) => (props.openSecond ? `rotateX(0deg)` : '')};
  @media ${device.tablet} {
    min-width: 15px;
  }
`;
const StyledIconThird = styled.button`
  height: auto;
  min-width: 20px;
  color: ${colors.purple};
  cursor: pointer;
  background-color: transparent;
  border-radius: 100px;
  transform: rotateX(180deg);
  overflow: hidden;
  transform: ${(props) => (props.openThird ? `rotateX(0deg)` : '')};
  @media ${device.tablet} {
    min-width: 15px;
  }
`;
const StyledIconFourth = styled.button`
  height: auto;
  min-width: 20px;
  color: ${colors.purple};
  cursor: pointer;
  background-color: transparent;
  border-radius: 100px;
  transform: rotateX(180deg);
  overflow: hidden;
  transform: ${(props) => (props.openFourth ? `rotateX(0deg)` : '')};
  @media ${device.tablet} {
    min-width: 15px;
  }
`;
const StyledIconFifth = styled.button`
  height: auto;
  min-width: 20px;
  color: ${colors.purple};
  cursor: pointer;
  background-color: transparent;
  border-radius: 100px;
  transform: rotateX(180deg);
  overflow: hidden;
  transform: ${(props) => (props.openFifth ? `rotateX(0deg)` : '')};
  @media ${device.tablet} {
    min-width: 15px;
  }
`;

const StyledAnswerFirst = styled.div`
  width: 90%;
  margin-left: 0.5rem;
  max-height: ${(props) => (props.open ? '0' : '3rem')};
  opacity: ${(props) => (props.open ? '0' : '1')};
  transition: all 0.1s ease-in;
  overflow: hidden;
  p {
    font-size: ${fontSizes.normal};
    font-weight: 500;
    color: ${colors.darkText};
  }
  span {
    color: ${colors.purple};
    font-weight: 700;
  }
`;

const StyledAnswerSecond = styled.div`
  width: 90%;
  margin-left: 0.5rem;
  max-height: ${(props) => (props.openSecond ? '0' : '3rem')};
  opacity: ${(props) => (props.openSecond ? '0' : '1')};
  transition: all 0.1s ease-in;
  overflow: hidden;
  p {
    font-size: ${fontSizes.normal};
    font-weight: 500;
    color: ${colors.darkText};
  }
  span {
    color: ${colors.purple};
    font-weight: 700;
  }
`;
const StyledAnswerThird = styled.div`
  width: 90%;
  margin-left: 0.5rem;
  max-height: ${(props) => (props.openThird ? '0' : '4.5rem')};
  opacity: ${(props) => (props.openThird ? '0' : '1')};
  transition: all 0.1s ease-in;
  overflow: hidden;
  p {
    font-size: ${fontSizes.normal};
    font-weight: 500;
    color: ${colors.darkText};
  }
  span {
    color: ${colors.purple};
    font-weight: 700;
  }
`;
const StyledAnswerFourth = styled.div`
  width: 90%;
  margin-left: 0.5rem;
  max-height: ${(props) => (props.openFourth ? '0' : '3rem')};
  opacity: ${(props) => (props.openFourth ? '0' : '1')};
  transition: all 0.1s ease-in;
  overflow: hidden;
  p {
    font-size: ${fontSizes.normal};
    font-weight: 500;
    color: ${colors.darkText};
  }
  span {
    color: ${colors.purple};
    font-weight: 700;
  }
`;
const StyledAnswerFifth = styled.div`
  width: 90%;
  margin-left: 0.5rem;
  max-height: ${(props) => (props.openFifth ? '0' : '3rem')};
  opacity: ${(props) => (props.openFifth ? '0' : '1')};
  transition: all 0.1s ease-in;
  overflow: hidden;
  p {
    font-size: ${fontSizes.normal};
    font-weight: 500;
    color: ${colors.darkText};
  }
  span {
    color: ${colors.purple};
    font-weight: 700;
  }
`;

const StyledButton = styled.button`
  padding: 0.8rem 4.2rem;
  color: ${colors.white};
  font-size: ${fontSizes.normal};
  font-weight: 600;
  background-color: ${colors.purple};
  border-radius: 100px;
  transition: all 0.2s;
  margin-top: ${theme.mbSm};
  @media ${device.tablet} {
    margin-top: 0.2rem;
    margin-bottom: 0.5rem;
  }

  :focus,
  :hover {
    color: ${colors.purple};
    background-color: ${colors.white};
  }
`;

const QuestionsSection = ({ currentUser }) => {
  const [open, setOpen] = useState(true);
  const [openSecond, setOpenSec] = useState(true);
  const [openThird, setOpenThd] = useState(true);
  const [openFourth, setOpenFrth] = useState(true);
  const [openFifth, setOpenFth] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickSec = () => {
    setOpenSec(!openSecond);
  };
  const handleClickThird = () => {
    setOpenThd(!openThird);
  };
  const handleClickFourth = () => {
    setOpenFrth(!openFourth);
  };
  const handleClickFifth = () => {
    setOpenFth(!openFifth);
  };

  return (
    <StyledSection>
      <StyledInnerSection>
        <StyledHeader>
          <h1>Frequently Asked Questions</h1>
        </StyledHeader>
        <StyledRow>
          <StyledQuestion>
            <p>
              <span>Q</span>: How can I sell my ticket?
            </p>
            <StyledIconFirst onClick={handleClick} open={open}>
              <IconArrow />
            </StyledIconFirst>
          </StyledQuestion>
          <StyledAnswerFirst open={open}>
            <p>
              <span>A</span>: That's really easy! Sign up to a new account, in
              the right corner find the 'New Ticket' option. It will than
              redirect you to a new window where you can create your first
              ticket.
            </p>
          </StyledAnswerFirst>
        </StyledRow>
        <StyledRow>
          <StyledQuestion>
            <p>
              <span>Q</span>: How does Ticket Market handle the payments?
            </p>
            <StyledIconSecond onClick={handleClickSec} openSecond={openSecond}>
              <IconArrow />
            </StyledIconSecond>
          </StyledQuestion>
          <StyledAnswerSecond openSecond={openSecond}>
            <p>
              <span>A</span>: The payment process is done through a purchase
              with a test-mode PayPayl checkout. We will not charge you any
              money on this website.
            </p>
          </StyledAnswerSecond>
        </StyledRow>
        <StyledRow>
          <StyledQuestion>
            <p>
              <span>Q</span>: Can anyone see and buy my ticket?
            </p>
            <StyledIconThird onClick={handleClickThird} openThird={openThird}>
              <IconArrow />
            </StyledIconThird>
          </StyledQuestion>
          <StyledAnswerThird openThird={openThird}>
            <p>
              <span>A</span>: Yes, the tickets are available for all signed
              users. However, if someone is trying to buy a ticket it will not
              be displayed until the payment process is completed or after 90
              seconds of no activity.
            </p>
          </StyledAnswerThird>
        </StyledRow>
        <StyledRow>
          <StyledQuestion>
            <p>
              <span>Q</span>: Will I receive a confirmation message after a
              purchase?
            </p>
            <StyledIconFourth
              onClick={handleClickFourth}
              openFourth={openFourth}
            >
              <IconArrow />
            </StyledIconFourth>
          </StyledQuestion>
          <StyledAnswerFourth openFourth={openFourth}>
            <p>
              <span>A</span>: Yes, if you do provide us with an existing email
              we will send you once a message when the payment process is
              successfully completed.
            </p>
          </StyledAnswerFourth>
        </StyledRow>
        <StyledRow>
          <StyledQuestion>
            <p>
              <span>Q</span>: Why I cannot purchase my ticket on the checkout
              page?
            </p>
            <StyledIconFifth onClick={handleClickFifth} openFifth={openFifth}>
              <IconArrow />
            </StyledIconFifth>
          </StyledQuestion>
          <StyledAnswerFifth openFifth={openFifth}>
            <p>
              <span>A</span>: It may occurs that the test-mode PayPal proccess
              is sometimes buggy or does not respond as expected. Wait 90sec
              after the ticket will display on the list and try again.
            </p>
          </StyledAnswerFifth>
        </StyledRow>
      </StyledInnerSection>
      {!currentUser ? (
        <Link href='/auth/signup'>
          <StyledButton>Sell Your Ticket</StyledButton>
        </Link>
      ) : (
        <Link href='/dashboard/user'>
          <StyledButton>Sell Your Ticket</StyledButton>
        </Link>
      )}
    </StyledSection>
  );
};

export default QuestionsSection;
