import { useSelector } from 'react-redux';
import { memo } from 'react';
import PropTypes from 'prop-types';
import { selectArray } from './arraySlice';
import ListItemComponent from '../listItemComponent/ListItemComponent';

const ArrayGenerator = memo(({
  filter, nameFilter, ageFilter, emailFilter,
}) => {
  const generatedArray = useSelector(selectArray);

  return (
    <div>
      {generatedArray.array.map((item, i) => {
        const arrayIndex = i;
        if (!filter) {
          return (
            <div key={arrayIndex} style={{ backgroundColor: 'green', margin: '15px 0px' }}>
              <ListItemComponent key={arrayIndex} item={item} index={arrayIndex} />
            </div>
          );
        }
        if (filter) {
          if ((item.name === nameFilter || item.age === ageFilter || item.email === emailFilter)) {
            return (
              <div key={arrayIndex} style={{ backgroundColor: 'green', margin: '15px 0px' }}>
                <ListItemComponent key={arrayIndex} item={item} index={arrayIndex} />
              </div>
            );
          }
        }
        return null;
      })}
    </div>
  );
});

ArrayGenerator.defaultProps = {
  filter: false,
  nameFilter: 'name filter',
  ageFilter: 'age filter',
  emailFilter: 'email filter',
};

ArrayGenerator.propTypes = {
  filter: PropTypes.bool,
  nameFilter: PropTypes.string,
  ageFilter: PropTypes.string,
  emailFilter: PropTypes.string,
};

export default ArrayGenerator;
