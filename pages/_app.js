import './../sass/main.scss';
import Layout from './../components/Layout';
import Menu from './../components/Menu';
import Footer from './../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Menu />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  );
}

export default MyApp;
