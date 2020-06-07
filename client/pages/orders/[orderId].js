import { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import useRequest from '../../hooks/use-request';
import Router from 'next/router';
import Head from 'next/head';
import paths from '../../paths';

const OrderShow = ({ order, currentUser, title }) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const { doRequest, errors } = useRequest({
    url: `${paths.payments}`,
    method: 'post',
    body: {
      orderId: order.id,
    },
    onSuccess: () => Router.push(`${paths.orders}`),
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
      <div>
        <h2>{order.ticket.title}</h2>
      </div>
      <div>
        {timeLeft} seconds until the order expires.
        <StripeCheckout
          token={({ id }) => doRequest({ token: id })}
          stripeKey='pk_test_YLQNU5ASOcPu7s7KufOMDcT50002vQ1ugm'
          amount={order.ticket.price * 100}
          email={currentUser.email}
        />
        {errors}
      </div>
    </>
  );
};

OrderShow.getInitialProps = async (context, client) => {
  const { orderId } = context.query;

  const { data } = await client.get(`/api/orders/${orderId}`);

  return { order: data };
};

export default OrderShow;
