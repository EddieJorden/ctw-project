import './App.css';
import { useState } from 'react';
import ArrayGenerator from './components/arrayGenerator/ArrayGenerator';

function App() {
  const [filter, setFilter] = useState(false);

  const [nameFilter, setNameFilter] = useState('name filter');
  const [ageFilter, setAgeFilter] = useState('age filter');
  const [emailFilter, setEmailFilter] = useState('email filter');

  const updateFilterState = () => {
    if (nameFilter !== '' || ageFilter !== '' || emailFilter !== '') {
      setFilter(true);
    } else setFilter(false);
  };

  const clearFilter = () => {
    setNameFilter('');
    setAgeFilter('');
    setEmailFilter('');
    setFilter(false);
  };

  return (
    <div className="App">
      <h1>
        hello world
      </h1>
      <div>Filters</div>
      <input input="text" placeholder={nameFilter} onChange={(e) => setNameFilter(e.target.value)} />
      <input input="text" placeholder={ageFilter} onChange={(e) => setAgeFilter(e.target.value)} />
      <input input="text" placeholder={emailFilter} onChange={(e) => setEmailFilter(e.target.value)} />
      <button type="button" onClick={updateFilterState}>filter</button>
      <button type="button" onClick={clearFilter}>clear filter</button>
      <div>
        <ul>
          <ArrayGenerator
            filter={filter}
            nameFilter={nameFilter}
            ageFilter={ageFilter}
            emailFilter={emailFilter}
          />
        </ul>
      </div>
    </div>
  );
}

export default App;
