import Cookies from 'universal-cookie';
import axios from 'axios';
axios.defaults.withCredentials = true;

const cookies = new Cookies();

export const logout = async () => {
  axios
    .get('http://localhost:3001/api/users/logout', { withCredentials: true })
    .then((res) => {
      if (res) {
        // window.location.reload();
      }
    })
    .catch((err) => console.log(err.message));
};

const getCurrentUser = () => {
  const user = cookies.get('jwt');
  console.log(user);
  return user;
};

export default {
  logout,
  getCurrentUser,
};
