import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 5rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className='copyright'>
        © {new Date().getFullYear()} Ticket Market. by Piotr N.
      </div>
    </StyledFooter>
  );
};

export default Footer;
