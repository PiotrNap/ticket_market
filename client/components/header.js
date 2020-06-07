import Logo from './logo';
import Menu from './menu';
import styled from 'styled-components';
import { device } from './styles/device';

const StyledHeader = styled.header`
  /* position: fixed; */
  /* top: 0; */
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 90%;
  margin: 0.5rem auto;
  
`;

export default ({ currentUser }) => {
  return (
    <StyledHeader>
      <Logo currentUser={currentUser} className='header__logo' />
      <Menu currentUser={currentUser} className='header__menu' />
      {/* <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 1em auto;
          max-width: 90%;

          &__logo {
          flex: 1 auto;
          }

          &__menu {
            text-transform: uppercase;
          }
  
        }
      `}</style> */}
    </StyledHeader>
  );
};
