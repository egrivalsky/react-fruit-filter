# Fruit Filter (useState)

## FruitContainer

```js
import React, { useState } from 'react';

// Components
import List from './List';
import Input from './Input';

function FruitContainer(props) {
    const [fruitsToDisplay, setFruitsToDisplay] = useState(props.fruits);
    const [filterValue, setFilterValue] = useState('');


    const handleFilter = (e) => {
        e.preventDefault();
        let filteredValue = e.target.value;
        
        // Remove the fruits that don't contain the filter value
        const filteredFruitList = props.fruits.filter(fruit => {
            return fruit.toLowerCase().includes(filteredValue.toLowerCase());
        });

        setFruitsToDisplay(filteredFruitList);
        setFilterValue(filteredValue);
    }
    return (
        <div>
            <Input value={filterValue} handleFilter={handleFilter}/>
            <List yoFruits={fruitsToDisplay}/>
        </div>
    );
}

export default FruitContainer;
```

## Input
```js
import React, { useState } from 'react';

function Input(props) {
    // const [state, setState] = useState({}); // not using here

    return (
        <div>
            <label htmlFor="fruit-filter">Filter These Fruits: </label>
            <input type="text" value={props.value} onChange={props.handleFilter} name="fruit-filter" />
        </div>
    );
}

export default Input;
```

## List

```js
import React, { useState } from 'react';

function List(props) {
    // const [state, setState] = useState({}); // not using

    const fruitArray = props.yoFruits.map((fruitItem, index) => {
        return <li className="box" key={index} >{fruitItem}</li>
    })

    return (
        <div>
            <ul>
                {fruitArray}
            </ul>
        </div>
    )
}

export default List;
```
