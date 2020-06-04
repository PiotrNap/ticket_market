import React from 'react';
import Link from 'next/link';
import IconSignup from './icons/signup';

const Menu = ({ currentUser }) => {
  const links = [
    !currentUser && { label: 'Sign Up', href: '/auth/signup' },
    !currentUser && { label: 'Sign In', href: '/auth/signin' },
    currentUser && { label: 'Sell tickets', href: '/tickets/new' },
    currentUser && { label: 'My Orders', href: '/orders' },
    currentUser && { label: 'Sign Out', href: '/auth/signout' },
  ]
    .filter((linkConfig) => linkConfig) // filter which are falsy
    .map(({ label, href }) => {
      return (
        <li key={href} className='nav-item'>
          <Link href={href}>
            <a className='nav-link'>{label}</a>
          </Link>
        </li>
      );
    });

  return (
    <div className='d-flex justify-content-end'>
      <ul className='nav d-flex align-items-center'>{links}</ul>
      <div className='icons'>
        <IconSignup />
      </div>
      <style jsx>{`
        div.icons {
          padding: 4px 1px;
        }
        svg {
          width: 24px;
          height: 24px;
        }
      `}</style>
    </div>
  );
};

export default Menu;
