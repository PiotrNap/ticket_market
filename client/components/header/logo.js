import logo from '../../public/logo.png';
import logoMobile from '../../public/logoMobile.png';
import Link from 'next/link';
import { Fragment } from 'react';
import styled from 'styled-components';
import { device } from '../styles/device';

const StyledMobileLogo = styled.img`
  content: url(${logoMobile});
  width: 45px;
  height: auto;
  display: none;
  padding: 0.2rem;
  image-rendering: auto;

  @media ${device.tablet} {
    display: block;
    flex: 0 0 40%;
    max-width: 50px;
    heigth: auto;
  }

  @media ${device.mobileL} {
    max-width: 40px;
    display: block;
    padding: 1px 0 1px 0;
  }
`;

const StyledLogo = styled.img`
  content: url(${logo});
  display: block;
  width: 240px;
  height: auto;
  padding: 1rem;

  :hover,
  :focus {
    cursor: pointer;
  }

  @media ${device.laptop} {
    width: 210px;
    padding: 6px 0px 6px 24px;
  }

  @media ${device.tablet} {
    display: none;
  }
`;

export default ({ currentUser }) => {
  return (
    <Fragment>
      {!currentUser ? (
        <>
          <Link href='/'>
            <StyledLogo className='logo' src={logo} />
          </Link>
          <Link href='/'>
            <StyledMobileLogo className='logoMobile' src={logoMobile} />
          </Link>
        </>
      ) : (
        <>
          <Link href='/dashboard'>
            <StyledLogo className='logo' src={logo} />
          </Link>
          <Link href='/dashboard'>
            <StyledMobileLogo className='logoMobile' src={logoMobile} />
          </Link>
        </>
      )}
    </Fragment>
  );
};
