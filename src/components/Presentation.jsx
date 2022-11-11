import { useState, useEffect } from 'react';
import { getUserInfos } from '../utils/fetchFromAPI';

const Presentation = (props) => {
  const [user, setUser] = useState({
    firstName:'',
  });
  const userId = props.userId.id;

  useEffect(() => {
    async function getUserInfosOnLoad(id) {
      const userData = await getUserInfos(id);
      setUser({
        firstName: userData.data.userInfos.firstName,
      });
    }

    getUserInfosOnLoad(userId)
  }, []);

  return (
    <div>
         <p className="hello-text">Bonjour <span>{ user.firstName }</span></p>
        <p className="motivation-text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}

export default Presentation