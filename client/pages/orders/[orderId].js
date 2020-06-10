import { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import useRequest from '../../hooks/use-request';
import Router from 'next/router';
import Head from 'next/head';
import paths from '../../paths';
import IconPayments from '../../components/icons/payments';
import styled from 'styled-components';
import { device } from '../../components/styles/device';
import theme from '../../components/styles/theme';

const { colors, fontSizes } = theme;

const MainSection = styled.section`
  height: 50vh;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem auto 0;
`;

const InnerSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  @media ${device.tablet} {
    flex-direction: column-reverse;
  }
`;

const IconBlock = styled.div`
  flex: 0 0 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 25rem;
    height: auto;
    @media ${device.laptop} {
      width: 20rem;
      height: auto;
      margin-top: 2rem;
    }
    @media ${device.mobileL} {
      width: 15rem;
      height: auto;
    }
  }
`;

const TextBlock = styled.div`
  width: 85%;
  margin: 0 2rem;
`;

const Header = styled.div`
  span {
    color: ${colors.purple};
  }
`;

const Payments = styled.div`
  p {
    margin-bottom: ${theme.mbMd};
  }
`;

const OrderShow = ({ order, currentUser, title }) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const { doRequest, errors } = useRequest({
    url: `${paths.payments}`,
    method: 'post',
    body: {
      orderId: order.id,
    },
    onSuccess: () => Router.push('/orders'),
  });

  useEffect(() => {
    const findTimeLeft = () => {
      const msLeft = new Date(order.expiresAt) - new Date();
      setTimeLeft(Math.round(msLeft / 1000));
    };
    findTimeLeft();
    const timerId = setInterval(findTimeLeft, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  if (timeLeft < 0) {
    return <div>The order has expired</div>;
  }

  return (
    <>
      <Head>
        <title>You are buying {order.ticket.title}</title>
      </Head>
      <MainSection>
        <InnerSection>
          <IconBlock>
            <IconPayments />
          </IconBlock>
          <TextBlock>
            <Header>
              <h2>
                You are buying: <span>{order.ticket.title}</span>
              </h2>
            </Header>
            <Payments>
              <p>
                To purchase a ticket please provide this card number:
                <br />
                <b>4242 4242 4242 4242</b>
                <br />
                (special number for only test purposes). The expiration date and
                digit number can be a random. Hurry up! There are only{' '}
                {timeLeft} seconds left until the order expires.
              </p>

              <StripeCheckout
                token={({ id }) => doRequest({ token: id })}
                stripeKey='pk_test_YLQNU5ASOcPu7s7KufOMDcT50002vQ1ugm'
                amount={order.ticket.price * 100}
                email={currentUser.email}
              />
              {errors}
            </Payments>
          </TextBlock>
        </InnerSection>
      </MainSection>
    </>
  );
};

OrderShow.getInitialProps = async (context, client) => {
  const { orderId } = context.query;

  const { data } = await client.get(`/api/orders/${orderId}`);

  return { order: data };
};

export default OrderShow;
