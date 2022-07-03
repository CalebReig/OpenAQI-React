import classes from './styles/About.module.css';
import { Link } from 'react-router-dom';

function AboutPage() {
    return (
        <div className={classes.page}>
            <h1>About</h1>
            <p>
                <a href="about">OpenAQI</a> | <a href="#data">Data</a> | <a href="#forecasts">Forecasts</a> | <a href="#api-usage">API Usage</a>
            </p>
            <hr />
            <div className={classes.box}>
                <h1 id="about">OpenAQI</h1>
                <p>OpenAQI provides air quality data and forecasts around the world. The data is updated daily 
                    and future air quality index values are forecasted up to 7 days in advance. 
                    Users may get air quality index data from OpenAQI's graphical interface or request access
                    to OpenAQI's API to recieve larger amounts of data. </p>
                <h2>AQI</h2>
                <p>
                    AQI stands for Air Quality Index and is a standarized method to record air quality.
                    The U.S. Environmental Protection Agency (EPA) developed the AQI, which reports levels of ozone,
                    particle pollution, and other common air pollutants on the same scale. An AQI reading of 101 corresponds
                    to a level that is above the national air quality standard—the higher the AQI rating, the greater the health impact.
                    The AQI is divided into color-coded categories, and each category is identified by a simple informative descriptor. 
                    The descriptors are intended to convey information to the public about how air quality within each category relates
                    to public health
                </p>
                <h2>Contact</h2>
                <p>
                    For any questions, concerns, or feedback contact OpenAQI through email at <b><em>support@openaqi.io</em></b> or <b><em>founder@openaqi.io</em></b>.
                </p>
            </div>
            <hr />
            <div className={classes.box}>
                <h1 id="data">Data</h1>
                <p>OpenAQI provides easy access to air quality data and forecasts. Data sources are being research and integrated into OpenAQI 
                    to provide you with the most accurate air quality data.
                </p>

                <h2>Source</h2>
                <p>
                    Data ingested into this application is provided by the <em>U.S. Environmental Protection Agency (EPA)</em> and <em>AirNow</em> - the EPA's' nationwide,
                 voluntary program. Data is currently ingested every 24 hours from sensors around the world. For more information on <em>AirNow</em>, 
                 visit this <a href="https://www.airnow.gov/">link</a>.
                </p> 
                <h2>Format</h2>
                <p>Data from sources mentioned above are cleaned and transformed behind the scenes producing data in the following formats:</p>
                <Link to='/historic-data'><b>Historic Data</b></Link>
                <table>
                    <thead>
                        <tr>
                            <td>Field Name</td>
                            <td>Description</td>
                            <td>Data Type</td>
                            <td>Possible Values</td>
                            <td>Is Required</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>_id</code></td>
                            <td>A unique id</td>
                            <td>JSON</td>
                            <td>Must include <code>"$oid"</code> field</td>
                            <td>True</td>
                        </tr>
                        <tr>
                            <td><code>AQI</code></td>
                            <td>The air quality index measurement</td>
                            <td>Integer</td>
                            <td>0-500</td>
                            <td>True</td>
                        </tr>
                        <tr>
                            <td><code>Category</code></td>
                            <td>The air quality index category</td>
                            <td>String</td>
                            <td>Good, Moderate, Unhealthy for Sensitive Groups, Unhealthy, Very Unhealthy, Hazardous</td>
                            <td>True</td>
                        </tr>
                        <tr>
                            <td><code>Date</code></td>
                            <td>The date of the air quality measurement</td>
                            <td>String</td>
                            <td>"YYYY-MM-DD" (1980-01-01-Present)</td>
                            <td>True</td>
                        </tr>
                        <tr>
                            <td><code>Defining_Parameter</code></td>
                            <td>The pollutant with the greatest effect on the air quality</td>
                            <td>String</td>
                            <td>PM2.5, PM10, OZONE, CO, NO2, SO2</td>
                            <td>True</td>
                        </tr>
                        <tr>
                            <td><code>Number_of_Sites_Reporting</code></td>
                            <td>The number of sites that made a measurement for the region</td>
                            <td>Integer</td>
                            <td>0-inf</td>
                            <td>False</td>
                        </tr>
                        <tr>
                            <td><code>Location</code></td>
                            <td>Meta data about the location of the measurement</td>
                            <td>JSON</td>
                            <td>Must include <code>Lat</code> and <code>Long</code> field</td>
                            <td>True</td>
                        </tr>
                    </tbody>
                </table>
                <Link to='/forecasts'><b>Forecast Data</b></Link>
                <table>
                    <thead>
                        <tr>
                            <td>Field Name</td>
                            <td>Description</td>
                            <td>Data Type</td>
                            <td>Possible Values</td>
                            <td>Is Required</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>_id</code></td>
                            <td>A unique id</td>
                            <td>JSON</td>
                            <td>Must include <code>"$oid"</code> field</td>
                            <td>True</td>
                        </tr>
                        <tr>
                            <td><code>Real_AQI</code></td>
                            <td>The actual air quality index measurement (if the date of the prediction has passed)</td>
                            <td>Integer</td>
                            <td>-1 if the date has not passed, else 0-500</td>
                            <td>True</td>
                        </tr>
                        <tr>
                            <td><code>Real_Category</code></td>
                            <td>The actual air quality index category (if the date of the prediction has passed)</td>
                            <td>String</td>
                            <td>N/A if the date has not passed, else Good, Moderate, Unhealthy for Sensitive Groups, Unhealthy, Very Unhealthy, Hazardous</td>
                            <td>True</td>
                        </tr>
                        <tr>
                            <td><code>Date</code></td>
                            <td>The date of the air quality forecast</td>
                            <td>String</td>
                            <td>"YYYY-MM-DD" (1980-01-01-Present)</td>
                            <td>True</td>
                        </tr>
                        <tr>
                            <td><code>Predictions</code></td>
                            <td>The air quality index predictions for the given date</td>
                            <td>List:JSON</td>
                            <td>Must include <code>Pred_AQI</code>, <code>Pred_Category</code>, and <code>Days_in_Advance</code> fields</td>
                            <td>True</td>
                        </tr>
                        <tr>
                            <td><code>Location</code></td>
                            <td>Meta data about the location of the measurement</td>
                            <td>JSON</td>
                            <td>Must include <code>Lat</code> and <code>Long</code> field</td>
                            <td>True</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr />
            <div className={classes.box}>
                <h1 id="forecasts">Forecasts</h1>
                <p>
                    OpenAQI's <Link to='/forecasts'>forecasts</Link> are made using an in-house deep learning algorithm. As more data is made available, the OpenAQI model
                is updated to produce the best forecasts possible. The current model uses the previous month of AQI data to base its predictions.
                 Future models will also include auxiliary data such as weather and population densities. For more information about our model, 
                 visit this <a href="https://www.kaggle.com/code/calebreigada/us-air-quality-analysis">link</a>.
                </p>
                <h2>Error</h2>
                <p>Error for forecasts are made using <em>Root Mean Squared Error (RSME)</em> scores.</p>
                <table>
                    <thead>
                        <tr>
                            <td>Days in Advance</td>
                            <td>OpenAQI Model Error</td>
                            <td>Baseline Model Error</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>15.57</td>
                            <td>24.06</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>17.39</td>
                            <td>23.96</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>17.81</td>
                            <td>23.83</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>18.0</td>
                            <td>23.71</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>18.11</td>
                            <td>23.58</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>18.13</td>
                            <td>23.48</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>18.16</td>
                            <td>23.41</td>
                        </tr>
                    </tbody>
                </table>


            </div>
            <hr />
            <div className={classes.box}>
                <h1 id="api-usage">API Usage</h1>
                <p>
                    OpenAQI provides all users the ability to access our API. Using our API will allow you to 
                    recieve data in greater detail and volume than using the graphical interface. All users wishing
                    to access the API must first create an API token <Link to='/api#get-token'>here</Link>.
                </p>
                <h2>Methods</h2>
                <p>OpenAQI's API allows users to perform the following methods:</p>
                <ul>
                    <li><b>GET Current AQI Data</b></li>
                    <li><b>GET Historic AQI Data</b></li>
                    <li><b>GET AQI Forecasts</b></li>
                </ul>
                <p>For more information about API methods, visit the <Link to='/api'>API page</Link>.</p>
                
            </div>
        </div>
    );
}

export default AboutPage;