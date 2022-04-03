import axios from 'axios';
axios.defaults.withCredentials = true;

const logout = async () => {
  axios
    .get('http://localhost:3001/api/users/logout', { withCredentials: true })
    .then((res) => {
      if (res) {
        // window.location.reload();
      }
    })
    .catch((err) => console.log(err.message));
};

export default {
  logout,
};
