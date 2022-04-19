import axios from 'axios';
axios.defaults.withCredentials = true;
const API_URL = 'http://localhost:3001/api/users';

//Check user

const check = async () => {
  const res = await axios.get(`${API_URL}/check`, {
    withCredentials: true,
  });
  if (res) {
    return true;
  }
};

// Login user
const login = async (userData) => {
  const res = await axios.post(`${API_URL}/login`, userData, {
    withCredentials: true,
  });

  if (res.data) {
    return true;
  }
};

// Reset Email
const emailreset = async (userData) => {
  const res = await axios.post(`${API_URL}/forgotPassword/`, userData, {
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
  emailreset,
  login,
  check,
  signup,
  logout,
};

export default authService;
