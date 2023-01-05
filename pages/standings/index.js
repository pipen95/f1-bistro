import { useState } from 'react';
import DriverTableBody from './DriverTableBody';
import TableHead from './TableHead';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';

const Standings = () => {
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
          <TableHead />
          <DriverTableBody />
        </table>
      </div>
    </div>
  );
};

export default Standings;
