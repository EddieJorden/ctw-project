import { useDispatch, useSelector } from 'react-redux';
import React, { useState, memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { updateIndex, selectListItemData } from '../arrayGenerator/arraySlice';

const ListItemComponent = memo(
  ({ index }) => {
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

    const updateName = useCallback((e) => {
      setName(e.target.value);
    }, [setName]);

    const updateAge = useCallback((e) => {
      setAge(e.target.value);
    }, [setAge]);

    const updateEmail = useCallback((e) => {
      setEmail(e.target.value);
    }, [setEmail]);

    return (
      <div key={index}>
        <div style={{ backgroundColor: '#257FFA', margin: '15px 0px', padding: '10px' }}>
          <div>
            {index}
          </div>
          <input key={1} type="text" defaultValue={listItemName} onChange={updateName} />
          <input key={2} type="text" defaultValue={listItemAge} onChange={updateAge} />
          <input key={3} type="text" defaultValue={listItemEmail} onChange={updateEmail} />
          <button type="button" onClick={handleClick}>submit</button>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    if (prevProps === nextProps) {
      return true;
    } return false;
  },
);

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
