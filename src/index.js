import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

import { createStore } from "redux";
import { connect, Provider } from "react-redux";
import './App.css';

const initialState = {
  firstName:   'Ivan',
  secondName: 'Ivanov'
}

const ACTION_CHANGE_FIRST_NAME = 'ACTION_CHANGE_FIRST_NAME';
const ACTION_CHANGE_SECOND_NAME = 'ACTION_CHANGE_SECOND_NAME';

const changeFirstName = (newFirstName) => {
  return {
    type:    ACTION_CHANGE_FIRST_NAME,
    payload: newFirstName
  };
}

const changeSecondName = (newSecondName) => {
  return {
    type:    ACTION_CHANGE_SECOND_NAME,
    payload: newSecondName
  };
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CHANGE_FIRST_NAME:
      return {...state, firstName: action.payload};
    case ACTION_CHANGE_SECOND_NAME:
      return {...state, secondName: action.payload};
  }
  return state;
}

const store = createStore(rootReducer);

class App extends Component {
  render() {
    const dispatch = this.props.dispatch;
    return (
      <div>
        <label>First Name 
          <input 
            type="text" 
            value={this.props.firstName} 
            onChange={(e) => {
              dispatch(changeFirstName(e.target.value))
            }}
            placeholder="First Name"
          />
        </label><br/>
        <label>Second Name 
          <input 
            type="text" 
            value={this.props.secondName} 
            onChange={(e) => {
              dispatch(changeSecondName(e.target.value))
            }}
            placeholder="Second Name"
          />
        </label>        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    firstName:  state.firstName,
    secondName: state.secondName
  }
}

const WrappedApp = connect(mapStateToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <WrappedApp />
  </Provider>, 
  document.getElementById('root')
);