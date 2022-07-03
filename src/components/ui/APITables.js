import classes from './styles/APITables.module.css';

function APITables() {
    return (
            <div className={classes.apiInfo}>
                <div className={classes.table}>
                    <h2>Get Current AQI Data</h2>
                    <table>
                        <thead>
                            <tr>
                                <td>HTTP METHOD</td>
                                <td>ENDPPOINT</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>GET</td>
                                <td>
                                    <code>
                                        http://openaqiapi-env.eba-wufxmxy7.us-east-2.elasticbeanstalk.com/api/v1/current
                                    </code>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table>
                        <thead>
                            <tr>
                                <td>PARAMETER</td>
                                <td>DESCRIPTION</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <code>token</code>
                                </td>
                                <td>
                                    Your unique API token.
                                </td>
                            </tr>
                        </tbody>
                    </table>


                </div>
                <hr />
                <div className={classes.table}>
                    <h2>Get Historic AQI Data</h2>
                    <table>
                        <thead>
                            <tr>
                                <td>HTTP METHOD</td>
                                <td>ENDPPOINT</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>GET</td>
                                <td>
                                <code>
                                    http://openaqiapi-env.eba-wufxmxy7.us-east-2.elasticbeanstalk.com/api/v1/historic-data
                                </code>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                            
                    <table>
                        <thead>
                            <tr>
                                <td>PARAMETER</td>
                                <td>DESCRIPTION</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <code>token</code>
                                </td>
                                <td>
                                    Your unique API token.
                                </td>
                            </tr>
                            <tr>
                                <td><code>start</code></td>
                                <td>The start date in the following format "YYYY-MM-DD".</td>
                            </tr>
                            <tr>
                                <td><code>end</code></td>
                                <td>The send date in the following format "YYYY-MM-DD".</td>
                            </tr>
                            <tr>
                                <td><code>bLat</code></td>
                                <td>The bottom latitude ranging from -90 to 90.</td>
                            </tr>
                            <tr>
                                <td><code>tLat</code></td>
                                <td>The top latitude ranging from -90 to 90.</td>
                            </tr>
                            <tr>
                                <td><code>lLong</code></td>
                                <td>The left longitude ranging from -180 to 180.</td>
                            </tr>
                            <tr>
                                <td><code>rLong</code></td>
                                <td>The right longitude ranging from -180 to 180.</td>
                            </tr>
                            
                        </tbody>
                    </table>

                </div>
                <hr />
                <div className={classes.table}>
                    <h2>Get AQI Forecasts</h2>
                    <table>
                        <thead>
                            <tr>
                                <td>HTTP METHOD</td>
                                <td>ENDPPOINT</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>GET</td>
                                <td>
                                <code>
                                    http://openaqiapi-env.eba-wufxmxy7.us-east-2.elasticbeanstalk.com/api/v1/forecasts
                                </code>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table>
                        <thead>
                            <tr>
                                <td>PARAMETER</td>
                                <td>DESCRIPTION</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <code>token</code>
                                </td>
                                <td>
                                    Your unique API token.
                                </td>
                            </tr>
                            <tr>
                                <td><code>bLat</code></td>
                                <td>The bottom latitude ranging from -90 to 90.</td>
                            </tr>
                            <tr>
                                <td><code>tLat</code></td>
                                <td>The top latitude ranging from -90 to 90.</td>
                            </tr>
                            <tr>
                                <td><code>lLong</code></td>
                                <td>The left longitude ranging from -180 to 180.</td>
                            </tr>
                            <tr>
                                <td><code>rLong</code></td>
                                <td>The right longitude ranging from -180 to 180.</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
    );
}

export default APITables;