import Link from 'next/link';
import IconSignin from '../icons/signin';
import paths from '../../paths';
import styled from 'styled-components';
import theme from '../styles/theme';
import { device } from '../styles/device';

const { colors, fontSizes } = theme;

const StyledMenu = styled.div`
  @media ${device.mobileL} {
    flex: 0 0 100%;
    align-items: center;
    justify-content: center;
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media ${device.mobileL} {
    padding: 0;
  }
`;

const StyledListPoint = styled.li`
  display: flex;
  align-items: center;
  padding: 15px 10px;
  font-size: ${fontSizes.large};
  font-weight: 500;
  cursor: pointer;

  @media ${device.mobileL} {
    padding: 5px 10px;
  }

  span {
    display: flex;
    align-items: center;
  }

  svg {
    height: 1.05rem;
    width: auto;
    margin-left: 0.6rem;
    margin-top: -1px;
  }

  :hover,
  :active {
    color: ${colors.purple};
  }
`;

const { signin, signup, orders, signout, ticketNew } = paths;

export default ({ currentUser }) => {
  const links = [
    !currentUser && {
      label: 'Sign Up',
      href: `${signup}`,
    },
    !currentUser && {
      label: 'Sign In',
      href: `${signin}`,
      icon: <IconSignin />,
    },
    currentUser && { label: 'Sell tickets', href: `${ticketNew}` },
    currentUser && { label: 'My Orders', href: `${orders}` },
    currentUser && { label: 'Sign Out', href: `${signout}` },
  ]
    .filter((linkConfig) => linkConfig) // filter which are falsy
    .map(({ label, href, icon }) => {
      return (
        <StyledListPoint key={href}>
          <Link href={href}>
            <span>
              {label}
              {icon}
            </span>
          </Link>
        </StyledListPoint>
      );
    });

  return (
    <StyledMenu>
      <StyledList>{links}</StyledList>
    </StyledMenu>
  );
};
