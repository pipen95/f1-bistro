import { useState, useRef } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
axios.defaults.withCredentials = true;
import { useContext } from 'react';
import Context from '../components/Context';

const Signup = () => {
  const { logIn } = useContext(Context);
  const router = useRouter();
  const password = useRef();
  const passwordConfirm = useRef();

  const [submitting, setSubmitting] = useState(false);
  const [access, setAccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPass, setShowPass] = useState('text');
  const [formData, setFormData] = useState({
    password: '',
    passwordConfirm: '',
  });
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

    setErrors(err);
    return formIsValid;
  };

  // CLOSE MODAL
  const timerid = () => {
    setFormData({
      password: '',
      passwordConfirm: '',
    });
    setErrors({});
    router.push(`/`);
    logIn();
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
    setSubmitting(true);
    if (handleValidation()) {
      postData(formData).then((value) => {
        // Promesse tenue
        if (value === true) {
          window.setTimeout(timerid, 1500);
        } else {
          setSubmitting(false);
        }
      });
    } else {
      setSubmitting(false);
    }
  };

  // POST REQUEST
  const postData = async (data) => {
    let err = {};
    let serverAccess = false;

    const payload = {
      password: data.password,
      passwordConfirm: data.passwordConfirm,
    };

    const url_string = window.location.href;
    const url = new URL(url_string);
    const token = url.searchParams.get('token');
    console.log(token);

    try {
      const res = await axios.patch(
        `http://localhost:3001/api/users/resetPassword/${token}`,
        payload,
        { withCredentials: true }
      );

      if (res) {
        setAccess(true);
        serverAccess = true;
      }
    } catch (error) {
      setAccess(false);
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
    return serverAccess;
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

          <div className="form__group" disabled={submitting}>
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
          <div className="form__group" disabled={submitting}>
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
              disabled={submitting}
            >
              Reset
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Signup;
