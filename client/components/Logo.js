import React, { Fragment } from 'react';
import logo from '../public/logo.png';
import Link from 'next/link';

const Logo = ({ currentUser }) => {
  return (
    <Fragment>
      {!currentUser ? (
        <Link href='/'>
          <img src={logo} />
        </Link>
      ) : (
        <Link href='/dashboard'>
          <img src={logo} />
        </Link>
      )}
      <style jsx>{`
        img {
          display: block;
          width: 200px;
          height: auto;
          padding: 6px 0 4px 24px;
        }
        img:hover,
        img:focus {
          cursor: pointer;
        }

        @media screen and (max-width: 1440px) {
          img {
            width: 210px;
            padding: 8px 0px 8px 24px;
          }
        }

        @media screen and (max-width: 630px) {
          img {
            width: 150px;
            padding: 4px 0px 2px;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Logo;
