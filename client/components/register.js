import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import theme from '../components/styles/theme';
import { device } from '../components/styles/device';
import styled from 'styled-components';

const { colors, fontSizes } = theme;

const StyledFormik = styled(Formik)`
 display: flex;
`;

export default () => {
  return (
    <StyledFormik
      onSubmit={async (values) => {
        await new Promise((res) => setTimeout(res, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      initialValues={{ email: '' }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('You should change something!')
          .required('Your email is required.'),
      })}
    >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor='email'>Get Informed Every Week!</label>
          <Field type='email' name='email' />
          <ErrorMessage name='email' compoenent='div' />
          <button type='submit' disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </StyledFormik>
  );
};
