import buildClient from '../api/build-client';
import Head from 'next/head';
import { Fragment } from 'react';
import favicon from '../public/favicon.png';
import Header from '../components/header/Header';
import Footer from '../components/footer/footer';
import GlobalStyle from '../components/styles/GlobalStyles';

// currentUser!!!!
const AppComponent = ({
  Component,
  pageProps,
  currentUser,
  title = 'Ticket Market | Buy Sell and Enjoy!',
}) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='shortcut icon' href={favicon} />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap'
        />
        <meta
          property='og:title'
          content='Ticket Market | Buy Sell and Enjoy!'
          key='title'
        />
      </Head>
      <GlobalStyle />
      {/* <Header /> */}
      <Header currentUser={currentUser} />
      {/* <Component {...pageProps} /> */}
      <Component currentUser={currentUser} {...pageProps} />
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
