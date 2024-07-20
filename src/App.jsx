import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import Header from './components/Header';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';
import Footer from './components/Footer';
import ActorProfile from './components/ActorProfile';
import TasteChartGenerator from './components/TasteChartGenerator';
import SpecialFeature from './components/SpecialFeature'
import FilmoDetail from './components/FilmoDetail';
import FilmoFilter from './components/FilmoFilter';
import FilmoAll from './components/FilmoAll';

function App() {
  useEffect(() => {
    ReactGA.initialize('UA-000000-01'); // 여기에 귀하의 추적 ID를 넣으세요
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const RouteTracker = () => {
    const location = useLocation();
  
    useEffect(() => {
      ReactGA.pageview(location.pathname + location.search);
    }, [location]);
  
    return null;
  };
  return (
    <Router>
      <Theme appearance="dark" accentColor="crimson" radius="large" p={{ sm: '6', lg: '9' }}>
        <Header />
        <RouteTracker />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/filmo/:id" element={<FilmoDetail />} />
          <Route path="/profile" element={<ActorProfile />} />
          <Route path="/taste-chart" element={<TasteChartGenerator />} />
          <Route path="/ott-recommendation" element={<FilmoFilter />} />
          <Route path="/recommended" element={<SpecialFeature />} />
          <Route path="/filmography" element={<FilmoAll />} />
        </Routes>
        <Footer />
      </Theme>
    </Router>
  );
}

export default App;