import React from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import { tsConstructorType } from '@babel/types';
const API_ENDPOINT = 'https://swapi.co/api/people/1/';

function urlForID(id) {
  return `https://swapi.co/api/people/${id}/`
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      currentID: 1
    }
  }
  componentDidMount(){
    axios.get(urlForID(this._getNextCharacter()))
    .then(response => {
        console.log(response.data.name);
        this.setState({
          name: response.data.name
        })
    });

  }
    render(){
      return (
        <div className="App">
          <header className="App-header">
            {
            this.state.name ?
              this.state.name
              :
              <img src={logo}/>
          }
          <button onClick={this._getNextCharacter}>%%%%%%%%%%%</button>
          </header>
        </div>
      );
  }
  _getNextCharacter = () => {
    this.setState({
      currentID: this.state.currentID + 1
    }, () => {
      return (this.state.currentID)
      // console.log(`New currentID is ${this.state.currentID}`)
    });
  }
};



export default App;
