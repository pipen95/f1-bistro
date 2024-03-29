import axios from 'axios';
axios.defaults.withCredentials = true;
const API_URL = 'http://localhost:3001/api/votes';

//Check user
const getVoteData = async (userId) => {
  const res = await axios.get(`${API_URL}/${userId}`);
  if (res) {
    return res.data.data.vote;
  }
};

const postVoteData = async (vote) => {
  const res = await axios.post(`${API_URL}`, vote);
  if (res) {
    return res.data.data.newVote;
  }
};

const updateVoteData = async (vote, voteId) => {
  const res = await axios.patch(`${API_URL}/${voteId}`, vote);

  if (res) {
    return res.data.data.updatedVote;
  }
};

const voteService = {
  postVoteData,
  updateVoteData,
  getVoteData,
};

export default voteService;
