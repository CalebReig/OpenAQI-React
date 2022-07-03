import { Link } from 'react-router-dom';
import logo from '../../images/OpenAQI_Logo.png';

import classes from './styles/Footer.module.css';


function Footer() {
    return (
        <footer className={classes.footer}>
                <div className={classes.logo}>
                    <Link to='/'>
                        <img src={logo} alt="OpenAQI Logo" />
                    </Link>
                    <p>Your resource for accessing global air quality data.</p>
                </div>

                <div>
                    <h3>Services</h3>
                    <Link to='/forecasts'>
                        <p>Forecasts</p>
                    </Link>
                    <Link to='/historic-data'>
                        <p>Historic Data</p>
                    </Link>
                    <Link to='/api'>
                        <p>API</p>
                    </Link>
                </div>
                <div>
                    <h3>Contact</h3>
                    <p>support@openaqi.io</p>
                    <Link to='/about'>
                        <p>About</p>
                    </Link>
                </div>
        </footer>
    );
}

export default Footer;