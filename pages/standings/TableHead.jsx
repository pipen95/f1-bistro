const TableHead = ({ data }) => {
  const racesId = data.map((el, i) => (
    <th className="left" key={i}>
      {el}
    </th>
  ));
  return (
    <thead>
      <tr>
        <th className="left">Drivers</th>
        {racesId}
        <th className="left">Total</th>
      </tr>
    </thead>
  );
};

export default TableHead;
