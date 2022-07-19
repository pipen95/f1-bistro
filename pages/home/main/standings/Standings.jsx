import Table from 'Table';

function Standings({ data }) {
  return (
    <div className="Standings">
      <Table data={data} />
    </div>
  );
}

export default Standings;
