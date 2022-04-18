import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { passwordreset, reset } from './../auth/authSlice';
import { toast } from 'react-toastify';
axios.defaults.withCredentials = true;

const PasswordReset = () => {
  const router = useRouter();
  const password = useRef();
  const passwordConfirm = useRef();

  const [access, setAccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPass, setShowPass] = useState('text');
  const [formData, setFormData] = useState({
    password: '',
    passwordConfirm: '',
  });

  // REDUX SETUP
  const dispatch = useDispatch();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      setAccess(true);
      window.setTimeout(timerid, 1000);
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch]);

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

    //Password
    if (!fields['password']) {
      formIsValid = false;
      err['password'] = 'Cannot be empty';
    }

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
      passwordConfirm: '',
      password: '',
    });
    setErrors({});
    router.push(`/`);
  };

  // TOGGLE SHOW PASSWORD
  const toggleShowPass = () => {
    if (showPass === 'text') {
      setShowPass('password');
    } else {
      setShowPass('text');
    }
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
      password: data.password,
    };
    const url_string = window.location.href;
    const url = new URL(url_string);
    const token = url.searchParams.get('token');

    try {
      dispatch(passwordreset(payload, token));
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
          <h2 className="m-0 text-center">
            Your password has successfully been reset!
          </h2>
        </>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <h2 className="text-center">Reset your password</h2>
          <div className="error d-flex justify-content-center mb-3">
            <p className="text-center">{errors['server']}</p>
          </div>

          <div className="form__group" disabled={isLoading}>
            <label htmlFor="password" className="form__label">
              Password
            </label>
            <input
              ref={password}
              type={showPass}
              id="password"
              className="form__input"
              name="password"
              onChange={handleChange}
              value={formData.password}
              placeholder="••••••••"
            />

            <span className="p-viewer" onClick={toggleShowPass}>
              <i
                className={`far ${
                  showPass === 'text' ? 'fa-eye-slash' : 'fa-eye'
                } eyepassword`}
              ></i>
            </span>
            <div className="error">
              <p>{errors['password']}</p>
            </div>
          </div>
          <div className="form__group" disabled={isLoading}>
            <label htmlFor="passwordConfirm" className="form__label">
              Password Confirm
            </label>
            <input
              ref={passwordConfirm}
              type={showPass}
              id="passwordConfirm"
              className="form__input"
              name="passwordConfirm"
              onChange={handleChange}
              value={formData.passwordConfirm}
              placeholder="••••••••"
            />

            <span className="p-viewer" onClick={toggleShowPass}>
              <i
                className={`far ${
                  showPass === 'text' ? 'fa-eye-slash' : 'fa-eye'
                } eyepassword`}
              ></i>
            </span>
            <div className="error">
              <p>{errors['passwordConfirm']}</p>
            </div>
          </div>

          <div className="center">
            <button
              className="btn btn--blue"
              type="submit"
              disabled={isLoading}
            >
              Reset
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default PasswordReset;
