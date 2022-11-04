import { useState, useEffect } from 'react';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Presentation = (props) => {
  //console.log(props.userId.id);
  const [user, setUser] = useState('');

  useEffect(() => {
    fetchFromAPI(`user/${props.userId.id}/`).then((data) => setUser(data.data.userInfos.firstName));
  }, []);

  //useEffect(() => console.log(user));

  return (
    <div>
         <p className="hello-text">Bonjour <span>{ user }</span></p>
        <p className="motivation-text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}

export default Presentation