import { useSelector } from 'react-redux';
import { memo } from 'react';
// import PropTypes from 'prop-types';
import { selectArray } from './arraySlice';
import ListItemComponent from '../listItemComponent/ListItemComponent';
import { selectFilter } from '../filterComponent/filterSlice';

const ArrayGenerator = memo(
	() => {
		const generatedArray = useSelector(selectArray);
		const filter = useSelector(selectFilter);

		const {
			name, age, email, active, index,
		} = filter.filter;

		return (
			<div>
				{generatedArray.array.map((item, i) => {
					const itemIndex = i;
					if (!active) {
						return (
							<div key={itemIndex} style={{ backgroundColor: 'green', margin: '15px 0px' }}>
								<ListItemComponent key={itemIndex} item={item} index={itemIndex} />
							</div>
						);
					}
					if (active) {
						if ((item.name === name)
            || (item.age === age) || (item.email === email) || (i === Number(index))) {
							return (
								<div key={itemIndex} style={{ backgroundColor: 'green', margin: '15px 0px', width: '100px' }}>
									<ListItemComponent key={itemIndex} item={item} index={itemIndex} />
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
	// filter: PropTypes.bool,
};

export default ArrayGenerator;
