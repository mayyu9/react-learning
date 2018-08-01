import React from 'react';
import ParentUnmount1 from './ParentUnmount1';
// import ParentUnmount2 from './ParentUnmount2';

class ParentUnmount extends React.Component{
  constructor(props){
    super(props);
  }
  componentWillMount(){
    console.log('will mount parent');
  }

  componentWillUnmount(){
    console.log('unmount parent')
  }
  render(){
    console.log('render parent');
    return(
      <div>
        Parent
        <ParentUnmount1 />
        
        </div>
    );
  }
};

export default ParentUnmount;
