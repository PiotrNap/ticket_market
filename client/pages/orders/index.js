import paths from '../../paths';
import OrderDashboard from '../../components/user/orderDashboard';

const OrderIndex = ({ orders }) => {
  return <OrderDashboard orders={orders} />;
};

OrderIndex.getInitialProps = async (context, client) => {
  const { data } = await client.get(`${paths.ordersIndex}`);

  return { orders: data };
};

export default OrderIndex;
