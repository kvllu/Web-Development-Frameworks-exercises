import React from 'react';
import data from './data.json'
import styles from './App.module.css'
import Search from './components/Search';
import Slider from '@material-ui/core/Slider';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: data.items,
      searchValue: "",
      value: [0, 500],
      setValue: 10,
    }
  }

  fieldUpdate = (event) => {
    this.setState({ searchValue: event.target.value.toLowerCase() });
  }
  
  rangeUpdate = (event, newValue) => {
    this.setState({ value: newValue });
  }

  render()
  {

    let output =
      <>
        <div className={styles.HeaderDiv}>
          <h1 className={styles.Title}>AmazonSearch</h1>

          <div className={styles.SearchDiv}>
          <p className={styles.SearchText}>Search</p> <input className={styles.Search} type="text" onChange={ this.fieldUpdate } value ={ this.state.searchValue }/>
          <p className={styles.SearchText}>Price: </p>
          </div>
          <Slider
            className={styles.Range}
            value={this.state.value}
            onChange={this.rangeUpdate}
            valueLabelDisplay="auto"
            min = {0}
            max = {300}
          />
          </div>
          <Search
          items={ this.state.items.filter((item) => item.title.toLowerCase().includes(this.state.searchValue) && (item.price > this.state.value[0] && item.price < this.state.value[1])) }
          />
      </>



    return (
      <>
        { output }
      </>
    )
  }
}

export default App;