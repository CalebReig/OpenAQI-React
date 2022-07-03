import { CurrentAQIContextProvider } from './current-aqi-context';
import { HistoricDataContextProvider } from './historic-data-context';
import { ForecastDataContextProvider } from './forecast-data-context';
import { ForecastQueryContextProvider } from './forecast-query-context';
import { HistoricQueryContextProvider } from './historic-query-context';



function MultipleContext(props) {

    return (
        <CurrentAQIContextProvider>
        <HistoricDataContextProvider>
          <ForecastDataContextProvider>
            <ForecastQueryContextProvider>
                <HistoricQueryContextProvider>
                    {props.children}
                </HistoricQueryContextProvider>
            </ForecastQueryContextProvider>
          </ForecastDataContextProvider>
        </HistoricDataContextProvider>
      </CurrentAQIContextProvider>

    );

}

export default MultipleContext;