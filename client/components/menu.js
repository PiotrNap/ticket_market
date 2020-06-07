import Link from 'next/link';
import IconSignin from './icons/signin';
import paths from '../paths';
import styled from 'styled-components';
import theme from './styles/theme';

const { colors, fontSizes } = theme;

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;

  li {
    display: flex;
    align-items: center;
    padding: 15px 10px;
    font-size: ${fontSizes.large};
    font-weight: 500;
    cursor: pointer;

    span {
      display: flex;
      align-items: center;
    }

    svg {
      height: 1.05rem;
      width: auto;
      margin-left: 0.5rem;
    }

    :hover,
    :active {
      color: ${colors.purple};
    }
  }
`;

const StyledListPoint = styled.li`
  display: flex;
  align-items: center;
  padding: 15px 10px;
  font-size: ${fontSizes.large};
  font-weight: 500;
  cursor: pointer;

  :hover,
  :active {
    color: ${colors.purple};
  }
`;

const StyledSpan = styled.span`
  display: flex;
  align-items: center;
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
            <StyledSpan>
              {label}
              {icon}
            </StyledSpan>
          </Link>
        </StyledListPoint>
      );
    });

  return <StyledList>{links}</StyledList>;
};
