import { createContext, useState } from "react";

const CurrentAQIContext = createContext({
    aqiData: [],
    isFull: false,
    addData: (dataPoint) => {}
});


export function CurrentAQIContextProvider(props) {
    const [currentAQIData, setCurrentAQIData] = useState([]);
    const [aqiIsFull, setAQIISFull] = useState(false)
    
    function addDataHandler(dataPoint) {
        setAQIISFull(true);
        setCurrentAQIData(dataPoint);
    }
    
    const context = {
        aqiData: currentAQIData,
        isFull: aqiIsFull,
        addData: addDataHandler
    };

    return (
    <CurrentAQIContext.Provider value={context}>
        {props.children}
    </CurrentAQIContext.Provider>);
}


export default CurrentAQIContext;