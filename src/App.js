import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';
import {Map} from 'immutable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {KeyInfo, RowLayout, Keys} from './layout';
import Keyboard from './keyboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyMap: this.createInitialKeyMap()
    }
  }

  createInitialKeyMap() {
    return Map(
      Keys.reduce((o, key) => Object.assign(
        o, {[key]: {"enabled": true, "color": null, isClicked: false}}), {}));
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Keyboard map={this.state.keyMap}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
