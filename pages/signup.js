import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { signup, reset } from '../auth/authSlice';
axios.defaults.withCredentials = true;

const Signup = () => {
  const router = useRouter();
  const firstname = useRef();
  const lastname = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirm = useRef();

  const [access, setAccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPass, setShowPass] = useState('text');
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
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

    //first name and last name
    if (!fields['firstname']) {
      formIsValid = false;
      err['firstname'] = 'Cannot be empty';
    }
    if (!fields['lastname']) {
      formIsValid = false;
      err['lastname'] = 'Cannot be empty';
    }

    //Password
    if (!fields['password']) {
      formIsValid = false;
      err['password'] = 'Cannot be empty';
    } else if (typeof fields['password'] !== 'undefined') {
      if (!fields['password'].match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
        formIsValid = false;
        err['password'] =
          'The password must have minimum eight characters, at least one letter, one number. Example: f1bistrot';
      }
    }
    //Password Confirm
    if (!fields['passwordConfirm']) {
      formIsValid = false;
      err['passwordConfirm'] = 'Cannot be empty';
    } else if (typeof fields['passwordConfirm'] !== 'undefined') {
      if (
        !fields['passwordConfirm'].match(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        )
      ) {
        formIsValid = false;
        err['passwordConfirm'] =
          'The password must have minimum eight characters, at least one letter, one number. Example: f1bistrot';
      }
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
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      passwordConfirm: '',
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
      firstname: data.firstname.trim(),
      lastname: data.lastname.trim(),
      email: data.email.trim(),
      password: data.password,
      passwordConfirm: data.passwordConfirm,
    };
    try {
      dispatch(signup(payload));
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
  };

  // JSX FORM
  return (
    <div className="login-form center">
      {access ? (
        <>
          <h2 className="m-0 center">Bienvenue to F1 Bistrot!</h2>
        </>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <h2 className="text-center">Create your account</h2>

          <div className="flex">
            <div
              className="form__group"
              disabled={isLoading}
              style={{ marginRight: '2rem' }}
            >
              <label htmlFor="firstname" className="form__label">
                First name
              </label>
              <input
                ref={firstname}
                type="text"
                id="firstname"
                className="form__input"
                name="firstname"
                onChange={handleChange}
                value={formData.firstname}
                placeholder="Alain"
              />

              <div className="error">
                <p>{errors['firstname']}</p>
              </div>
            </div>
            <div className="form__group" disabled={isLoading}>
              <label htmlFor="lastname" className="form__label">
                Last name
              </label>
              <input
                ref={lastname}
                type="text"
                id="lastname"
                className="form__input"
                name="lastname"
                onChange={handleChange}
                value={formData.lastname}
                placeholder="Prost"
              />

              <div className="error">
                <p>{errors['lastname']}</p>
              </div>
            </div>
          </div>
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
              Signup
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Signup;
