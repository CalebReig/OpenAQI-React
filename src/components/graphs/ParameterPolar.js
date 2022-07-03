import { PolarArea } from "react-chartjs-2";
/* eslint-disable no-unused-vars */
import { Chart as ChartJS } from "chart.js/auto";
/* eslint-disable no-unused-vars */

function ParameterPolarPlot(props) {

    var aqiParameter = {'OZONE': 0, 'PM2.5': 0, 'PM10': 0,
                        'CO': 0, 'SO2': 0, 'NO2': 0};

    for (const item of props.data) {
        aqiParameter[item.Defining_Parameter]++;
    }

    const data = {
        labels: Object.keys(aqiParameter),
        datasets: [{
        label: 'AQI',
        data: Object.values(aqiParameter),
        fill: true,
        backgroundColor: ['rgba(0,255,255,0.2)', 'rgba(64,224,208,0.2)', 'rbga(100,149,237,0.2)',
                         'rgba(30,144,255,0.2)', 'rgba(0,0,255,0.2)', 'rgba(0,0,128,0.2)'],
        borderColor: ['rgb(0,255,255)', 'rgb(64,224,208)', 'rbg(100,149,237)',
                        'rgb(30,144,255)', 'rgb(0,0,255)', 'rgb(0,0,128)'],
        pointBackgroundColor: ['rgba(0,255,255,0.2)', 'rgba(64,224,208,0.2)', 'rbga(100,149,237,0.2)',
                                'rgba(30,144,255,0.2)', 'rgba(0,0,255,0.2)', 'rgba(0,0,128,0.2)'],
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: ['rgb(0,255,255)', 'rgb(64,224,208)', 'rbg(100,149,237)',
                                'rgb(30,144,255)', 'rgb(0,0,255)', 'rgb(0,0,128)']
        }]
    };


    return (<PolarArea data={data} 
        options={{
            plugins: {
            title: {
                display: true,
                text: "AQI Defining Parameter"
            },
            legend: {
                display: false
            }
            }
        }}
    />);
}


export default ParameterPolarPlot;