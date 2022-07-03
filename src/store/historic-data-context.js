import { createContext, useState } from "react";

const HistoricDataContext = createContext({
    aqiData: [],
    isFull: false,
    addData: (dataPoint) => {}
});


export function HistoricDataContextProvider(props) {
    const [historicData, setHistoricData] = useState([]);
    const [aqiIsFull, setAQIIsFull] = useState(false)
    
    function addDataHandler(dataPoint) {
        setAQIIsFull(true);
        setHistoricData(dataPoint);
    }
    
    const context = {
        aqiData: historicData,
        isFull: aqiIsFull,
        addData: addDataHandler
    };

    return (
    <HistoricDataContext.Provider value={context}>
        {props.children}
    </HistoricDataContext.Provider>);
}


export default HistoricDataContext;