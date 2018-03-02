import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {KeyInfo} from './layout';

const style = {
  keyWrapper: {
    boxSizing: "border-box",
    margin: "0.25vmax",
  },
  key: {
    height: "calc(1.8vw + 20px)",
    minWidth: 0,
    width: "100%",
  },
  keyLabelStyle: {
    fontSize: 12,
    margin: 0,
    padding: 0,
    wordSpacing: 10
  }
};

const Key = ({element, keyInfo, ignoreGroup, onClick}) => (
  <div style={{flex: KeyInfo[element].dimension, minWidth: 0}}>
    {createKeycap(element, keyInfo, ignoreGroup, onClick)}
  </div>
);

const isDisabled = (group, ignoreGroup) => {
  if(group === null) {
    return false;
  } else if(group === ignoreGroup) {
    return false;
  } else {
    return true;
  }
}

const createKeycap = (element, keyInfo, ignoreGroup, onClick) => {
  if(typeof KeyInfo[element].ledId === "undefined") {
      return(<div/>);
  } else {
    return(
      <div style={style.keyWrapper}>
        <RaisedButton 
          backgroundColor="#EEEEEE"
          labelColor={keyInfo.color}
          disabledLabelColor={keyInfo.color}
          disabled={isDisabled(keyInfo.group, ignoreGroup)} //If there is a group assigned, disable button
          label={createKeyLabel(element)}
          labelStyle={style.keyLabelStyle} 
          style={style.key} 
          onClick={() => onClick(element, "meow")}/>
      </div>
    );
  }
}

const createKeyLabel = (element) => {
    return typeof KeyInfo[element].label !== "undefined" ? KeyInfo[element].label : element;
}

export default Key