import React, { Component } from 'react';
import List from './List';
import Input from './Input';

class FruitContainer extends Component {
    constructor(props) {
        super()
        this.state = {
            fruitsToDisplay: props.fruits,
            filterValue: ''
        };
    }

    handleFilter = (e) => {
        e.preventDefault();
        let filteredValue = e.target.value;
        // remove the fruits that don't contain the fileredValue (variable)
        const fruitFilterList = this.props.fruits.filter(fruitItem => {
            if (fruitItem.includes(filteredValue.toLowerCase())) { // banana 🍌
                return true;
            }
            return false;
        });

        this.setState({
            fruitsToDisplay: fruitFilterList,
            filterValue: filteredValue
        });
    }

    // filteredValue.toLowerCase() === fruitItem.toLowerCase()
    // ['banana 🍌']
    
    render() {
        console.log(this.state.fruitsToDisplay);
        console.log('---- state -----');
        console.log(this.state.fruitsToDisplay);
        console.log('---- props -----');
        console.log(this.props.fruits);

        return (
            <div>
                <Input value={this.state.filterValue} handleFilter={this.handleFilter} />
                <List yoFruits={this.state.fruitsToDisplay}/>
            </div>
        )
    }
}

export default FruitContainer;