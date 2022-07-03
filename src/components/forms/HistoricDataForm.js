import { useContext } from 'react';
import { useForm } from "react-hook-form";
import HistoricDataContext from "../../store/historic-data-context";
import HistoricQueryContext from "../../store/historic-query-context";

import classes from './styles/HistoricDataForm.module.css';

function HistoricDataForm(props) {

  const historicDataCtx = useContext(HistoricDataContext);
  const historicQueryCtx = useContext(HistoricQueryContext);

  const { register, handleSubmit, getValues } = useForm({
    defaultValues: {
        start: historicQueryCtx.start,
        end: historicQueryCtx.end,
        bottomLat: historicQueryCtx.bottomLat,
        topLat: historicQueryCtx.topLat,
        rightLong: historicQueryCtx.rightLong,
        leftLong: historicQueryCtx.leftLong
    },
    shouldUseNativeValidation: true
    });

  const onSubmit = (inputData) => {
    const url = "/api/v1/historic-data?" + 
                "token=seYtfXcOCMNcv96yehlq" +
                "&start=" + inputData.start + 
                "&end=" + inputData.end +
                "&bLat=" + inputData.bottomLat +
                "&tLat=" + inputData.topLat +
                "&rLong=" + inputData.rightLong +
                "&lLong=" + inputData.leftLong+
                "&limit=true";
   
    props.setIsLoading(true);
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        props.setIsLoading(false);
        props.setLoadedData(data);
        historicDataCtx.addData(data);
    }); 
    historicQueryCtx.addData(
        {
            start: inputData.start,
            end: inputData.end,
            bottomLat: inputData.bottomLat,
            topLat: inputData.topLat,
            leftLong: inputData.leftLong,
            rightLong: inputData.rightLong
        });
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.box}>
            <div className={classes.dates}>
                <div className={classes.control}>
                    <label htmlFor="startWindowHistoric">From</label>
                    <input 
                        type="date" 
                        id="startWindowHistoric"
                        {...register('start', {
                            required: {
                                value: true,
                                message: "This is a required field"
                            },
                            min: {
                                value: "1980-01-01",
                                message: "Records only go back to 1980-01-01"
                            },
                            max: {
                                value: new Date().toISOString().slice(0, 10),
                                message: "Records only include up to the current date" 
                            },
                            validate: (value) => value < getValues('end') || "From must be before To"
                        })}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="endWindowHistoric">To</label>
                    <input
                        type="date" 
                        id="endWindowHistoric"
                        {...register('end', {
                            required: {
                                value: true,
                                message: "This is a required field"
                            },
                            min: {
                                value: "1980-01-01",
                                message: "Records only go back to 1980-01-01"
                            },
                            max: {
                                value: new Date().toISOString().slice(0, 10),
                                message: "Records only include up to the current date" 
                            },
                            validate: (value) => value > getValues('start') || "To must be after From"
                        })}
                    />
                </div>
            </div>
            <div className={classes.spacing}></div>
            <div>
                <div className={classes.control}>
                    <label htmlFor="topLatHistoric">Latitude (Top)</label>
                    <input
                        type="number" 
                        id="topLatHistoric"
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
                        <label htmlFor="leftLongHistoric">Longitude (Left)</label>
                        <input 
                            type="number" 
                            id="leftLongHistoric"
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
                        <label htmlFor="rightLongHistoric">Longitude (Right)</label>
                        <input 
                            type="number" 
                            id="rightLongHistoric"
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
                    <label htmlFor="bottomLatHistoric">Latitude (Bottom)</label>
                    <input 
                        type="number" 
                        id="bottomLatHistoric"
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

export default HistoricDataForm;