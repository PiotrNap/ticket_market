import logo from '../public/logo.png';
import logoMobile from '../public/logoMobile.png';
import Link from 'next/link';
import { Fragment } from 'react';
import styled from 'styled-components';
import { device } from './styles/device';

const StyledMobileLogo = styled.img`
  content: url(${logoMobile});
  width: 45px;
  height: auto;
  display: none;
  padding: 3px 0 2px 0;

  @media ${device.tablet} {
    display: block;
  }

  @media ${device.mobileL} {
    width: 40px;
    display: block;
    padding: 1px 0 1px 0;
  }
`;

const StyledLogo = styled.img`
  content: url(${logo});
  display: block;
  width: 240px;
  height: auto;
  padding: 8px 0 8px 24px;

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
      <Link href='/' passHref>
        <StyledLogo />
      </Link>
      <Link href='/' passHref>
        <StyledMobileLogo />
      </Link>

      {/* {!currentUser ? (
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
      )} */}
    </Fragment>
  );
};
