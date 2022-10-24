import energyIcon from '../utils/energy.svg';
import chickenIcon from '../utils/chicken.svg';
import appleIcon from '../utils/apple.svg';
import cheeseburgerIcon from '../utils/cheeseburger.svg';

function Recap(props) {
    let icon = '';
    let iconAlt = '';
    let iconColor = '';

    if ( props.type === "Calories") {
        icon = energyIcon;
        iconAlt= 'icon calories';
    } else if( props.type === "Proteines" ) {
        icon = chickenIcon;
        iconAlt= 'icon proteines';
    } else if( props.type === "Glucides" ) {
        icon = appleIcon;
        iconAlt= 'icon glucides';
    } else if( props.type === "Lipides" ) {
        icon = cheeseburgerIcon;
        iconAlt= 'icon lipides';
    }

  return (
    <div id='Recap'>
        <div className={'icon-'+props.type}>
            <img src={ icon } alt={ iconAlt } />
        </div>
        <div className='Recap-desc'>
            <p className='Recap-desc-value'>{ props.value }</p>
            <p className='Recap-desc-title'>{ props.type }</p>
        </div>
    </div>
  )
}

export default Recap
