import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';
import Head from 'next/head';
import { Fragment } from 'react';
<<<<<<< HEAD
import favicon from '../public/favicon.png';
=======
import favicon from '../public/static/favicon.png';
import '../public/static/global.css';
>>>>>>> b89c52433d6f732caf7e2832ceef9cb53b859d69
import Header from '../components/Header';
import Footer from '../components/Footer';

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <Fragment>
      <Head>
        <title>Ticket Market | Buy Sell and Enjoy!</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='shortcut icon' href={favicon} />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap'
        />
<<<<<<< HEAD
        <link rel='stylesheet' href='../public/global.css' />
=======
        <link rel='stylesheet' href='../public/static/global.css' />
>>>>>>> b89c52433d6f732caf7e2832ceef9cb53b859d69
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
      <style jsx>{`
        body {
          font-family: 'Inter', sans-serif, -apple-system, BlinkMacSystemFont,
            'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
            'Droid Sans', 'Helvetica Neue', sans-serif;
          font-weight: 400;
          line-height: 1.65;
          text-rendering: optimizeLegibility;
          --webkit-font-smoothing: antialised;
        }
      `}</style>
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
