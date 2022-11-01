import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Presentation , Recap } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';



const Feed = () => {
  let params = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    fetchFromAPI(`user/${params.id}/`).then((data) => setUser(data));
  }, []);

  //useEffect(() => console.log(user));

  return (
    <div id='Feed'>
        {user && <Presentation user={user}/>}
        <div className='recaps-div'>
          {user && <Recap type="Calories" user={user}/>}
          {user && <Recap type="Proteines" user={user}/>}
          {user && <Recap type="Glucides" user={user}/>}
          {user && <Recap type="Lipides" user={user}/>}
        </div>
        
  </div>
  )
}

export default Feed