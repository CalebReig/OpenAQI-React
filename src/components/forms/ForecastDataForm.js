import { useContext } from 'react';
import { useForm } from "react-hook-form";
import ForecastDataContext from "../../store/forecast-data-context";
import ForecastQueryContext from "../../store/forecast-query-context";

import classes from './styles/ForecastDataForm.module.css';

function ForecastDataForm(props) {

  const forecastDataCtx = useContext(ForecastDataContext);
  const forecastQueryCtx = useContext(ForecastQueryContext);

  const { register, handleSubmit, getValues } = useForm({
    defaultValues: {
        bottomLat: forecastQueryCtx.bottomLat,
        topLat: forecastQueryCtx.topLat,
        rightLong: forecastQueryCtx.rightLong,
        leftLong: forecastQueryCtx.leftLong
    },
    shouldUseNativeValidation: true
    });

  const onSubmit = (inputData) => {

    const url = "/api/v1/forecasts?" + 
                "token=seYtfXcOCMNcv96yehlq" +
                "&bLat=" + inputData.bottomLat +
                "&tLat=" + inputData.topLat +
                "&rLong=" + inputData.rightLong +
                "&lLong=" + inputData.leftLong +
                "&limit=true";
   
    props.setIsLoading(true);
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        props.setIsLoading(false);
        props.setLoadedData(data);
        forecastDataCtx.addData(data);
        forecastQueryCtx.addData(
            {
                bottomLat: inputData.bottomLat,
                topLat: inputData.topLat,
                leftLong: inputData.leftLong,
                rightLong: inputData.rightLong
            });
    });
  }


  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.box}>
            <div>
                <div className={classes.control}>
                    <label htmlFor="topLatForecast">Latitude (Top)</label>
                    <input 
                        type="number" 
                        id="topLatForecast"
                        {...register('topLat', {
                            valueAsNumber: true,
                            required: {
                                value: true,
                                message: "This is a required field"
                            },
                            min: {
                                value: -90,
                                message: "The minimum value for this field is -90"
                            },
                            max: {
                                value: 90,
                                message: "The maximum value for this field is 90"
                            },
                            validate: (value) => value > getValues('bottomLat') || "Top latitude must be greater than top latitude"
                        })}
                    />
                </div>
                <div className={classes.longitude}>
                    <div className={classes.control}>
                        <label htmlFor="leftLongForecast">Longitude (Left)</label>
                        <input 
                            type="number" 
                            id="leftLongForecast"
                            {...register('leftLong', {
                                valueAsNumber: true,
                                required: {
                                    value: true,
                                    message: "This is a required field"
                                },
                                min: {
                                    value: -180,
                                    message: "The minimum value for this field is -180"
                                },
                                max: {
                                    value: 180,
                                    message: "The maximum value for this field is 180"
                                },
                                validate: (value) => value < getValues('rightLong') || "Left longitude must be less than right longitude"
                            })}
                        />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="rightLongForecast">Longitude (Right)</label>
                        <input 
                            type="number" 
                            id="rightLongForecast"
                            {...register('rightLong', {
                                valueAsNumber: true,
                                required: {
                                    value: true,
                                    message: "This is a required field"
                                },
                                min: {
                                    value: -180,
                                    message: "The minimum value for this field is -180"
                                },
                                max: {
                                    value: 180,
                                    message: "The maximum value for this field is 180"
                                },
                                validate: (value) => value > getValues('leftLong') || "Right longitude must be greater than left longitude"
                            })} 
                        />
                    </div>
                </div>
                <div className={classes.control}>
                    <label htmlFor="bottomLatForecast">Latitude (Bottom)</label>
                    <input 
                        type="number" 
                        id="bottomLatForecast"
                        {...register('bottomLat', {
                            valueAsNumber: true,
                            required: {
                                value: true,
                                message: "This is a required field"
                            },
                            min: {
                                value: -90,
                                message: "The minimum value for this field is -90"
                            },
                            max: {
                                value: 90,
                                message: "The maximum value for this field is 90"
                            },
                            validate: (value) => value < getValues('topLat') || "Bottom latitude must be less than top latitude"
                        })} 
                    />
                </div>
            </div>
        </div>
        <div className={classes.box2}>
            <div className={classes.actions}>
                <button>Query</button>
            </div>
        </div>
    </form>
  );
}

export default ForecastDataForm;