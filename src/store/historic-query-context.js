import { createContext, useState } from "react";

const HistoricQueryContext = createContext({
    start: "2021-06-30",
    end: "2021-12-31",
    bottomLat: 38,
    topLat: 40,
    leftLong: -80,
    rightLong: -70,
    addData: (dataPoint) => {}
});

export function HistoricQueryContextProvider(props) {
    const [start, setStart] = useState(["2021-06-30"]);
    const [end, setEnd] = useState(["2021-12-31"]);
    const [bottomLat, setBottomLat] = useState([38]);
    const [topLat, setTopLat] = useState([40]);
    const [leftLong, setLeftLong] = useState([-80]);
    const [rightLong, setRightLong] = useState([-70]);
    
    function addDataHandler(dataPoint) {
        setStart(dataPoint.start);
        setEnd(dataPoint.end);
        setBottomLat(dataPoint.bottomLat);
        setTopLat(dataPoint.topLat);
        setLeftLong(dataPoint.leftLong);
        setRightLong(dataPoint.rightLong);
    }
    
    const context = {
        start: start,
        end: end,
        bottomLat: bottomLat,
        topLat: topLat,
        leftLong: leftLong,
        rightLong: rightLong,
        addData: addDataHandler
    };

    return (
    <HistoricQueryContext.Provider value={context}>
        {props.children}
    </HistoricQueryContext.Provider>);
}



export default HistoricQueryContext;