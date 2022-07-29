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

  useEffect(() => {
    const fetchAll = (urls) => {
      return Promise.all(
        urls.map((url) =>
          fetch(url)
            .then((r) => r.json())
            .then((data) => setArr((oldArray) => [...oldArray, { data }]))
            .catch((error) => ({ error }))
        )
      );
    };

    fetchAll([
      `http://ergast.com/api/f1/current/last/results.json`,
      `http://ergast.com/api/f1/current/next.json`,
    ]);
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
