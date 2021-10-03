import React from 'react';
import styles from './App.module.css'
import Search from './components/Search';
import Admin from './components/Admin';
import Slider from '@material-ui/core/Slider';
import axios from 'axios';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      adminMode: false,
      items: [],
      searchValue: "",
      value: [0, 500],
      setValue: 10,
    }
  }

  rangeUpdate = (event, newValue) => {
    this.setState({ value: newValue });
  }
  
  fieldUpdate = (event) => {
    this.setState({ searchValue: event.target.value.toLowerCase() });
  }

  addItem = (title, manufacturer, price, rating, image) => {
    axios.post('http://localhost:4000/products',
               {
                title,
                image,
                manufacturer,
                price,
                rating
               })
      .then(response => {
        this.setState({ items: response.data });
      })
  }

  deleteItem = itemId => {
    axios.delete('http://localhost:4000/products/' + itemId)
      .then(response => {
        this.setState({items: this.state.items.filter(item => item.id !== itemId)})
      })
  }
  

  componentDidMount() {
    axios.get('http://localhost:4000/products')
      .then((response) => {
        this.setState({ items: response.data })
      });
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
            max = {400}
          />
          <button onClick={() => this.setState({adminMode: !this.state.adminMode})} className= {styles.Button}>Admin panel</button>
          </div>
          <Search
          items={ this.state.items.filter((item) => item.title.toLowerCase().includes(this.state.searchValue) && (item.price > this.state.value[0] && item.price < this.state.value[1])) }
          />
      </>

    if(this.state.adminMode) {
      output = <Admin
              disableAdminMode={() => this.setState({adminMode: false}) }
              addItem={ this.addItem }
              items={ this.state.items }
              deleteItem={ this.deleteItem }
           />;
    }


    return (
      <>
        { output }
      </>
    )
  }
}

export default App;