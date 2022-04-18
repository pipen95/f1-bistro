import axios from 'axios';
axios.defaults.withCredentials = true;
const API_URL = 'http://localhost:3001/api/users';

// Login user
const login = async (userData) => {
  const res = await axios.post(`${API_URL}/login`, userData, {
    withCredentials: true,
  });

  if (res.data) {
    return true;
  }
};

// Reset Password
const passwordreset = async (userData, token) => {
  const res = await axios.patch(`${API_URL}/resetPassword/${token}`, userData, {
    withCredentials: true,
  });

  if (res.data) {
    return true;
  }
};

// Signup user
const signup = async (userData) => {
  const res = await axios.post(`${API_URL}/signup`, userData, {
    withCredentials: true,
  });

  if (res.data) {
    return true;
  }
};

// Logout user
const logout = async () => {
  const res = await axios.post(`${API_URL}/logout`, {
    withCredentials: true,
  });
};

const authService = {
  passwordreset,
  login,
  signup,
  logout,
};

export default authService;
