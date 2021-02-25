# Fruit Filter Part 1

![fruit filter](https://media.git.generalassemb.ly/user/24692/files/6c76e480-7767-11eb-924b-1a08f65fe4c6)

### App (Main Component)
```js
// imports
import FruitContainer from './components/FruitContainer';

function App() {
  const fruits = ['banana 🍌', 'watermelon 🍉', 'cherry 🍒', 'guava', 'apple 🍎', 'kiwi 🥝', 'strawberry 🍓', 'mango 🥭', 'pineapple 🍍', 'avocado 🥑'];
  return (
    <div>
      <h1>Fruit Filter</h1>
      <FruitContainer fruits={fruits}/>
    </div>
  );
}

export default App;

```
### FruitContainer
```js
import React, { Component } from 'react';
import List from './List';

class FruitContainer extends Component {
    constructor(props) {
        super()
        this.state = {
            fruitsToDisplay: props.fruits,
            filterValue: ''
        };
    }

    render() {
        console.log('---- state -----');
        console.log(this.state.fruitsToDisplay);
        console.log('---- props -----');
        console.log(this.props.fruits);


        return (
            <div>
                <List yoFruits={this.state.fruitsToDisplay}/>
            </div>
        )
    }
}

export default FruitContainer;
```
### List
```js
import React, { Component } from 'react'

class List extends Component{
    constructor(props){
        super()
        this.state = {}
    }
    render(){
        const fruitArray = this.props.yoFruits.map((fruitItem, index) => {
            return <li className="box" >{fruitItem}</li>
        })
        
        return(
            <div>
                <ul>
                    {fruitArray}
                </ul>
            </div>
        )
    }
}
export default List
```

### Input
```js
import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super()
        this.state = {};
    }

    render() {
        return(
            <div>
                <label htmlFor="fruit-filter">Filter These Fruits</label>
                <input type="text" value={this.props.value} onChange={this.props.onChange} name="fruit-filter"/>
            </div>
        )
    }
}

export default Input;
```

⚠️ What happens if you don't use the `key` attributes in your mapped array
![key warning](https://media.git.generalassemb.ly/user/24692/files/ec507f00-7766-11eb-9fee-09f5fc64e588)
