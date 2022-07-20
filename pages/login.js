import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { login, reset } from 'features/auth/authSlice';
import { getUser } from 'features/user/userSlice';
import { toast } from 'react-toastify';

const Login = () => {
  const router = useRouter();
  const email = useRef();
  const password = useRef();

  const [access, setAccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPass, setShowPass] = useState('text');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // REDUX SETUP
  const dispatch = useDispatch();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );
  const { userData } = useSelector((state) => state.user);

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
      email: '',
      password: '',
    });
    setErrors({});
    router.push(`/home`);
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

    try {
      dispatch(login(payload));
    } catch (error) {
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
          <h2 className="m-0 center">WELCOME BACK!</h2>
        </>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <h2 className="text-center">LOG INTO YOUR ACCOUNT</h2>

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
            <p>
              <Link href="/forgotpassword">
                <a className="font-small color-dark">Forgot password?</a>
              </Link>
            </p>
          </div>

          <div className="center">
            <button
              className="btn btn--blue"
              type="submit"
              disabled={isLoading}
            >
              Login
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
