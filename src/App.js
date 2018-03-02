import React from 'react';
import './App.css';
import {Map} from 'immutable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Keys} from './layout';
import Keyboard from './keyboard';
import GroupPicker from './groupPicker';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyMap: this.createInitialKeyMap(),
    }
  }

  createInitialKeyMap() {
    return Map(
      Keys.reduce((o, key) => Object.assign(
        o, {[key]: {group: null, color: "black", animation: "off"}}), {}));
  }

  updateMap = (updatedMap) => {
    this.setState({
      keyMap: updatedMap
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">

          <GroupPicker 
            keyMap={this.state.keyMap} 
            updateMap={(updatedMap) => this.updateMap(updatedMap)}
          />
          <Keyboard map={this.state.keyMap} onClick={() => (0)}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
