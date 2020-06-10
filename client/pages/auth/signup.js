import { useState, Fragment } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';
import Head from 'next/head';
import paths from '../../paths';
import styled from 'styled-components';
import theme from '../../components/styles/theme';
import device from '../../components/styles/device';

const { colors, fontSizes } = theme;

const MainSection = styled.section`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem auto 0;
`;

const InnerSection = styled.div`
  border: 2px solid ${colors.purple};
  margin: 2rem auto 1rem;
  padding: 4rem 10rem;
  border-radius: 5px;
`;

const Title = styled.h1`
  color: ${colors.purple};
`;

const Form = styled.form``;

const InnerRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  width: 100%;
  margin-right: 0.2rem;
  font-size: ${fontSizes.large};
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  border: 2px solid ${colors.purple};
  border-radius: 5px;
  transition: all 0.2 ease-in;
  padding: 0.2rem;
  margin-top: 15px;
  font-size: ${fontSizes.medium};

  :active,
  :focus {
    border: 2.1px solid ${colors.purple};
  }
`;

const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  padding: 0.6rem 4rem;
  color: ${colors.white};
  font-size: ${fontSizes.normal};
  font-weight: 600;
  background-color: ${colors.purple};
  border-radius: 100px;
  transition: all 0.2s;
  margin-top: ${theme.mbSm};
  align-items: center;

  :focus,
  :hover {
    opacity: 0.8;
  }
`;

export default ({ title = 'Sign up To New Account' }) => {
  // hooks ->
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: `${paths.signup}`,
    method: 'post',
    body: { email, password },
    onSuccess: () => Router.push('/dashboard/user'),
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    doRequest();
  };

  return (
    <MainSection>
      <InnerSection>
        <Title>Sign Up</Title>
        <Form onSubmit={onSubmit}>
          <InnerRow>
            <Label>Email Address</Label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </InnerRow>
          <InnerRow>
            <Label>Password</Label>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type='password'
            />
          </InnerRow>
          {errors}
          <ButtonRow>
            <Button>Sign Up</Button>
          </ButtonRow>
        </Form>
      </InnerSection>
      <Head>
        <title>{title}</title>
      </Head>
    </MainSection>
  );
};
