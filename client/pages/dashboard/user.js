import Link from 'next/link';
import Head from 'next/head';
import { Fragment } from 'react';
import paths from '../../paths';
import UserDashboard from '../../components/user/userDashboard';

const DashboardIndex = ({
  currentUser,
  tickets,
  title = 'Welcome to Your Dashboard',
}) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <UserDashboard currentUser={currentUser} tickets={tickets} />
    </Fragment>
  );
};

DashboardIndex.getInitialProps = async (context, client, currentUser) => {
  const { data } = await client.get(`${paths.tickets}`);

  return { tickets: data };
};

export default DashboardIndex;
