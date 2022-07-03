import { createContext, useState } from "react";

const ForecastDataContext = createContext({
    aqiData: [],
    isFull: false,
    addData: (dataPoint) => {}
});


export function ForecastDataContextProvider(props) {
    const [forecastData, setForecastData] = useState([]);
    const [aqiIsFull, setAQIIsFull] = useState(false)
    
    function addDataHandler(dataPoint) {
        setAQIIsFull(true);
        setForecastData(dataPoint);
    }
    
    const context = {
        aqiData: forecastData,
        isFull: aqiIsFull,
        addData: addDataHandler
    };

    return (
    <ForecastDataContext.Provider value={context}>
        {props.children}
    </ForecastDataContext.Provider>);
}


export default ForecastDataContext;