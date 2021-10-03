import React from 'react';
import styles from './Results.module.css';
import ReactStars from "react-rating-stars-component";

export default function Results(props) {

  const starRating = {
    size: 20,
    value: props.rating,
    edit: false,
    isHalf: true,
    activeColor: "#ffa41c"
  };

  return (
    <div className={ styles.product }>
        <div>
          <div><img src={`/images/${props.image}`} className= {styles.resizeImage} /></div>
          <div className={ styles.title }>{ props.title }</div>
          <div className = {styles.manufacturer}> by { props.manufacturer }</div>
          <div> <ReactStars {...starRating} /></div>
          <div className = {styles.price}>${ props.price }</div>
        </div>
    </div>
  )
}
