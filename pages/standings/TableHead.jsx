const TableHead = ({ data }) => {
  const data2 = data.MRData.RaceTable.Races.map((el) =>
    el.Circuit.circuitId.substring(0, 3).toUpperCase()
  );
  const racesId = data2.map((el, i) => (
    <th className="left" key={i}>
      {el}
    </th>
  ));
  return (
    <thead>
      <tr>
        <th className="left">Name</th>
        {racesId}
        <th className="left">Total</th>
      </tr>
    </thead>
  );
};

export default TableHead;
