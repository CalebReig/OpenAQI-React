import React, { useLayoutEffect } from "react";

import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

import classes from './styles/Globe.module.css';

function GlobePlot(props) {
    const chartID = props.chartID;
    const coords = props.coords;
  
    useLayoutEffect(() => {
      //var root = am5.Root.new("chartdiv1");
      var root = am5.Root.new(chartID);

      root.setThemes([am5themes_Animated.new(root)]);
    
      // Create the map chart
      // https://www.amcharts.com/docs/v5/charts/map-chart/
      var chart = root.container.children.push(am5map.MapChart.new(root, {
        panX: "none",
        panY: "none",
        wheelY: "none",
        rotationX: 95,
        rotationY: -25,
        minZoomLevel: 0.5,
        maxZoomLevel: 5,
        maxPanOut: -1,
        projection: am5map.geoOrthographic(),
        homeGeoPoint: { latitude: 0, longitude: 0},
        homeZoomLevel: 0.5,
        fillOpacity: 0.1
    
      }));
    
    
    
      // Create series for background fill
      // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/#Background_polygon
      var backgroundSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {}));
      backgroundSeries.mapPolygons.template.setAll({
        fill: root.interfaceColors.get("alternativeBackground"),
        fillOpacity: 0.2,
        strokeOpacity: 0
      });
    
      // Add background polygon
      // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/#Background_polygon
    
      backgroundSeries.data.push({
        geometry: am5map.getGeoRectangle(90, 180, -90, -180)
      });
      
      // Create main polygon series for countries
      // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
      chart.series.push(am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow
      }));
      
      // Create point series for markers
      // https://www.amcharts.com/docs/v5/charts/map-chart/map-point-series/

      const colors = ["rgb(0,228,0)", "rgb(255,255,0)", "rgb(255,126,0)",
                     "rgb(255,0,0)", "rgb(143,63,151)", "rgb(126,0,35)"];
      var pointSeries = [];

      for (const color of colors) {
        var ps = makePointSeries(color);
        pointSeries.push(ps);
      }
      
      const num_points = Math.min(coords.length, 5000)

      for (const item of coords.slice(0, num_points)) {
        addMeasurement({ latitude: item.Location.Lat, longitude: item.Location.Long, value: item.Category});
      }

      function makePointSeries(color) {
        var pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));
  
        pointSeries.bullets.push(function() {
          var circle = am5.Circle.new(root, {
            radius: 10,
            cursorOverStyle: "pointer",
            tooltipY: 0,
            fill: am5.color(color),
            opacity: 0.5,
          });
          return am5.Bullet.new(root, {
            sprite: circle
          });
        });
        return pointSeries;
      }

      function addMeasurement(item) {
        if (item.value === "Good") {
          return pointSeries[0].pushDataItem({
            latitude: item.latitude,
            longitude: item.longitude
          });
  
        } else if (item.value === "Moderate") {
          return pointSeries[1].pushDataItem({
            latitude: item.latitude,
            longitude: item.longitude
          });
        } else if (item.value === "Unhealthy for Sensitive Groups") {
          return pointSeries[2].pushDataItem({
            latitude: item.latitude,
            longitude: item.longitude
          });
        } else if (item.value === "Unhealthy") {
          return pointSeries[3].pushDataItem({
            latitude: item.latitude,
            longitude: item.longitude
          });
        } else if (item.value === "Very Unhealthy") {
          return pointSeries[4].pushDataItem({
            latitude: item.latitude,
            longitude: item.longitude
          });
        } else {
          return pointSeries[5].pushDataItem({
            latitude: item.latitude,
            longitude: item.longitude
        });
        }
      }

      chart.animate({
        key: "rotationX",
        from: 0,
        to: 360,
        duration: 30000,
        loops: Infinity
      });
      
      // Make stuff animate on load
      chart.appear(1000, 100);

      return () => root.dispose();
      }, [chartID, coords]);

    return (
        <div id={chartID} className={classes.globe}>    
        </div>
    );
}

export default GlobePlot;