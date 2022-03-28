import { useState, useRef } from 'react';
import axios from 'axios';
import AuthService from './../services/auth.service';

export const Login = () => {
  const email = useRef();
  const password = useRef();

  const [submitting, setSubmitting] = useState(false);
  const [access, setAccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPass, setShowPass] = useState('text');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    closeModal();
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
          window.location.reload(false);
          window.setTimeout(timerid, 1000);
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
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post(
        'http://localhost:3001/api/users/login',
        payload
      );

      if (res) {
        setAccess(true);
        AuthService.setCookie(res.data);
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
    <div className="login-form">
      {access ? (
        <>
          <h2 className="center mt-3">WELCOME BACK!</h2>
        </>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <h2 className="center mt-3">LOG INTO YOUR ACCOUNT</h2>
          <div className="error d-flex justify-content-center mb-3">
            {errors['server']}
          </div>

          <div className="form__group" disabled={submitting}>
            <label for="email" class="form__label">
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
              required
            />

            <div className="error">{errors['email']}</div>
          </div>
          <div className="form__group" disabled={submitting}>
            <label for="password" class="form__label">
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
              required
              placeholder="••••••••"
            />

            <span className="p-viewer" onClick={toggleShowPass}>
              <i
                className={`far ${
                  showPass === 'text' ? 'fa-eye-slash' : 'fa-eye'
                } eyepassword`}
              ></i>
            </span>
            <div className="error">{errors['password']}</div>
          </div>

          <div className="form__group form__group--btn-send u-margin-bottom-medium center">
            <button
              className="btn btn--blue"
              type="submit"
              disabled={submitting}
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
