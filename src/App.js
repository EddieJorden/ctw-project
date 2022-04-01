import './App.css';
import ArrayGenerator from './components/arrayGenerator/ArrayGenerator';
import FilterComponent from './components/filterComponent/FilterComponent';

function App() {
  return (
    <div className="App">
      <h1>
        hello world
      </h1>
      <div>
        <FilterComponent />
      </div>
      <div>
        <ul>
          <ArrayGenerator />
        </ul>
      </div>
    </div>
  );
}

export default App;
