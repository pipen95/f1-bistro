import useSWR from 'swr';
import Loader from '../../components/ui/Loader';

const PlayerTableBody = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  function useDriver(url) {
    const { data, error, isLoading } = useSWR(url, fetcher);

    return {
      driverData: data,
      isDriverLoading: isLoading,
      isDriverError: error,
    };
  }
  function useResult(url) {
    const { data, error, isLoading } = useSWR(url, fetcher);

    return {
      resultData: data,
      isResultLoading: isLoading,
      isResultError: error,
    };
  }

  const { driverData } = useDriver(
    `https://ergast.com/api/f1/current/driverStandings.json`
  );
  const { resultData } = useResult(
    `https://ergast.com/api/f1/current/results.json?limit=500`
  );

  return (
    <tbody>
      <tr>hello</tr>
    </tbody>
  );
};

export default PlayerTableBody;
