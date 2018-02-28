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

class Button extends React.Component {
  createButton(character) {
    if(typeof KeyInfo[character].ledId === "undefined") {
      return(<div/>);
    } else {
      return(
        <div style={style.keyWrapper}>
          <RaisedButton label={this.createButtonLabel(character)} labelStyle={style.keyLabelStyle} style={style.key}/>
        </div>
      );
    }
  }

  createButtonLabel(button) {
    return typeof KeyInfo[button].label !== "undefined" ? KeyInfo[button].label : button;
  }

  render() {
    return (
      <div style={{flex: KeyInfo[this.props.character].dimension, minWidth: 0}}>
          {this.createButton(this.props.character)}
      </div>
    );
  }
}

export default Button;