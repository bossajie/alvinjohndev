import React from 'react';
import MainLayout from '../components/layouts/main';

const MyApp = ({ Component, pageProps }) => {
    return (
      <MainLayout>
          <Component {...pageProps} />
      </MainLayout>
    );
}

export default MyApp;