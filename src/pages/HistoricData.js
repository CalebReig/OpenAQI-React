import { useState, useEffect, useContext } from "react";

import HistoricDataContext from "../store/historic-data-context";

import HistoricDataForm from "../components/forms/HistoricDataForm";
import LinePlot from '../components/graphs/Line';
import CategoryPolarPlot from '../components/graphs/CategoryPolar';
import ParameterPolarPlot from '../components/graphs/ParameterPolar';
import MapPlot from '../components/graphs/Map';
import LoadingScreen from '../components/ui/Loading';
import ExportData from "../components/ui/ExportData";

import classes from './styles/HistoricData.module.css';


function HistoricDataPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedData, setLoadedData] = useState([]);

    const historicDataCtx = useContext(HistoricDataContext);


    useEffect(() => {
        if (historicDataCtx.isFull) {
            setLoadedData(historicDataCtx.aqiData);
            setIsLoading(false);
        } else {
        setIsLoading(true);
        fetch(
        "/api/v1/historic-data" +
        "?token=seYtfXcOCMNcv96yehlq"
        ).then((response) => {
        return response.json();
        }).then((data) => {
        setIsLoading(false);
        setLoadedData(data);
        historicDataCtx.addData(data);
        }); 
        }
    }, [historicDataCtx]);
    if (isLoading) {
        return (<LoadingScreen />)
    }
    return (
        <div className={classes.historic}>
            <div>
                <h1>Historic Data</h1>
                <HistoricDataForm setIsLoading={setIsLoading} setLoadedData={setLoadedData} />
                <ExportData data={loadedData} />

            </div>
            <div className={classes.plotArea}>
                <div className={classes.lineplot}>
                    <h2>AQI Over Time</h2>
                    <LinePlot data={loadedData} />
                </div>
                <div>
                    <h2>AQI Measurement Locations</h2>
                    <MapPlot chartID="mapchart2" data={loadedData} />
                </div>
            </div>
            <div className={classes.bottom}>
                <div className={classes.radarplot}>
                    <h2>AQI Category Breakdown</h2>
                    <CategoryPolarPlot data={loadedData} />
                </div>
                <div className={classes.radarplot}>
                    <h2>Defining Parameter</h2>
                    <ParameterPolarPlot data={loadedData} />
                </div>
            </div>
        </div>
    );
}

export default HistoricDataPage;