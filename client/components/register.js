import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default () => {
  return (
    <Formik
      onSubmit={async (values) => {
        await new Promise((res) => setTimeout(res, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      initialValues={{ email: '' }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email().required('You should change something!'),
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
    </Formik>
  );
};
