import './App.css';
import BuildingArea from './Components/BuildingArea';
import DateDisplay from './Components/DateDisplayComponent';
import WeeklyStatsDisplay from './Components/Displays/WeeklyStatsDisplay';


function App() {
  return (
    <div className="App">
      <header>
        <h1 className='p-1'>
          Exercise Planner Development
        </h1> 
      </header>
      <div className='row border-outline' >
        <div className='container col-9 border-outline'>
          <DateDisplay />
          
        </div>
        <div className='col-3 border-outline'>
          <WeeklyStatsDisplay />
        </div>
      </div>
      <BuildingArea />
    </div>
  );
}

export default App;
