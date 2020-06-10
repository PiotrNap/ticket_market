import React, { Fragment } from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import IconSearch from '../icons/search';
import { device } from '../styles/device';
import Link from 'next/link';

const { colors, fontSizes } = theme;

const StyledSearchForm = styled.form`
  width: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    min-width: 20rem;
  }

  @media ${device.mobileL} {
    flex: 0 0 75%;
    background-color: transparent;
    max-height: 4rem;
  }
`;

const StyledInput = styled.input`
  font-family: inherit;
  font-size: inherit;
  background-color: transparent;
  border: 2px solid ${colors.white};
  color: ${colors.white} !important;
  padding: 0.7rem 2rem;
  border-radius: 100px;
  width: 90%;
  transition: all 0.2s;
  margin-right: -1.25rem;
  margin-left: 1rem;
  margin-bottom: ${theme.mbSm};

  ::-webkit-input-placeholder {
    color: ${colors.white} !important;
  }

  ::-moz-placeholder {
    color: ${colors.white} !important;
  }

  ::-ms-placeholder {
    color: ${colors.white} !important;
  }

  ::placeholder {
    color: ${colors.white} !important;
  }

  &:focus {
    outline: none;
    color: ${colors.white};
    width: 92%;
    background-color: ${colors.transPurple};
  }

  &:focus + button {
    background-color: transparent;
  }

  &::-webkit-input-placeholder {
    font-weight: 400;
    color: ${colors.lightText};
  }
`;

const StyledButtonIcon = styled.button`
  border: none;
  background-color: transparent;
  transform: translateX(-2rem) translateY(-0.5rem);

  &:focus {
    outline: none;
  }

  svg {
    height: 1.5rem;
    width: 1.5rem;
    fill: ${colors.white};
  }
`;

const StyledButton = styled.a`
  margin-left: 0.2rem;
  padding: 0.75rem 3.5rem;
  border-radius: 100px;
  border: 2px solid ${colors.white};
  color: ${colors.white};
  background-color: transparent;
  font-size: ${fontSizes.normal};
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
  :hover {
    background-color: ${colors.white};
    color: ${colors.purple};
  }
`;

const StyledHeroHeading = styled.div`
  text-transform: uppercase;
  h1 {
    color: ${colors.white};
    font-weight: 800;
    letter-spacing: 0.5px;
    font-size: ${fontSizes.Xbig};
    margin-bottom: 0 auto ${theme.mbSm} auto;
  }

  @media ${device.mobileL} {
    h1 {
      font-size: ${fontSizes.XXlarge};
    }
  }
`;

const SearchBox = () => {
  return (
    <Fragment>
      <StyledHeroHeading>
        <h1>Find your favorite event.</h1>
      </StyledHeroHeading>
      <StyledSearchForm action='#'>
        <StyledInput type='text' placeholder='Search for ticket...' />
        <StyledButtonIcon>
          <IconSearch />
        </StyledButtonIcon>
      </StyledSearchForm>
      <Link href='/dashboard/user'>
        <StyledButton>See all Tickets</StyledButton>
      </Link>
    </Fragment>
  );
};

export default SearchBox;
