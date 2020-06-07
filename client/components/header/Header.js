import Logo from './logo';
import Menu from './menu';
import styled from 'styled-components';
import SearchBox from './searchbox';
import { device } from '../styles/device'

const StyledHeader = styled.header`
  /* position: fixed; */
  /* top: 0; */
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 90%;
  margin: 0 auto;
  padding: 0.5rem 0.5rem;
`;

export default ({ currentUser }) => {
  return (
    <StyledHeader>
      <Logo currentUser={currentUser} className='header__logo' />
      <SearchBox />
      <Menu currentUser={currentUser} className='header__menu' />
    </StyledHeader>
  );
};
