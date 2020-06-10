import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import theme from '../components/styles/theme';
import { device } from '../components/styles/device';
import styled from 'styled-components';

const { colors, fontSizes } = theme;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    font-size: ${fontSizes.Xlarge};
    font-weight: 600;
    color: ${colors.lightText};
    margin-bottom: 1.5rem;
  }
  input {
    outline: none;
    border: 2px solid ${colors.purple};
    border-radius: 100px;
    padding: 0.5rem 2.6rem;
    background-color: ${colors.white};
    font-size: ${fontSizes.large};

    @media ${device.mobileL} {
      border: 2.1px solid ${colors.purple};
    }
  }

  p {
    margin-bottom: ${theme.mbSm};
  }

  button {
    padding: 0.6rem 4rem;
    color: ${colors.white};
    font-size: ${fontSizes.normal};
    font-weight: 600;
    background-color: ${colors.purple};
    border-radius: 100px;
    transition: all 0.2s;
    margin-top: ${theme.mbSm};

    :focus,
    :hover {
      color: ${colors.purple};
      background-color: ${colors.white};
    }
  }
`;

const StyledError = styled(ErrorMessage)``;

export default () => {
  return (
    <Formik
      onSubmit={async (values) => {
        await new Promise((res) => setTimeout(res, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      initialValues={{ email: '' }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('You should change something!')
          .required('Email is required.'),
      })}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <label htmlFor='email'>Get Informed Every Week!</label>
          <p>We wouldn't send you any spam, only the best content.</p>
          <Field type='email' name='email' placeholder='Your email...' />
          <StyledError name='email' compoenent='div' />
          <button type='submit' disabled={isSubmitting}>
            Submit
          </button>
        </StyledForm>
      )}
    </Formik>
  );
};
