import { useDispatch, useSelector } from 'react-redux';
import { check, reset } from 'features/auth/authSlice';
import { getUserData } from 'features/user/userSlice';
import { useEffect, useState } from 'react';
import { f1ApiContext } from 'context/Context';

const Wrapper = ({ children }) => {
  const [arr, setArr] = useState([]);
  const dispatch = useDispatch();
  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  // Check USER is logged In

  useEffect(() => {
    dispatch(check());
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      console.log('checked!');
      dispatch(getUserData());
    }
    dispatch(reset());
  }, [user]);

  // Fetch results race
  useEffect(() => {
    const fetchResults = async () => {
      // Fetch results
      const res = await fetch(
        `https://ergast.com/api/f1/current/last/results.json`
      );
      const data = await res.json();
      setArr((oldArray) => [...oldArray, { data }]);
      fetchNext();
    };
    fetchResults();
    // Fetch next race
    const fetchNext = async () => {
      // const res2 = await fetch(`https://ergast.com/api/f1/current/next.json`);
      const res2 = await fetch(
        `https://ergast.com/api/f1/current/last/results.json`
      );
      const data = await res2.json();
      setArr((oldArray) => [...oldArray, { data }]);
    };
  }, [setArr]);

  if (arr.length < 2) return null;
  const [raceResults, nextRace] = arr;

  return (
    <div>
      <f1ApiContext.Provider value={{ raceResults, nextRace }}>
        {children}
      </f1ApiContext.Provider>
    </div>
  );
};

export default Wrapper;
