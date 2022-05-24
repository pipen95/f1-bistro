import { useDispatch, useSelector } from 'react-redux';
import { check, reset } from './../auth/authSlice';
import { useEffect, useState, createContext } from 'react';

const useDataContext = createContext(null);

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
    }

    dispatch(reset());

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
  return (
    <div>
      <useDataContext.Provider value={arr}>{children}</useDataContext.Provider>
    </div>
  );
};

export default Wrapper;
