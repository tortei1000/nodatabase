import React, { Component } from 'react';

export default class AddToCart extends Component {

  render(){
    let info = this.props.inventory
    let myCart = this.props.cart

    return(
      <div>
      {console.log(info, myCart)}
      </div>
    )
  }
}