import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import InventoryConstructor from './InventoryConstructor';
import AddToCart from './addToCart';

class App extends Component {
  
  constructor(){
    super()

    this.state={
      inventory : [],
      name: "",
      price: 0,
      passengers: 0,
      cart : []
    }
  }

  componentDidMount() {
    axios.get('https://swapi.co/api/starships/').then( results => {
       
      this.setState({inventory : results.data.results})
      console.log("2222", this.state.inventory)
    })
  }
  
  render() {
    return (
      <div className="App">
       <InventoryConstructor inventory={this.state.inventory} />
       <AddToCart inventory={this.state.inventory} cart={this.state.cart} />
      </div>
    );
  }
}

export default App;
