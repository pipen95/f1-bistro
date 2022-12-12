import axios from 'axios';
axios.defaults.withCredentials = true;
const API_URL = 'http://localhost:3001/api/results';

//Check if result exists
const checkResultData = async (year, race) => {
  const res = await axios.get(`${API_URL}/${year}-${race}`);

  if (res) {
    return res.data.data;
  }
};

const postResultData = async (result) => {
  const res = await axios.post(`${API_URL}`, result);
  if (res) {
    return res.data.data.newResult;
  }
};

const updateResultData = async (result, year, race) => {
  const res = await axios.patch(`${API_URL}/${year}-${race}`, result);

  if (res) {
    return res.data.data.updatedResult;
  }
};

const resultService = {
  postResultData,
  updateResultData,
  checkResultData,
};

export default resultService;
