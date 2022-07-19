import 'sass/main.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from 'components/Layout';
import Wrapper from 'components/Wrapper';
import Menu from 'components/Menu';
import Footer from 'components/Footer';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function MyApp({ Component, pageProps }) {
  return (
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
      </DndProvider>
    </Provider>
  );
}

export default MyApp;
