import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { updateFilter } from './filterSlice';

function FilterComponent() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [index, setIndex] = useState('');
  console.log('index', index);

  const dispatch = useDispatch();

  const enableFilter = () => {
    dispatch(updateFilter({
      name, age, email, index, active: true,
    }));
  };

  const clearFilter = () => {
    setIndex('');
    setName('');
    setAge('');
    setEmail('');
    dispatch(updateFilter({
      name: '',
      age: '',
      email: '',
      index: '',
      active: false,
    }));
  };

  const updateNameFilter = useCallback((e) => {
    setName(e.target.value);
  }, [setName]);

  const updateAgeFilter = useCallback((e) => {
    setAge(e.target.value);
  }, [setAge]);

  const updateEmailFilter = useCallback((e) => {
    setEmail(e.target.value);
  }, [setEmail]);

  const updateIndexFilter = (e) => {
    setIndex(e.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="name filter" value={name} onChange={updateNameFilter} />
      <input type="text" placeholder="age filter" value={age} onChange={updateAgeFilter} />
      <input type="text" placeholder="email filter" value={email} onChange={updateEmailFilter} />
      <input type="number" placeholder="index filter" value={index} onChange={updateIndexFilter} />
      <button type="button" onClick={enableFilter}>Filter</button>
      <button type="button" onClick={clearFilter}>ClearFilter</button>
    </div>
  );
}

export default FilterComponent;
