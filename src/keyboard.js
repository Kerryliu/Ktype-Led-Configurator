import React from 'react';
import Paper from 'material-ui/Paper';
import Button from './button.js';
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
    return rowLayout.map((character) => <Button key={character} character={character}/>);
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