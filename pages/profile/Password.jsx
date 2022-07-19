const Password = ({ data }) => {
  return (
    <form className="Password form">
      <h3>Password change</h3>
      <div className="form__group">
        <label htmlFor="currentPassword" className="form__label">
          Current password
        </label>
        <input
          type="password"
          id="currentPassword"
          className="form__input"
          name="currentPassword"
          placeholder="••••••••••"
        />
      </div>
      <div className="form__group">
        <label htmlFor="newPassword" className="form__label">
          New Password
        </label>
        <input
          type="password"
          id="newPassword"
          className="form__input"
          name="newPassword"
          placeholder="••••••••••"
        />
      </div>
      <div className="form__group">
        <label htmlFor="passwordConfirm" className="form__label">
          Password Confirm
        </label>
        <input
          type="password"
          id="passwordConfirm"
          className="form__input"
          name="passwordConfirm"
          placeholder="•••••••••"
        />
      </div>

      <div className="right">
        <button className="btn btn--blue" type="submit">
          Save password
        </button>
      </div>
    </form>
  );
};

export default Password;
