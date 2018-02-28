import React from 'react';
import Paper from 'material-ui/Paper';
import Key from './key.js';
import {RowLayout} from './layout';

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

class Keyboard extends React.Component {
  createRow(rowLayout) {
    return rowLayout.map((element) => <Key key={element} element={element}/>);
  }

  render() {
    return(
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
}

export default Keyboard;