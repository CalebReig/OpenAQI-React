import { useState, useEffect, useContext } from "react";

import CurrentAQIContext from '../store/current-aqi-context';
import HistoricDataContext from "../store/historic-data-context";
import ForecastDataContext from "../store/forecast-data-context";
import GlobePlot from "../components/graphs/Globe";
import ThreeColumn from '../components/ui/ThreeColumn';
import LoadingScreen from "../components/ui/Loading";

import classes from './styles/Home.module.css';
import logo from '../images/OpenAQI_Logo.png';

function HomePage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedCoords, setLoadedCoords] = useState([]);

    const currentAQICtx = useContext(CurrentAQIContext);
    const historicDataCtx = useContext(HistoricDataContext);
    const forecastDataCtx = useContext(ForecastDataContext);


    useEffect(() => {
        if (currentAQICtx.isFull) {
            setLoadedCoords(currentAQICtx.aqiData);
            setIsLoading(false);
        } else {
            setIsLoading(true);
            fetch(
                "/api/v1/current" +
                "?token=seYtfXcOCMNcv96yehlq"
                ).then((response) => {
                return response.json();
                }).then((data) => {
                setIsLoading(false);
                setLoadedCoords(data);
                currentAQICtx.addData(data);
                });  
        }
        if (!historicDataCtx.isFull) {
            fetch(
                "/api/v1/historic-data" +
                "?token=seYtfXcOCMNcv96yehlq"
                ).then((response) => {
                return response.json();
                }).then((data) => {
                historicDataCtx.addData(data);
                }); 
        }
        if (!forecastDataCtx.isFull) {
            fetch(
                "/api/v1/forecasts" +
                "?token=seYtfXcOCMNcv96yehlq"
                ).then((response) => {
                return response.json();
                }).then((data) => {
                forecastDataCtx.addData(data);
                }); 
        }
    }, [currentAQICtx, historicDataCtx, forecastDataCtx]);

    if (isLoading) {
        return (<LoadingScreen />);
    }

    return (
        <div className={classes.home}>
            <div className={classes.top}>
                <GlobePlot chartID="chartdiv1" coords={loadedCoords}/>
                <div className={classes.intro}>
                    <img src={logo} height="75px" width="300px" alt="OpenAQI Logo" />
                    <p>Your resource for accessing global air quality data.</p>
                </div>
            </div>
            <div>
                <ThreeColumn />
            </div>
        </div>
    );
}

export default HomePage;