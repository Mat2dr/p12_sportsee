import { Link } from 'react-router-dom';

import logo from '../utils/logo.png';

const HorizontalNavBar = () => {
  return (
    <div id='NavBar'>
      <ul>
        <li><Link to='/'><img className='logo' src={logo} alt="logo SportSee" /></Link></li>
        <li><Link to='/'>Accueil</Link></li>
        <li><Link to='/'>Profil</Link></li>
        <li><Link to='/'>Réglage</Link></li>
        <li><Link to='/'>Communauté</Link></li>
      </ul>
  </div>
  )
}

export default HorizontalNavBar