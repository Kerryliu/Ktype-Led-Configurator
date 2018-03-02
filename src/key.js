import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {KeyInfo} from './layout';

const style = {
  keyWrapper: {
    boxSizing: "border-box",
    margin: "0.25vmax",
  },
  key: {
    width: "100%",
    height: "calc(2vmax + 15px)",
    minWidth: 0,
  },
  keyLabelStyle: {
    fontSize: 12,
    padding: 0,
    margin: 0,
    wordSpacing: 10
  }
};

const Key = ({element, keyInfo, onClick}) => (
  <div style={{flex: KeyInfo[element].dimension, minWidth: 0}}>
    {createKeycap(element, keyInfo, onClick)}
  </div>
);

const createKeycap = (element, keyInfo, onClick) => {
  if(typeof KeyInfo[element].ledId === "undefined") {
      return(<div/>);
  } else {
    return(
      <div style={style.keyWrapper}>
        <RaisedButton 
        disabled={keyInfo.group !== null} //If there is a group assigned, disable button
          label={createKeyLabel(element)}
          labelStyle={style.keyLabelStyle} 
          style={style.key} 
          onClick={() => onClick(element)}/>
      </div>
    );
  }
}

const createKeyLabel = (element) => {
    return typeof KeyInfo[element].label !== "undefined" ? KeyInfo[element].label : element;
}

export default Key