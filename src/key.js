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

const Key = ({element, keyInfo}) => (
  <div style={{flex: KeyInfo[element].dimension, minWidth: 0}}>
    {createKeycap(element)}
  </div>
);

const createKeycap = (element) => {
  if(typeof KeyInfo[element].ledId === "undefined") {
      return(<div/>);
  } else {
    return(
      <div style={style.keyWrapper}>
        <RaisedButton label={createKeyLabel(element)} labelStyle={style.keyLabelStyle} style={style.key}/>
      </div>
    );
  }
}

const createKeyLabel = (element) => {
    return typeof KeyInfo[element].label !== "undefined" ? KeyInfo[element].label : element;
}

export default Key