import { useState, useEffect } from 'react';
import { getUserInfos } from '../utils/fetchFromAPI';
import energyIcon from '../utils/energy.svg';
import chickenIcon from '../utils/chicken.svg';
import appleIcon from '../utils/apple.svg';
import cheeseburgerIcon from '../utils/cheeseburger.svg';

function Recap(props) {
    const userId = props.userId.id;
    
    const [calorieCount, setCalorieCount] = useState('');
    const [proteinCount, setProteinCount] = useState('');
    const [carbohydrateCount, setCarbohydrateCount] = useState('');
    const [lipidCount, setLipidCount] = useState('');
    let countValue = '';
    let icon = '';
    let iconAlt = '';
    let valueLabel = '';
    
      useEffect(() => {
        async function getUserInfosOnLoad(id) {
          const userData = await getUserInfos(id);
          setCalorieCount(userData.data.keyData.calorieCount);
          setProteinCount(userData.data.keyData.proteinCount);
          setCarbohydrateCount(userData.data.keyData.carbohydrateCount);
          setLipidCount(userData.data.keyData.lipidCount);
        }
    
        getUserInfosOnLoad(userId)
      }, []);

    if ( props.type === "Calories") {
        countValue = calorieCount;
        icon = energyIcon;
        iconAlt= 'icon calories';
        valueLabel = calorieCount + 'KCal'
    } else if( props.type === "Proteines" ) {
        countValue = proteinCount;
        icon = chickenIcon;
        iconAlt= 'icon proteines';
        valueLabel = proteinCount + 'g'
    } else if( props.type === "Glucides" ) {
        countValue = carbohydrateCount;
        icon = appleIcon;
        iconAlt= 'icon glucides';
        valueLabel = carbohydrateCount + 'g'
    } else if( props.type === "Lipides" ) {
        countValue = lipidCount;
        icon = cheeseburgerIcon;
        iconAlt= 'icon lipides';
        valueLabel = lipidCount + 'g'
    }

  return (
    <div id='Recap'>
        <div className={'icon-'+props.type}>
            <img src={ icon } alt={ iconAlt } />
        </div>
        <div className='Recap-desc'>
            <p className='Recap-desc-value'>{ valueLabel }</p>
            <p className='Recap-desc-title'>{ props.type }</p>
        </div>
    </div>
  )
}

export default Recap
