import classes from './styles/Loading.module.css';

import logo from '../../images/OpenAQI_Logo.png';

function LoadingScreen() {
    return (    
        <div className={classes.loading}>
            <img src={logo} alt="OpenAQI Logo" />
            <div className={classes.spinner}></div>
            <h1>Loading...</h1>
        </div>
        );
}

export default LoadingScreen;