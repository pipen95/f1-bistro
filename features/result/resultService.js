import axios from 'axios';
axios.defaults.withCredentials = true;
const API_URL = 'http://localhost:3001/api/results';

//Check user
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
};

export default resultService;
