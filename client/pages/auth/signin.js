import { useState, Fragment } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';
import Head from 'next/head';
import paths from '../../paths';

export default ({ title = 'Sign in To Your Account' }) => {
  // hooks ->
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: `${paths.signin}`,
    method: 'post',
    body: { email, password },
    onSuccess: () => Router.push('/dashboard'),
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    doRequest();
  };

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <form onSubmit={onSubmit}>
        <h1>Sign In</h1>
        <div className='form-group'>
          <label>Email Address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            className='form-control'
          />
        </div>
        {errors}
        <button className='btn btn-primary'>Sign In</button>
      </form>
    </Fragment>
  );
};
