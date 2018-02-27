import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {KeyInfo, RowLayout} from '../src/layout';

const style = {
  keyboardPaper: {
    width: "66vw",
    margin: "auto"
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  keyWrapper: {
    boxSizing: "border-box",
    padding: "0.25vw",
  },
  key: {
    minWidth: 0,
    minHeight: 0,
    width: "100%",
    height: "3vw",
  },
  keyLabelStyle: {
    fontSize: "0.65vw",
    padding: 0,
    wordSpacing: "0.35vw"
  }
};

class App extends Component {
  createKeyboard = () => {
    console.log(KeyInfo["esc"].dimension);
    return (
      <Paper style={style.keyboardPaper}>
        <div style={style.row}>
          {this.createRow(RowLayout["R0"])}
        </div>
        <div style={{height: "1.25vw"}}/>
        <div style={style.row}>
          {this.createRow(RowLayout["R1"])}
        </div>
        <div style={style.row}>
          {this.createRow(RowLayout["R2"])}
        </div>
        <div style={style.row}>
          {this.createRow(RowLayout["R3"])}
        </div>
        <div style={style.row}>
          {this.createRow(RowLayout["R4"])}
        </div>
        <div style={style.row}>
          {this.createRow(RowLayout["R5"])}
        </div>
      </Paper>
    );
  }

  createRow(rowLayout) {
    return rowLayout.map(
      (key) => <div key={key} style={{flex: KeyInfo[key].dimension, minWidth: 0}}>
        {this.createKey(key)}
      </div>
    );
  }

  createKey(key) {
    if(typeof KeyInfo[key].ledId === "undefined") {
      return(<div/>);
    } else {
      return(
        <div style={style.keyWrapper}>
          <RaisedButton label={this.createKeyLabel(key)} labelStyle={style.keyLabelStyle} style={style.key}/>
        </div>
      );
    }
  }

  createKeyLabel(key) {
    return typeof KeyInfo[key].label !== "undefined" ? KeyInfo[key].label : key;
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
          <this.createKeyboard/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
