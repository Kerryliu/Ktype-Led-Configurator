import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Keyboard from './keyboard';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';

const style = {
  contentStyle: {
    width: "90vw",
    maxWidth: "none",
  }
}

class GroupPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: 1,
      color: '',
      errorText: null,
      finished: false,
      group: '',
      keyMap: this.props.keyMap,
      open: false,
      stepIndex: 0
    }
  }

  handleOpen = () => {
    this.setState({
      animation: 1,
      color: '',
      errorText: null,
      finished: false,
      group: '',
      keyMap: this.props.keyMap,
      open: true,
      stepIndex: 0,
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleNext = () => {
    const stepIndex = this.state.stepIndex;
    if(this.checkErrors(stepIndex)) {
      if(stepIndex === 2) {
        this.props.updateMap(this.state.keyMap);
      }

      this.setState({
        errorText: '',
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 2,
        open: stepIndex < 2
      });
    } else {
      this.setState({
        errorText: "Field cannot be blank"
      });
    }
  };

  checkErrors(stepIndex) {
    console.log(stepIndex);
    switch (stepIndex) {
      case 0:
        if(this.state.group === '') { //Best error checking
          return false;
        }
        break;
      case 1:
        if(this.state.color === '') {
          return false;
        }
        break;
      case 2:
        if(this.state.keyMap.equals(this.props.keyMap)) {
          return false;
        }
        break;
      default: 
        return false;
    }
    return true;
  }

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  updateKeyGroup = (key) => {
    if(this.state.keyMap.get(key).group === this.state.group) {
      this.setState(({keyMap}) => ({
        keyMap: keyMap.update(key, () => ({group: null, color: "black", animation: "off"}))
      }));
    } else {
      this.setState(({keyMap}) => ({
        keyMap: keyMap.update(
          key, () => (
            {
              group: this.state.group, 
              color: this.state.color, 
              animation: this.state.animation
            }
          )
        )
      }));
    }
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return(
          <TextField
            fullWidth={true}
            hintText="Group"
            value={this.state.group}
            errorText={this.state.errorText}
            onChange={e => this.setState({group: e.target.value})}
          />
        );
      case 1:
        return(
          <div>
            <div>
              <TextField
                fullWidth={true}
                hintText="Color"
                value={this.state.color}
                errorText={this.state.errorText}
                onChange={e => this.setState({color: e.target.value})}
              />
            </div>
            <div>
              <p>Animation:</p>
              <DropDownMenu
                value={this.state.animation}
                onChange={this.handleChange}
                autoWidth={false}
              >
                <MenuItem value={1} primaryText="Animation 1" />
                <MenuItem value={2} primaryText="Animation 2" />
                <MenuItem value={3} primaryText="Animation 3" />
              </DropDownMenu>
            </div>
          </div>
        );
      case 2:
        return(
          <Keyboard 
            map={this.state.keyMap} 
            ignoreGroup={this.state.group}
            onClick={(key) => this.updateKeyGroup(key)}
          />
        );
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  render() {
    const stepIndex = this.state.stepIndex;
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Back"
        disabled={stepIndex === 0}
        onClick={this.handlePrev}
        style={{marginRight: 12}}
      />,
      <RaisedButton
        label={stepIndex === 2 ? 'Finish' : 'Next'}
        primary={true}
        onClick={this.handleNext}
      />
    ];

    return (
      <div>
        <RaisedButton label="Create Group" onClick={this.handleOpen} />
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          contentStyle={style.contentStyle}
        >
          <div>
            <Stepper activeStep={stepIndex}>
              <Step>
                <StepLabel>Name group</StepLabel>
              </Step>
              <Step>
                <StepLabel>Select color and effect</StepLabel>
              </Step>
              <Step>
                <StepLabel>Select keys</StepLabel>
              </Step>
            </Stepper>
          </div>
          <div>
            {this.getStepContent(stepIndex)}
          </div>
        </Dialog>
      </div>
    );
  }
}

export default GroupPicker