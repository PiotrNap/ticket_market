import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import styled from 'styled-components';

const StyledNav = styled.header`
  display: flex;
  margin: auto;
  max-width: 90%;
  border-bottom: 1px solid #1d1d1d;
`;

export default ({ currentUser }) => {
  return (
    <StyledNav className='navbar navbar-light'>
      <Logo currentUser={currentUser} />
      <Menu currentUser={currentUser} />
    </StyledNav>
  );
};
