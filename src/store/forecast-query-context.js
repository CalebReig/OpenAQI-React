import { createContext, useState } from "react";

const ForecastQueryContext = createContext({
    bottomLat: 38,
    topLat: 40,
    leftLong: -80,
    rightLong: -70,
    addData: (dataPoint) => {}
});

export function ForecastQueryContextProvider(props) {
    const [bottomLat, setBottomLat] = useState([38]);
    const [topLat, setTopLat] = useState([40]);
    const [leftLong, setLeftLong] = useState([-80]);
    const [rightLong, setRightLong] = useState([-70]);
    
    function addDataHandler(dataPoint) {
        setBottomLat(dataPoint.bottomLat);
        setTopLat(dataPoint.topLat);
        setLeftLong(dataPoint.leftLong);
        setRightLong(dataPoint.rightLong);
    }
    
    const context = {
        bottomLat: bottomLat,
        topLat: topLat,
        leftLong: leftLong,
        rightLong: rightLong,
        addData: addDataHandler
    };

    return (
    <ForecastQueryContext.Provider value={context}>
        {props.children}
    </ForecastQueryContext.Provider>);
}



export default ForecastQueryContext;