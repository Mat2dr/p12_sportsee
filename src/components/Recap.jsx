import { useState, useEffect } from 'react';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import energyIcon from '../utils/energy.svg';
import chickenIcon from '../utils/chicken.svg';
import appleIcon from '../utils/apple.svg';
import cheeseburgerIcon from '../utils/cheeseburger.svg';

function Recap(props) {
    const [calorieCount, setCalorieCount] = useState('');
    const [proteinCount, setProteinCount] = useState('');
    const [carbohydrateCount, setCarbohydrateCount] = useState('');
    const [lipidCount, setLipidCount] = useState('');
    let countValue = '';
    let icon = '';
    let iconAlt = '';
    let iconColor = '';
  
    useEffect(() => {
        fetchFromAPI(`user/${props.userId.id}/`)
        .then((data) => {
            setCalorieCount(data.data.keyData.calorieCount);
            setProteinCount(data.data.keyData.proteinCount);
            setCarbohydrateCount(data.data.keyData.carbohydrateCount);
            setLipidCount(data.data.keyData.lipidCount);
        });
      }, []);

    if ( props.type === "Calories") {
        countValue = calorieCount;
        icon = energyIcon;
        iconAlt= 'icon calories';
    } else if( props.type === "Proteines" ) {
        countValue = proteinCount;
        icon = chickenIcon;
        iconAlt= 'icon proteines';
    } else if( props.type === "Glucides" ) {
        countValue = carbohydrateCount;
        icon = appleIcon;
        iconAlt= 'icon glucides';
    } else if( props.type === "Lipides" ) {
        countValue = lipidCount;
        icon = cheeseburgerIcon;
        iconAlt= 'icon lipides';
    }

  return (
    <div id='Recap'>
        <div className={'icon-'+props.type}>
            <img src={ icon } alt={ iconAlt } />
        </div>
        <div className='Recap-desc'>
            <p className='Recap-desc-value'>{ countValue }</p>
            <p className='Recap-desc-title'>{ props.type }</p>
        </div>
    </div>
  )
}

export default Recap
