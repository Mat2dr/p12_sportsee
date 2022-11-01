import React from 'react'

const Presentation = (props) => {

  return (
    <div>
         <p className="hello-text">Bonjour <span>{props.user.data.userInfos.firstName}</span></p>
        <p className="motivation-text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}

export default Presentation