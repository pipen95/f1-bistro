import { useEffect, useState } from 'react';
import axios from 'axios';
import Info from './Info';
import Password from './Password';
import Menu from './Menu';

axios.defaults.withCredentials = true;
const API_URL = 'http://localhost:3001/api/users';

const Profile = () => {
  const [userData, setUserData] = useState(null);

  let data = '';
  if (userData && userData !== null) {
    data = userData.data.doc;
  }

  useEffect(() => {
    // Get user profile
    const getCurrentUser = async () => {
      const { data } = await axios.get(`${API_URL}/me`);

      if (data) {
        setUserData(data);
      }
    };
    getCurrentUser();
  }, []);

  return (
    <div className="Profile">
      <Menu />
      <Info data={data} />
      <Password data={data} />
    </div>
  );
};
export default Profile;
