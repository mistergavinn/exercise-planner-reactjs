import './App.scss';
import BuildingArea from './Components/BuildingArea';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="App">
      <Dashboard />

      <div className="border-outline">
        <BuildingArea />
      </div>
    </div>
  );
}

export default App;
