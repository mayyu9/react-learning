import React from 'react';
import ChildUnmount2 from './ChildUnmount2';
import ChildUnmount1 from './ChildUnmount1';

class ParentUnmount2 extends React.Component{
  constructor(props){
    super(props);
  }
  componentWillMount(){
    console.log('will mount parent2');
  }

  componentWillUnmount(){
    console.log('unmount parent2')
  }
  render(){
    console.log('render parent2');
    return(
      <div>
        Parent2
        <ChildUnmount1 />
        <ChildUnmount2 />
        </div>
    );
  }
};

export default ParentUnmount2;
