import { useState, useEffect } from 'react';
import './../sass/main.scss';
import Layout from './../components/Layout';
import Menu from './../components/Menu';
import Footer from './../components/Footer';
import AuthService from './../services/auth.service';

function MyApp({ Component, pageProps }) {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(null);
  };
  return (
    <>
      <Menu currentUser={currentUser} logOut={logOut} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  );
}

export default MyApp;
