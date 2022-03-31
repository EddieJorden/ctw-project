import { useDispatch, useSelector } from 'react-redux';
import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { updateIndex, selectListItemData } from '../arrayGenerator/arraySlice';

const ListItemComponent = memo(({ index }) => {
  const listItemData = useSelector(selectListItemData);
  const { name: listItemName, age: listItemAge, email: listItemEmail } = listItemData[index];
  const [name, setName] = useState(listItemName);
  const [age, setAge] = useState(listItemAge);
  const [email, setEmail] = useState(listItemEmail);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateIndex({
      name,
      age,
      email,
      index,
    }));
  };

  return (
    <div key={index}>
      <div style={{ backgroundColor: 'black', margin: '15px 0px', padding: '10px' }}>
        <div>
          {index}
        </div>
        <input key={1} type="text" defaultValue={listItemName} onChange={(e) => { setName(e.target.value); }} />
        <input key={2} type="text" defaultValue={listItemAge} onChange={(e) => { setAge(e.target.value); }} />
        <input key={3} type="text" defaultValue={listItemEmail} onChange={(e) => { setEmail(e.target.value); }} />
        <button type="button" onClick={handleClick}>submit</button>
      </div>
    </div>
  );
});

ListItemComponent.defaultProps = {
  item: {
    index: null,
    name: 'defualt name',
    age: 'default age',
    email: 'default email',
  },
  index: null,
};

ListItemComponent.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.string,
    email: PropTypes.string,
  }),
  index: PropTypes.number,
};

export default ListItemComponent;
