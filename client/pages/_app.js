import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';
import Header from '../components/Header';
import Head from 'next/head';
import Footer from '../components/Footer';
import { Fragment } from 'react';
import favicon from '../public/static/favicon.png';
import '../styles/global.css';
<<<<<<< HEAD
=======

>>>>>>> d37152bdcc24fd7dbfbe63b540575212db2fc826

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <Fragment>
      <Head>
        <title>Ticket Market | Buy Sell and Enjoy!</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='shortcut icon' href={favicon} />
        <meta
          property='og:title'
          content='Ticket Market | Buy Sell and Enjoy!'
          key='title'
        />
      </Head>
      <Header currentUser={currentUser} />
      <div className='container'>
        <Component currentUser={currentUser} {...pageProps} />
      </div>
      <Footer />
    </Fragment>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  // console.log(appContext);
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      client,
      data.currentUser
    );
  }

  return {
    pageProps,
    ...data,
  };
};

export default AppComponent;
