import axios from 'axios';
axios.defaults.withCredentials = true;
const API_URL = 'http://localhost:3001/api/votes';

//Check user

const postVoteData = async (voteData) => {
  const res = await axios.post(`${API_URL}`, voteData);
  if (res) {
    return voteData;
  }
};

const voteService = {
  postVoteData,
};

export default voteService;
