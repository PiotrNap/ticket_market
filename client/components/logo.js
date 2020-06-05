import logo from '../public/logo.png';
import logoMobile from '../public/logoMobile.png';
import Link from 'next/link';
import { Fragment } from 'react';

export default ({ currentUser }) => {
  return (
    <Fragment>
      {!currentUser ? (
        <>
          <Link href='/'>
            <img className='logo' src={logo} />
          </Link>
          <Link href='/'>
            <img className='logoMobile' src={logoMobile} />
          </Link>
        </>
      ) : (
        <>
          <Link href='/dashboard'>
            <img className='logo' src={logo} />
          </Link>
          <Link href='/'>
            <img className='logoMobile' src={logoMobile} />
          </Link>
        </>
      )}
      <style jsx>{`
        .logo {
          display: block;
          width: 230px;
          height: auto;
          padding: 6px 0 4px 24px;
        }
        .logoMobile {
          display: none;
        }
        img:hover,
        img:focus {
          cursor: pointer;
        }
        @media screen and (max-width: 75em) {
          .logo {
            width: 210px;
            padding: 8px 0px 8px 24px;
          }
        }
        @media screen and (max-width: 37.5em) {
          .logo {
            display: none;
          }
          .logoMobile {
            display: block;
            width: 45px;
            height: auto;
            padding: 3px 0;
          }
        }
      `}</style>
    </Fragment>
  );
};
