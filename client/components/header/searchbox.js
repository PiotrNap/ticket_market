import React from 'react';
import IconSearch from '../icons/search';
import styled from 'styled-components';
import { device } from '../styles/device';
import theme from '../styles/theme';

const { colors } = theme;

const StyledSearchForm = styled.form`
  flex: 0 0 40%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    min-width: 20rem;
  }

  @media ${device.mobileL} {
    flex: 0 0 75%;
    background-color: ${colors.shadowWhite};
  }
`;

const StyledInput = styled.input`
  font-family: inherit;
  font-size: inherit;
  background-color: ${colors.white};
  border: 2px solid ${colors.purple};
  color: ${colors.darkText};
  padding: 0.7rem 2rem;
  border-radius: 100px;
  width: 90%;
  transition: all 0.2s;
  margin-right: -1.25rem;
  margin-left: 1rem;

  &:focus {
    outline: none;
    color: ${colors.darkText};
    border: 2px solid ${colors.purple};
    width: 95%;
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

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  transform: translateX(-2rem);

  &:focus {
    outline: none;
  }

  svg {
    height: 1.5rem;
    width: 1.5rem;
    fill: ${colors.purple};
  }
`;

const SearchBox = () => {
  return (
    <StyledSearchForm action='#'>
      <StyledInput type='text' placeholder='Search for ticket...' />
      <StyledButton>
        <IconSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchBox;
