import Main from './../components/home/Main';
import Side from './../components/home/Side';
import Topics from './../components/home/Topics';
import Galerie from './../components/home/Galerie';

const Home = () => {
  return (
    <>
      <div className="home">
        <Main />
        <Side />
        <Topics />
      </div>
      <Galerie />
    </>
  );
};
export default Home;
