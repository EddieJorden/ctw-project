import { useDispatch, useSelector } from 'react-redux';
import { updateIndex, selectListItemData } from '../arrayGenerator/arraySlice';
import { useState, memo } from 'react';
import React from 'react';


const ListItemComponent = memo(({ item, index }) => {
    const listItemData = useSelector(selectListItemData)
    const {name: listItemName, age: listItemAge, email: listItemEmail} = listItemData[index];
    const [name, setName] = useState(listItemName)
    const [age, setAge] = useState(listItemAge)
    const [email, setEmail] = useState(listItemEmail)
    const dispatch = useDispatch()
    
    const handleClick = () => {
        dispatch(updateIndex({
            name,
            age,
            email,
            index,
    }))
    }

    return (
        <div key={item.index}>
            <div style={{backgroundColor: 'black', margin: '15px 0px', padding: '10px'}}>
                <div>
                    {index}
                </div>
                    <input key={1} type='text' defaultValue={listItemName} onChange={(e) => {setName(e.target.value)}}></input>
                    <input key={2} type='text' defaultValue={listItemAge} onChange={(e) => {setAge(e.target.value)}}></input>
                    <input key={3} type='text' defaultValue={listItemEmail} onChange={(e) => {setEmail(e.target.value)}}></input>
                    <button onClick={handleClick}>submit</button>
            </div>
        </div>
    )
})

export default ListItemComponent;
