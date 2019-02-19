import React, { Component } from 'react';
import { createStore } from "redux";
import { connect, Provider } from "react-redux";
import './App.css';

const initialState = {
  fistName:   '',
  secondName: ''
}

const ACTION_CHANGE_FIRST_NAME = 'ACTION_CHANGE_FIRST_NAME';
const ACTION_CHANGE_SECOND_NAME = 'ACTION_CHANGE_SECOND_NAME';

const actionChangeFirstName = () => {
  return {
    type:    ACTION_CHANGE_FIRST_NAME,
    payload: null
  };
}

const actionChangeSecondName = () => {
  return {
    type:    ACTION_CHANGE_SECOND_NAME,
    payload: null
  };
}

const rootReducer = (state = initialState, action) => {
  return state;
}

const store = createStore(rootReducer);

console.log(store.getState());

class App extends Component {
  render() {
    return (
      <div>
        <label>First Name <input type="text" placeholder="First Name"/></label><br/>
        <label>Second Name <input type="text" placeholder="Second Name"/></label>        
      </div>
    );
  }
}

export default App;