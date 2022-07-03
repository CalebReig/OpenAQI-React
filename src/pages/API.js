import NewUserForm from '../components/forms/NewUserForm';
import APITables from '../components/ui/APITables';

import classes from './styles/API.module.css';

function APIPage() {

    return (
        <div className={classes.api}>
            <h1>OpenAQI API</h1>
            <div className={classes.about}>
                <p>
                    The OpenAQI API allows you to query large amounts of air quality data and forecasts all around the world. 
                    The API currently has 3 services: current AQI data, historic AQI data, and AQI forecasts. 
                    Each request sent to the API requires users to provide a unique token 
                    (<a href="#get-token">see below</a> to recieve your token).
                    Tokens are used to track amount of users and requests sent to the API. Each parameter sent to the api must
                    be prefaced with a '?' for the first parameter and a '&#38;' for all following parameters. 
                </p>
                <p>
                    Required parameters are in the tables below.
                </p>
            </div>
            <hr />
            <APITables />
            <hr />
            <div className={classes.newUser} id="get-token">
                <h2>Get Your API Token</h2>
                <NewUserForm />
            </div>
        </div>
    );
}

export default APIPage;