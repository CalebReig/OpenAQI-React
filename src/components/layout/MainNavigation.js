import { Link } from 'react-router-dom';
import logo from '../../images/OpenAQI_Logo.png';

import classes from './styles/MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
        <div className={classes.logo}>
          <Link to='/'>
            <img src={logo} className={classes.logoImg} alt="OpenAQI Logo" />
          </Link>
        </div>
        <nav>
        <ul className={classes.weblinks}>
          <li>
            <Link to='/forecasts'>Forecasts</Link>
          </li>
          <li>
            <Link to='/historic-data'>Historic Data</Link>
          </li>
          <li>
            <Link to='/api'>API</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
