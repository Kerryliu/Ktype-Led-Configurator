import React from 'react'
import Paper from 'material-ui/Paper';
import {RowLayout} from './layout';
import Key from './key';

const style = {
  keyboardContainer: {
    padding: 5,
    overflowX: "auto",
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

const Keyboard = ({map, onClick}) => {
  return(
    <div style={style.keyboardContainer}>
      <Paper style={style.keyboardPaper}>
        <div style={style.row}>
          {createRow(RowLayout["R0"], map, onClick)}
        </div>
        <div style={{height: "1.25vw"}}/>
        <div style={style.row}>
          {createRow(RowLayout["R1"], map, onClick)}
        </div>
        <div style={style.row}>
          {createRow(RowLayout["R2"], map, onClick)}
        </div>
        <div style={style.row}>
          {createRow(RowLayout["R3"], map, onClick)}
        </div>
        <div style={style.row}>
          {createRow(RowLayout["R4"], map, onClick)}
        </div>
        <div style={style.row}>
          {createRow(RowLayout["R5"], map, onClick)}
        </div>
      </Paper>
    </div>
  );
}

const createRow = (rowLayout, map, onClick) => (
  rowLayout.map((element) => <Key key={element} element={element} onClick={onClick} keyInfo={map.get(element)}/>)
);

export default Keyboard