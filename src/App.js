import './App.scss';
import BuildingArea from './Components/BuildingArea';
import WeeklyStats from './Components/Displays/WeeklyStats';
import WeekView from './Components/Displays/WeekView';


function App() {
  return (
    <div className="App">
      <header>
        <h1 className='p-1'>
          Exercise Planner Development
        </h1> 
      </header>
      <div className='row border-outline' >
        <div className='col-10 week-view-container border-outline'>
          <WeekView />
          
        </div>
        <div className='col-2 border-outline'>
          <WeeklyStats />
        </div>
      </div>
      <BuildingArea />
    </div>
  );
}

export default App;
