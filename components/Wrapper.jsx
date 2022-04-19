import { useDispatch, useSelector } from 'react-redux';
import { check, reset } from './../auth/authSlice';
import { useEffect } from 'react';

const Wrapper = ({ children }) => {
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
  }, []);

  return <div>{children}</div>;
};

export default Wrapper;
