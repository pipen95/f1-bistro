import './../sass/main.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './../components/Layout';
import Wrapper from './../components/Wrapper';
import Menu from './../components/Menu';
import Footer from './../components/Footer';
import { Provider } from 'react-redux';
import { store } from '../store/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default MyApp;
