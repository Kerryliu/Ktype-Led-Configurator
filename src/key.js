import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {KeyInfo} from './layout';

const style = {
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

class Key extends React.Component {
  createKey(element) {
    if(typeof KeyInfo[element].ledId === "undefined") {
      return(<div/>);
    } else {
      return(
        <div style={style.keyWrapper}>
          <RaisedButton label={this.createKeyLabel(element)} labelStyle={style.keyLabelStyle} style={style.key}/>
        </div>
      );
    }
  }

  createKeyLabel(key) {
    return typeof KeyInfo[key].label !== "undefined" ? KeyInfo[key].label : key;
  }

  render() {
    return (
      <div style={{flex: KeyInfo[this.props.element].dimension, minWidth: 0}}>
          {this.createKey(this.props.element)}
      </div>
    );
  }
}

export default Key;