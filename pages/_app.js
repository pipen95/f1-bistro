import { useRef } from 'react';
import './../sass/main.scss';
import Layout from './../components/Layout';
import Menu from './../components/Menu';
import Footer from './../components/Footer';
import AuthService from './../services/auth.service';
import Context from '../components/Context';

function MyApp({ Component, pageProps }) {
  const user = useRef(false);
  const logOut = () => {
    user.current = false;
    AuthService.logout();
  };
  const logIn = () => {
    user.current = true;
  };

  return (
    <Context.Provider value={{ user, logIn, logOut }}>
      <Menu />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </Context.Provider>
  );
}

// Fetch data from external API or Server Cookies etc
// export async function getServerSideProps({ req, res }) {
//   const cookies = new Cookies(req, res);

//   const userCookie = cookies.get('jwt');
//   // Pass data to the page via props
//   return { props: { userCookie } };
// }

export default MyApp;
