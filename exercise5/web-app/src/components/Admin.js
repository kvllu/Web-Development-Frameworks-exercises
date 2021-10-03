import React, { useState } from 'react'
import styles from './Admin.module.css'
import ReactStars from "react-rating-stars-component";
import starRating from './Results'

export default function Admin(props) {

  const [itemTitle, setitemTitle] = useState("");
  const [itemRating, setitemRating] = useState("");
  const [itemManufacturer, setitemManufacturer] = useState("");
  const [itemPrice, setitemPrice] = useState("");
  const [itemImage, setitemImage] = useState("");

  const inputRating = {
    size: 30,
    count: 5,
    isHalf: true,
    value: 0,
    activeColor: "#ffa41c",
    onChange: newValue => {
      setitemRating(newValue);
    }
  };
  
  const addItem = () => {
    props.addItem(itemTitle, itemManufacturer, itemPrice, itemRating, itemImage);
  }

  const deleteItem = (itemId) => {
    props.deleteItem(itemId);
  }
  
  function setRating(rating){
    starRating.value = rating
  }


  return (
    <div>
      <div className={styles.HeaderDiv}>
          <h1>ADMIN PANEL</h1>
          <div className= {styles.FieldsDiv}>
            <div>
              Name: <input type="text" onChange={ (event) => setitemTitle(event.target.value) } className = {styles.Field}/>
              Manufacturer <input type="text" onChange={ (event) => setitemManufacturer(event.target.value) } className = {styles.Field}/>
            </div>
            <div>
              Price($): <input type="text" onChange={ (event) =>  setitemPrice(event.target.value) } className = {styles.Field}/>
              Image URL <input type="text" onChange={ (event) =>  setitemImage(event.target.value) } className = {styles.Field}/>
            </div>
          </div>
          <div className= {styles.RatingDiv}>
            Rating: 
            <ReactStars {...inputRating} />
          </div>
          <div className = {styles.Buttons}>
            <button onClick={ addItem } className = {styles.Button}>Add a new item</button>
          </div>
          <div className = {styles.Buttons}>
            <button onClick={ props.disableAdminMode } className = {styles.Button}>Exit</button>
          </div>
        </div>
        <div className={styles.ListDiv}>
        <div>
        { props.items.map((item, index) =>
          <div key={index} className={styles.List}>
            <div>
            <button onClick={() => deleteItem(item.id)} className = {styles.Button}>Delete this item</button>
            </div>
            <div>
               <div>{item.title} </div>
               <div> by {item.manufacturer} </div>
               <div>Price: ${item.price} </div>
               {setRating(item.rating)}
               <div> <ReactStars {...starRating} /></div>
            </div>
          </div>)}
        </div>
        </div>
    </div>
  )
}
