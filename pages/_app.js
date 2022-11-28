import '../sass/main.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from 'components/layout/Layout';
import Wrapper from 'components/Wrapper';
import Menu from 'components/layout/Menu';
import Footer from 'components/layout/Footer';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Router from 'next/router';
import { useState } from 'react';
import Loader from 'components/ui/Loader';
import Head from 'next/head';
import NProgress from 'nprogress';
NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.events.on('routeChangeStart', (url) => {
    console.log('Route is changing...');
    NProgress.start();
    setLoading(true);
  });
  Router.events.on('routeChangeComplete', (url) => {
    console.log('Route is changing is complete');
    NProgress.done();
    setLoading(false);
  });

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      {loading && <Loader />}
      <Provider store={store}>
        <DndProvider backend={HTML5Backend}>
          <Wrapper>
            <Menu />
            <Layout>
              <Component {...pageProps} />
            </Layout>
            <Footer />
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              draggable
            />
          </Wrapper>
          <div id="portal" />
        </DndProvider>
      </Provider>
    </>
  );
}

export default MyApp;
