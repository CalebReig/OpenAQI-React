import { PolarArea } from "react-chartjs-2";
/* eslint-disable no-unused-vars */
import { Chart as ChartJS } from "chart.js/auto";
/* eslint-disable no-unused-vars */

function CategoryPolarPlot(props) {

    var aqiCategory = {Good: 0, Moderate: 0, Unhealthy_for_Sensitive_Groups: 0,
                        Unhealthy: 0, Very_Unhealthy: 0, Hazardous: 0};

    for (const item of props.data) {
        let category;
        if ('Category' in item) {
            category = item.Category;
        } else {
            category = item.Predictions.at(-1).Pred_Category;
        }
        if (category === "Good") {
            aqiCategory.Good++;
        } else if (category === "Moderate") {
            aqiCategory.Moderate++;
        } else if (category === "Unhealthy for Sensitive Groups") {
            aqiCategory.Unhealthy_for_Sensitive_Groups++;
        } else if (category === "Unhealthy") {
            aqiCategory.Unhealthy++;
        } else if (category === "Very Unhealthy") {
            aqiCategory.Very_Unhealthy++;
        } else {
            aqiCategory.Hazardous++;
        }
    }

    const data = {
        labels: Object.keys(aqiCategory),
        datasets: [{
        label: 'AQI',
        data: Object.values(aqiCategory),
        fill: true,
        backgroundColor: ["rgba(0,228,0,0.2)", "rgba(255,255,0,0.2)", "rgba(255,126,0,0.2)",
        "rgba(255,0,0,0.2)", "rgba(143,63,151,0.2)", "rgba(126,0,35,0.2)"],
        borderColor: ["rgb(0,228,0)", "rgb(255,255,0)", "rgb(255,126,0)",
        "rgb(255,0,0)", "rgb(143,63,151)", "rgb(126,0,35)"],
        pointBackgroundColor: ["rgb(0,228,0,0.2)", "rgb(255,255,0,0.2)", "rgb(255,126,0,0.2)",
        "rgb(255,0,0,0.2)", "rgb(143,63,151,0.2)", "rgb(126,0,35,0.2)"],
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: ["rgb(0,228,0)", "rgb(255,255,0)", "rgb(255,126,0)",
        "rgb(255,0,0)", "rgb(143,63,151)", "rgb(126,0,35)"]
        }]
    };


    return (
        <PolarArea data={data} options={{
            plugins: {
            title: {
                display: true,
                text: "AQI Category"
            },
            legend: {
                display: false
            }
            }
        }}
        />
      );
}


export default CategoryPolarPlot;