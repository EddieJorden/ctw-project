import './App.css';
import { useState, useCallback, memo } from 'react';
import ArrayGenerator from './components/arrayGenerator/ArrayGenerator';

function App() {
  const [filter, setFilter] = useState(false);

  const [nameFilter, setNameFilter] = useState('name filter');
  const [ageFilter, setAgeFilter] = useState('age filter');
  const [emailFilter, setEmailFilter] = useState('email filter');

  const isFilter = () => {
    let activeFilter = {
      active: true,
      name: nameFilter,
      age: ageFilter,
      email: emailFilter,
    };
    if (filter) {
      return activeFilter;
    }
    activeFilter = {
      active: false,
      name: '',
      age: '',
      email: '',
    };
    return activeFilter;
  };

  const runFilter = () => {
    setFilter(true);
  };

  // const runFilter = () => {
  //   if (nameFilter !== '' || ageFilter !== '' || emailFilter !== '') {
  //     setFilter(true);
  //   } else setFilter(false);
  // };

  const clearFilter = () => {
    setFilter(false);
  };

  const updateNameFilter = useCallback((e) => {
    setNameFilter(e.target.value);
  }, [setNameFilter]);

  const updateAgeFilter = useCallback((e) => {
    setAgeFilter(e.target.value);
  }, [setAgeFilter]);

  const updateEmailFilter = useCallback((e) => {
    setEmailFilter(e.target.value);
  }, [setEmailFilter]);

  return (
    <div className="App">
      <h1>
        hello world
      </h1>
      <div>Filters</div>
      <input input="text" placeholder={nameFilter} onChange={updateNameFilter} />
      <input input="text" placeholder={ageFilter} onChange={updateAgeFilter} />
      <input input="text" placeholder={emailFilter} onChange={updateEmailFilter} />
      <button type="button" onClick={runFilter}>filter</button>
      <button type="button" onClick={clearFilter}>clear filter</button>
      <div>
        <ul>
          <ArrayGenerator
            filter={isFilter()}
          />
        </ul>
      </div>
    </div>
  );
}

export default memo(App);
