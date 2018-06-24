import React from 'react';
import { flexiConfig } from './MockData';
import Flexi from './Flexi';

class Parent extends React.Component {
  constructor(pstate, pname,props){
    super(props);
    this.submitClick = this.submitClick.bind(this);
  }
  submitClick(pname,pstate,event){
    console.log('submitClick: '+pname+' '+pstate);
  }
  render(){
    const data = flexiConfig.items;
    return(
      <Flexi config = { data } submitclick = {this.submitClick} />
    );
  }
}

export default Parent
