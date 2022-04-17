import { useRef } from 'react';
import './../sass/main.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './../components/Layout';
import Menu from './../components/Menu';
import Footer from './../components/Footer';
import { Provider } from 'react-redux';
import { store } from '../store/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Menu />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
      <ToastContainer />
    </Provider>
  );
}

export default MyApp;
