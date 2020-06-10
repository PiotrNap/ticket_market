import Logo from './logo';
import Menu from './menu';
import styled from 'styled-components';
import { device } from '../styles/device';
import theme from '../styles/theme';

const { colors, fontSizes } = theme;

const StyledHeader = styled.header`
  /* position: fixed; */
  /* top: 0; */
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 90%;
  margin: 0 auto;
  padding: 0.3rem 0.5rem;
  border-bottom: 2px solid ${colors.transPurple};
`;

export default ({ currentUser }) => {
  return (
    <StyledHeader>
      {!currentUser ? (
        <>
          <Logo currentUser={currentUser} />
          <Menu currentUser={currentUser} />
        </>
      ) : (
        <>
          <Logo currentUser={currentUser} />
          <Menu currentUser={currentUser} />
        </>
      )}
    </StyledHeader>
  );
};
