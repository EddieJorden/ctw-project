import './App.css';
import ArrayGenerator from './components/arrayGenerator/ArrayGenerator';
import FilterComponent from './components/filterComponent/FilterComponent';

function App() {
  return (
    <div className="App">
      <h1>
        React Redux Challenge
      </h1>
      <div>
        <FilterComponent />
      </div>
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '15px',
      }}
      >
        <ul>
          <ArrayGenerator />
        </ul>
      </div>
    </div>
  );
}

export default App;
