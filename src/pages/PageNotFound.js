import { useState, useEffect, useContext } from "react";
import CurrentAQIContext from '../store/current-aqi-context';
import GlobePlot from "../components/graphs/Globe";
import LoadingScreen from "../components/ui/Loading";

import classes from './styles/PageNotFound.module.css';

function PageNotFoundPage() {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedCoords, setLoadedCoords] = useState([]);

    const currentAQICtx = useContext(CurrentAQIContext);

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
                });}
            },  [currentAQICtx])

    if (isLoading) {
        return (
            <div>
                <h1>Page Not Found</h1>
                <LoadingScreen />
            </div>
        );
    }
    return (
        <div className={classes.pnf}>
            <h1>Page Not Found</h1>
            <div className={classes.globe}>
                <GlobePlot chartID="chartdiv2" coords={loadedCoords}/>
            </div>
        </div>
    );
}

export default PageNotFoundPage;