import { useState, useEffect, useContext } from "react";

import ForecastDataContext from "../store/forecast-data-context";

import ForecastDataForm from "../components/forms/ForecastDataForm";
import LinePlot from '../components/graphs/Line';
import CategoryPolarPlot from '../components/graphs/CategoryPolar';
import MapPlot from '../components/graphs/Map';
import LoadingScreen from '../components/ui/Loading';
import ExportData from "../components/ui/ExportData";

import classes from './styles/Forecasts.module.css';

function ForecastsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedData, setLoadedData] = useState([]);

    const forecastDataCtx = useContext(ForecastDataContext);


    useEffect(() => {
        if (forecastDataCtx.isFull) {
            setLoadedData(forecastDataCtx.aqiData);
            setIsLoading(false);
        } else {
        setIsLoading(true);
        fetch(
        "/api/v1/forecasts" +
        "?token=seYtfXcOCMNcv96yehlq"
        ).then((response) => {
        return response.json();
        }).then((data) => {
        setIsLoading(false);
        setLoadedData(data);
        forecastDataCtx.addData(data);
        }); 
        }
    }, [forecastDataCtx]);
    
    if (isLoading) {
        return (<LoadingScreen />)
    }
    return (
        <div className={classes.forecasts}>
            <div>
                <h1>Forecasts</h1>
                <ForecastDataForm setIsLoading={setIsLoading} setLoadedData={setLoadedData} />
                <ExportData data={loadedData} />
            </div>
            <div className={classes.plotArea}>
                <div className={classes.lineplot}>
                    <h2>Forecasted AQI</h2>
                   <LinePlot data={loadedData} />
                </div>
                <div className={classes.map}>
                    <h2>AQI Forecast Locations</h2>
                    <MapPlot chartID="mapchart1" data={loadedData} />
                </div>
            </div>
            <div className={classes.bottom}>
                <div className={classes.radarplot}>
                    <h2>Category Breakdown</h2>
                    <CategoryPolarPlot data={loadedData} />
                </div>
            </div>
        </div>
    );
}

export default ForecastsPage;