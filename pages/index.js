import Main from './../components/home/main/Main';
import Side from './../components/home/side/Side';
import Topics from './../components/home/Topics';
import Context from '../components/Context';

const Home = ({ raceResults }) => {
  return (
    <div className="home">
      <Context.Provider value={{ raceResults }}>
        <Main />
        <Side />
        <Topics />
      </Context.Provider>
    </div>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://ergast.com/api/f1/current/last/results.json`);
  const raceResults = await res.json();

  // Pass data to the page via props
  return { props: { raceResults } };
}

export default Home;
