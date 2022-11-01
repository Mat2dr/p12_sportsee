import energyIcon from '../utils/energy.svg';
import chickenIcon from '../utils/chicken.svg';
import appleIcon from '../utils/apple.svg';
import cheeseburgerIcon from '../utils/cheeseburger.svg';

function Recap(props) {
    let icon = '';
    let iconAlt = '';
    let iconColor = '';
    let userValue = '';

    if ( props.type === "Calories") {
        userValue = props.user.data.keyData.calorieCount;
        icon = energyIcon;
        iconAlt= 'icon calories';
    } else if( props.type === "Proteines" ) {
        userValue = props.user.data.keyData.proteinCount;
        icon = chickenIcon;
        iconAlt= 'icon proteines';
    } else if( props.type === "Glucides" ) {
        userValue = props.user.data.keyData.carbohydrateCount;
        icon = appleIcon;
        iconAlt= 'icon glucides';
    } else if( props.type === "Lipides" ) {
        userValue = props.user.data.keyData.lipidCount;
        icon = cheeseburgerIcon;
        iconAlt= 'icon lipides';
    }

  return (
    <div id='Recap'>
        <div className={'icon-'+props.type}>
            <img src={ icon } alt={ iconAlt } />
        </div>
        <div className='Recap-desc'>
            <p className='Recap-desc-value'>{ userValue }</p>
            <p className='Recap-desc-title'>{ props.type }</p>
        </div>
    </div>
  )
}

export default Recap
