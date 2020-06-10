import { useEffect } from 'react';
import useRequest from '../../hooks/use-request';
import Router from 'next/router';
import paths from '../../paths';

export default () => {
  const { doRequest } = useRequest({
    url: `${paths.signout}`,
    method: 'post',
    body: {},
    onSuccess: () => {
      Router.push('/');
    },
  });

  useEffect(() => {
    doRequest();
  }, []);

  return <div>Signing you out...</div>;
};
