import { Route, Routes } from 'react-router-dom';


import HomePage from './pages/Home';
import ForecastsPage from './pages/Forecasts';
import HistoricDataPage from './pages/HistoricData';
import APIPage from './pages/API';
import AboutPage from './pages/About';
import PageNotFoundPage from './pages/PageNotFound';
import Layout from './components/layout/Layout';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} exact={true} />
        <Route path='/forecasts' element={<ForecastsPage />} />
        <Route path='/historic-data' element={<HistoricDataPage />} />
        <Route path='/api' element={<APIPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='*' element={<PageNotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
