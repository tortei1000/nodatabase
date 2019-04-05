import React, { Component } from 'react';

export default class InventoryConstructor extends Component {





  render(){
    let info = this.props.inventory
    let newShips = info.map((ship)=>{
      return(
        <div>
          <p className="shipName" key="ship.name">{ship.name}</p>
          <p className="shipModel" key="ship.model">{ship.model} </p>
          <p className="shipCost" key="ship.cost_in_credits">{ship.cost_in_credits} </p>
          <p className="shipCapacity" key="ship.crew">{ship.crew} </p>
          
        </div>
        
      )
    }) 
    console.log("111", newShips)
    
    return(
      <div>
        <h2>
          {newShips}
        </h2>
      </div>
    )
  } 
}