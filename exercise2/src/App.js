import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import Button from "./components/Button";
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);
    this.setUpdate = this.setUpdate.bind(this);
    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ],
      updated: false
    };
  }

  setUpdate() {
    this.setState({ updated: true });
  }

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <div className = { styles.buttonDiv }>
      <p>Add items:</p>
      <Button items={ this.state.items } type = "Beer" setUpdate={this.setUpdate} unit = "ltr"/>
      <Button items={ this.state.items } type = "Cake" setUpdate={this.setUpdate} unit = "pcs"/>
      <Button items={ this.state.items } type = "Fries" setUpdate={this.setUpdate} unit = "kgs"/>
      <Button items={ this.state.items } type = "Koskenkorva" setUpdate={this.setUpdate} unit = "ltrs"/>
      </div>
    </div>
  }
}

export default App;