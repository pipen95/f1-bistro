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
import NProgress from 'nprogress';
import '../styles/nprogress.css';
NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.events.on('routeChangeStart', (url) => {
    NProgress.start();
    setLoading(true);
  });
  Router.events.on('routeChangeComplete', (url) => {
    NProgress.done();
    setLoading(false);
  });

  return (
    <>
      <Provider store={store}>
        <DndProvider backend={HTML5Backend}>
          <Wrapper>
            <Menu />
            {loading ? (
              <Loader />
            ) : (
              <Layout>
                <Component {...pageProps} />
              </Layout>
            )}

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
