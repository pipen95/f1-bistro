import axios from 'axios';
axios.defaults.withCredentials = true;
const API_URL = 'http://localhost:3001/api/users';

//Check user

const getUserData = async () => {
  const res = await axios.get(`${API_URL}/me`);
  if (res) {
    return res.data;
  }
};
const updateUserData = async (userData, type) => {
  const url = type === 'password' ? 'updateMyPassword' : 'updateMe';

  const res = await axios.patch(`${API_URL}/${url}`, userData);

  if (res) {
    return res.data;
  }
};

const userService = {
  getUserData,
  updateUserData,
};

export default userService;
