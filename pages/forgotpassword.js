import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { emailreset, reset } from './../auth/authSlice';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
  const router = useRouter();
  const email = useRef();

  const [access, setAccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: '',
  });

  // REDUX SETUP
  const dispatch = useDispatch();

  const { isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      setAccess(true);
      window.setTimeout(timerid, 1000);
    }

    dispatch(reset());
  }, [isError, isSuccess, message, dispatch]);

  //HANDLER FONCTIONS
  //ON CHANGE
  const handleChange = (event) => {
    return setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  //VALIDATION
  const handleValidation = () => {
    let fields = formData;
    let err = {};
    let formIsValid = true;
    //Email
    if (!fields['email']) {
      formIsValid = false;
      err['email'] = 'Cannot be empty';
    } else if (typeof fields['email'] !== 'undefined') {
      if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(fields['email'])
      ) {
        formIsValid = false;
        err['email'] = 'Email is not valid. Example: f1bistrot@example.com';
      }
    }

    setErrors(err);
    return formIsValid;
  };

  // CLOSE MODAL
  const timerid = () => {
    setFormData({
      email: '',
    });
    setErrors({});
    router.push(`/`);
  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      postData(formData);
    }
  };

  // POST REQUEST
  const postData = async (data) => {
    let err = {};
    const payload = {
      email: data.email,
    };

    try {
      dispatch(emailreset(payload));
    } catch (error) {
      console.log(error);
      if (error.response) {
        err['server'] = `${error.response.data.message}`;
      } else {
        err[
          'server'
        ] = `There was a problem validating the provided data. Please try again.`;
      }
    }
    setErrors(err);
    toast.error(errors[Object.keys('server').pop()]);
    return;
  };

  // JSX FORM
  return (
    <div className="login-form center">
      {access ? (
        <>
          <h2 className="m-0 center">Reset Email sent!</h2>
        </>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <h2 className="text-center">Please provide your email adress</h2>

          <div className="form__group" disabled={isLoading}>
            <label htmlFor="email" className="form__label">
              Email
            </label>
            <input
              ref={email}
              type="email"
              id="email"
              className="form__input"
              name="email"
              onChange={handleChange}
              value={formData.email}
              placeholder="f1bistro@menu.com"
            />

            <div className="error">
              <p>{errors['email']}</p>
            </div>
          </div>

          <div className="center">
            <button
              className="btn btn--blue"
              type="submit"
              disabled={isLoading}
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;
