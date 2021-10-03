import React from 'react';
import styles from './Button.module.css'

/* Button component that finds and adds item quantity and updates state of App.js */
const Button = props => {
  const items = props.items;
  const type = props.type;
  const unit = props.unit;

  function addItem(){
    const random = Math.floor(Math.random() * 10) + 1;
    try{
        items.find( ({ value }) => value === type ).qty += random;
    }
    catch{
        const id = items.length+1;
        console.log(id);
        const obj = { id: id, value: type, qty: random, unit: unit }
        items.push(obj)
    }
    console.log(items);
    props.setUpdate();
  }

  return (
  <div>
  <button onClick= {addItem} className = {styles.buttonStyle}>
        { type }
  </button>
  </div>
 )
}

export default Button;