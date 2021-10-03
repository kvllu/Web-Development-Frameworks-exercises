import React from 'react';
import styles from './Search.module.css';
import Results from './Results';

export default function SearchView(props) {

  return (
    <div>
      <div className={ styles.View }>
      {
        props.items.map(item => <Results key={item.id} {...item} />)
      }
      </div>
    </div>
  )
}
