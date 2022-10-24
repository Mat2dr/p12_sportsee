import { Recap } from './';

const Feed = () => {
  return (
    <div id='Feed'>
        <p className="hello-text">Bonjour <span>Name</span></p>
        <p className="motivation-text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        <div className='recaps-div'>
          <Recap type="Calories" value="1,930"/>
          <Recap type="Proteines" value="155"/>
          <Recap type="Glucides" value="290"/>
          <Recap type="Lipides" value="50"/>
        </div>
        
  </div>
  )
}

export default Feed