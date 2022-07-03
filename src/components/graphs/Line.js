import { Line } from "react-chartjs-2";
/* eslint-disable no-unused-vars */
import { Chart as ChartJS } from "chart.js/auto";
/* eslint-disable no-unused-vars */


function LinePlot(props) {

    var labels = [];
    var aqiValues = {};

    for (const item of props.data) {
        if (!labels.includes(item.Date)) {
            labels.push(item.Date);
        }
    }

    labels.sort();

    for (const item of props.data) {
        const key = item.Location.Lat.toString() + ',' + item.Location.Long.toString();
        if (!(key in aqiValues)) {
            aqiValues[key] = [];
        }
        if (!(labels.includes(item.Date))) {
            aqiValues[key].push(-1);
        }
        if ('AQI' in item) {
            aqiValues[key].push(item.AQI);
        } else {
            aqiValues[key].push(item.Predictions.at(-1).Pred_AQI);
        }
    }
   
    var datasets = [];

    for (var key in aqiValues) {
        var data = {
            label: key,
            data: aqiValues[key],
            lineTension: 0,
            fill: false,
            borderColor: '#0dcaf0'
        };
        if (data.data.length === labels.length) {
            datasets.push(data);
        }
        if (datasets.length === 10) {
            break;
        }
    }
    
    var allData = {
        labels: labels,
        datasets: datasets
      };


    return (
                <Line data={allData} 
                options={{
                    plugins: {
                    title: {
                        display: true,
                        text: "AQI"
                    },
                    legend: {
                        display: false
                    }
                    }
                }}
                
                />
            );
}


export default LinePlot;
