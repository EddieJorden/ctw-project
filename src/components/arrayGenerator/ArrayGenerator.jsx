import { useSelector } from 'react-redux';
import { memo } from 'react';
import PropTypes from 'prop-types';
import { selectArray } from './arraySlice';
import ListItemComponent from '../listItemComponent/ListItemComponent';

const ArrayGenerator = memo(
  ({
    filter,
  }) => {
    const generatedArray = useSelector(selectArray);

    return (
      <div>
        {generatedArray.array.map((item, i) => {
          const arrayIndex = i;
          if (filter.active === false) {
            return (
              <div key={arrayIndex} style={{ backgroundColor: 'green', margin: '15px 0px' }}>
                <ListItemComponent key={arrayIndex} item={item} index={arrayIndex} />
              </div>
            );
          }
          if (filter.active) {
            if (((item.name === filter.name)
            || item.age === filter.age || item.email === filter.email)) {
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
  },
  (prevProps, nextProps) => {
    if (prevProps === nextProps) {
      return true;
    } return false;
  },
);

ArrayGenerator.defaultProps = {
  filter: false,

};

ArrayGenerator.propTypes = {
  filter: PropTypes.bool,

};

export default ArrayGenerator;
