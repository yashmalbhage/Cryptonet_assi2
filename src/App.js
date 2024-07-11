import logo from './logo.svg';
import './App.css';
import UserProfile from './userProfile';
import CircularGauge from './components/CircularGauge';
import DigitalClock from './components/DigitalClock';
import TestTube from './components/Level';
import IoTDashboard from './components/CircularGauge';


function App() {
  return (
    <div className="flex-col">
        <DigitalClock />
        <IoTDashboard/>

       
    </div>
  );
}

export default App;
