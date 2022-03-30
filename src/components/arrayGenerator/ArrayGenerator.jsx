import { useSelector } from 'react-redux';
import { selectArray  } from './arraySlice';
import { memo } from 'react';
import ListItemComponent from '../listItemComponent/ListItemComponent';

const ArrayGenerator = memo(({ filter, nameFilter, ageFilter, emailFilter }) => {
    const generatedArray = useSelector(selectArray)

    return (
        <div>
            {generatedArray.array.map((item, i) => {
                if(!filter) {
                return (
                    <div key={i} style={{backgroundColor: 'green', margin: '15px 0px'}}>
                        <ListItemComponent key={i} item={item} index={i}/>
                    </div>
                )}
                if(filter) {
                    if((item.name === nameFilter || item.age === ageFilter || item.email === emailFilter)) {
                    return (
                        <div key={i} style={{backgroundColor: 'green', margin: '15px 0px'}}>
                            <ListItemComponent key={i} item={item} index={i}/>
                        </div>
                    )}
                }
                return null
            })}
        </div>
    )
})

export default ArrayGenerator;
