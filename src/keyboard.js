import React from 'react'
import Paper from 'material-ui/Paper';
import {RowLayout} from './layout';
import Key from './key';

const style = {
  keyboardPaper: {
    width: "66vw",
    margin: "auto"
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
};

const Keyboard = ({map}) => {
  console.log(map.get("esc"));
  return(
    <Paper style={style.keyboardPaper}>
      <div style={style.row}>
        {createRow(RowLayout["R0"])}
      </div>
      <div style={{height: "1.25vw"}}/>
      <div style={style.row}>
        {createRow(RowLayout["R1"])}
      </div>
      <div style={style.row}>
        {createRow(RowLayout["R2"])}
      </div>
      <div style={style.row}>
        {createRow(RowLayout["R3"])}
      </div>
      <div style={style.row}>
        {createRow(RowLayout["R4"])}
      </div>
      <div style={style.row}>
        {createRow(RowLayout["R5"])}
      </div>
    </Paper>
  );
}

const createRow = (rowLayout) => (
  rowLayout.map((element) => <Key key={element} element={element}/>)
);

export default Keyboard