import React from 'react';
import Paper from 'material-ui/Paper';
import {RowLayout} from './layout';
import Key from './key';

const style = {
  keyboardContainer: {
    overflow: "auto",
    padding: 5,
  },
  keyboardPaper: {
    width: "66vw",
    margin: "auto",
    minWidth: 800,
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
};

const Keyboard = ({map, ignoreGroup, onClick}) => {
  return(
    <div style={style.keyboardContainer}>
      <Paper style={style.keyboardPaper}>
        <div style={style.row}>
          {createRow(RowLayout["R0"], map, ignoreGroup, onClick)}
        </div>
        <div style={{height: "1.25vw"}}/>
        <div style={style.row}>
          {createRow(RowLayout["R1"], map, ignoreGroup, onClick)}
        </div>
        <div style={style.row}>
          {createRow(RowLayout["R2"], map, ignoreGroup, onClick)}
        </div>
        <div style={style.row}>
          {createRow(RowLayout["R3"], map, ignoreGroup, onClick)}
        </div>
        <div style={style.row}>
          {createRow(RowLayout["R4"], map, ignoreGroup, onClick)}
        </div>
        <div style={style.row}>
          {createRow(RowLayout["R5"], map, ignoreGroup, onClick)}
        </div>
      </Paper>
    </div>
  );
}

const createRow = (rowLayout, map, ignoreGroup, onClick) => (
  rowLayout.map((element) => 
    <Key 
      key={element} 
      element={element} 
      ignoreGroup={ignoreGroup}
      onClick={onClick} keyInfo={map.get(element)}
    />
  )
);

export default Keyboard