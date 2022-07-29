import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef, useEffect } from 'react';
import { updateUserData } from 'features/user/userSlice';
import { toast } from 'react-toastify';

const Info = () => {
  const { userData } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  //ON CHANGE
  const handleChange = (event) => {
    return setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      postData(formData);
    }
  };

  return (
    <form className="Info form">
      <h3>Your acount settings</h3>
      <div className="form__group form__photo-upload">
        <img
          className="form__user-photo"
          src={
            userData
              ? `http://localhost:3001/public/img/users/${userData.photo}`
              : 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
          }
          alt="User photo"
        />
        <input
          id="photo"
          className="form__upload"
          type="file"
          accept="image/*"
          files={formData.photo}
          placeholder="Choose photo"
          name="photo"
        />
        <label htmlFor="photo" className="form__label">
          Choose new photo
        </label>
      </div>
      <div className="flex">
        <div className="form__group" style={{ marginRight: '2rem' }}>
          <label htmlFor="firstname" className="form__label">
            First name
          </label>
          <input
            type="text"
            id="firstname"
            className="form__input"
            name="firstname"
            onChange={handleChange}
            value={formData.firstname}
            placeholder={userData ? userData.firstname : null}
          />
        </div>
        <div className="form__group">
          <label htmlFor="lastname" className="form__label">
            Last name
          </label>
          <input
            type="text"
            id="lastname"
            className="form__input"
            name="lastname"
            onChange={handleChange}
            value={formData.lastname}
            placeholder={userData ? userData.lastname : null}
          />
        </div>
      </div>
      <div className="form__group">
        <label htmlFor="name" className="form__label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="form__input"
          name="email"
          onChange={handleChange}
          value={formData.email}
          placeholder={userData ? userData.email : null}
        />
      </div>
      <div className="right">
        <button className="btn btn--blue" type="submit">
          Save settings
        </button>
      </div>
    </form>
  );
};

export default Info;
