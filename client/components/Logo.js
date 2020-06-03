import React, { Fragment } from 'react';
import styled from 'styled-components';
import media from '../styles/media';
import logo from '../public/static/logo.png';
import Link from 'next/link';

const StyledLogo = styled.img`
  display: block;
  width: 200px;
  height: auto;
  padding: 6px 0 4px 24px;
  :hover,
  :focus {
    cursor: pointer;
  }

  ${media.giant`
    width: 210px;
    padding: 8px 0px 8px 24px;
  `}

  ${media.thone`
    width: 150px;
    padding: 4px 0px 2px;
  `}
`;

const Logo = ({ currentUser }) => {
  return (
    <Fragment>
      {!currentUser ? (
        <Link href='/'>
          <StyledLogo src={logo} />
        </Link>
      ) : (
        <Link href='/dashboard'>
          <StyledLogo src={logo} />
        </Link>
      )}
    </Fragment>
  );
};

export default Logo;
