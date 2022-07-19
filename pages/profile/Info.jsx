const Info = ({ data }) => {
  return (
    <form className="Info form">
      <h3>Your acount settings</h3>
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
            placeholder={data ? data.firstname : null}
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
            placeholder={data ? data.lastname : null}
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
          placeholder={data ? data.email : null}
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
