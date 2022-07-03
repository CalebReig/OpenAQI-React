import { Link } from 'react-router-dom';
import forecastsImg from '../../images/forecasts.png';
import historicDataImg from '../../images/historic-data.png';
import apiImg from '../../images/api.png';

import classes from './styles/ThreeColumn.module.css';

function ThreeColumn() {
    return (
        <div className={classes.container}>
            <Link to='/forecasts'>
                <div className={classes.column}>
                    <h2>Forecasts</h2>
                    <img src={forecastsImg} alt="OpenAQI Forecasts" />
                    <p>
                        Get real time forecasts of future air quality values.
                    </p>
                </div>
            </Link>
            <Link to='/historic-data'>
                <div className={classes.column}>
                    <h2>Historic Data</h2>
                    <img src={historicDataImg} alt="OpenAQI Historic Records" />
                    <p>
                        Get historical air quality data.
                    </p>
                </div>
            </Link>
            <Link to='/api'>
                <div className={classes.column}>
                    <h2>API</h2>
                    <img src={apiImg} alt="OpenAQI API Access" />
                    <p>
                        Get access to OpenAQI's API.
                    </p>
                </div>
            </Link>
        </div>

    );
}

export default ThreeColumn;