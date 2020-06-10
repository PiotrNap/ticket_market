import { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';
import paths from '../../paths';
import styled from 'styled-components';
import theme from '../../components/styles/theme';

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
  padding: 5rem 10rem;
  border-radius: 5px;
`;

const Title = styled.h1`
  color: ${colors.purple};
`;

const Form = styled.form``;

const InnerRow = styled.div``;

const Label = styled.label`
  width: 30%;
  margin-right: 0.2rem;
  font-size: ${fontSizes.large};
  font-weight: 600;
`;

const Input = styled.input`
  width: 70%;
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

const NewTicket = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const { doRequest, errors } = useRequest({
    url: `${paths.tickets}`,
    method: 'post',
    body: {
      title,
      price,
    },
    onSuccess: (ticket) => Router.push('/dashboard/user'),
  });

  const onSubmit = (event) => {
    event.preventDefault();

    doRequest();
  };

  const onBlur = () => {
    const value = parseFloat(price);

    if (isNaN(value)) {
      return;
    }

    setPrice(value.toFixed(2));
  };

  return (
    <MainSection>
      <InnerSection>
        <Title>Create a Ticket</Title>
        <Form onSubmit={onSubmit}>
          <InnerRow>
            <Label>Title:</Label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </InnerRow>
          <InnerRow>
            <Label>Price:</Label>
            <Input
              value={price}
              onBlur={onBlur}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </InnerRow>
          {errors}
          <ButtonRow>
            <Button>Submit</Button>
          </ButtonRow>
        </Form>
      </InnerSection>
    </MainSection>
  );
};

export default NewTicket;
