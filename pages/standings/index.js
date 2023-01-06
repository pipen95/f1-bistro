import { useState } from 'react';
import DriverTableBody from './DriverTableBody';
import PlayerTableBody from './PlayerTableBody';
import TableHead from './TableHead';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';

const Standings = ({ allResults }) => {
  const [state, setState] = useState({
    checkedA: true,
  });

  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div className="Standings flex flex-col">
      <div className="Standings Standings_header flex justify-between">
        <h2 className="m-0">Standings</h2>
        <div className="flex align-self-center">
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>Players</Grid>
            <Grid item>
              <Switch
                checked={state.checkedA}
                onChange={handleChange('checkedA')}
                value="checkedA"
              />
            </Grid>
            <Grid item>Drivers</Grid>
          </Grid>
        </div>
      </div>
      <div className="Standings Standings_table">
        <table>
          <TableHead data={allResults} />
          {state.checkedA ? <DriverTableBody /> : <PlayerTableBody />}
        </table>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    `https://ergast.com/api/f1/current/results.json?limit=500`
  );
  const allResults = await res.json();

  // Pass data to the page via props
  return { props: { allResults }, revalidate: 15778476 };
}

export default Standings;
