import React from 'react';

class Flexi extends React.Component {
  constructor(props){
    super(props);
    this.inputChange = this.inputChange.bind(this);
    this.dropDownChange = this.dropDownChange.bind(this);
    this.state={pname:{},pstate:{}};
  }
  dropDownChange(event){
    console.log('dropDownChange:'+event.target.value+' '+event.target.name);
    this.setState({pstate:event.target.value});
  }
  inputChange(event){
    console.log('inputChange: '+event.target.value+' '+event.target.name);
    this.setState({pname:event.target.value});
  }
  render(){
    const configObj = this.props.config;

    return(
      <div>
      <div>
        {configObj.map( x => {
          if(Object.prototype.hasOwnProperty.call(x, 'values')){
            return (<div><CreateDropDown labelName={x.label} optionValues={x.values} change={this.dropDownChange} /></div>)
          }
          else{
            return(<div><CreateTextField labelName={x.label} optionValues={x.value} change={this.inputChange}/></div>)
          }
        })}
      </div>
      <button onClick={(event)=>this.props.submitclick(this.state.pstate, this.state.pname)}>Submit</button>
      </div>
    );
  }
};

export default Flexi;

const CreateTextField = (props) =>{

  return(
    <label>
      {props.labelName}:
        <input type='text' name={props.labelName} value={props.optionValues} onChange = {props.change}/>
    </label>
  )
};

const CreateDropDown = (props) =>{
  return(
    <label>
      {props.labelName}:
        <select name={props.labelName} onChange = {props.change}>
          {props.optionValues.map(x => <option value={x}>{x}</option>)}
        </select>
    </label>
  )
};
