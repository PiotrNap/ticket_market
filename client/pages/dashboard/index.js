import Head from 'next/head';
import { Fragment } from 'react';
import paths from '../../paths';
import HeroSection from '../../components/hero/heroDashboard';
import QuestionsSection from '../../components/faq/Questions';

// currentUser, tickets
const DashboardIndex = ({
  currentUser,
  title = 'Welcome to Ticket Market!',
}) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <HeroSection />
      <QuestionsSection currentUser={currentUser}/>
    </Fragment>
  );
};

DashboardIndex.getInitialProps = async (context, client, currentUser) => {
  const { data } = await client.get(`${paths.tickets}`);

  return { tickets: data };
};

export default DashboardIndex;
