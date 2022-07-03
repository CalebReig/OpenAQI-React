import React, { useLayoutEffect } from "react";

import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

import classes from './styles/Map.module.css';

function MapPlot(props) {


    useLayoutEffect(() => {
        // Create root
        var root = am5.Root.new(props.chartID); 

        // Set themes
        root.setThemes([
        am5themes_Animated.new(root)
        ]);

        // Create chart
        var chart = root.container.children.push(
        am5map.MapChart.new(root, {
            panX: "rotateX",
            panY: "rotateY",
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
        })
        );

        // Create polygon series
        chart.series.push(
                am5map.MapPolygonSeries.new(root, {
                    geoJSON: am5geodata_worldLow,
                    exclude: ["AQ"]
                })
        );


        var graticuleSeries = chart.series.insertIndex(
            1, am5map.GraticuleSeries.new(root, {})
          );
          
          graticuleSeries.mapLines.template.setAll({
            stroke: am5.color(0x000000),
            strokeOpacity: 0.2
          });
       
        // GeoJSON data
        var pointSeries = makePointSeries();

        for (const point of props.data) {
            pointSeries.pushDataItem({
                latitude: point.Location.Lat,
                longitude: point.Location.Long
            });
        }

        // Create point series
        function makePointSeries() {
            var pointSeries = chart.series.push(
            am5map.MapPointSeries.new(root, {}));

            pointSeries.bullets.push(function() {
            return am5.Bullet.new(root, {
                sprite: am5.Circle.new(root, {
                radius: 10,
                fill: am5.color("rgb(200,200,200)"),
                opacity: 0.1
                })
            });
            });
            return pointSeries;
        }

        return () => root.dispose();

    }, [props.chartID, props.data]);

    return (
        <div id={props.chartID} className={classes.map}></div>
    );
}

export default MapPlot;