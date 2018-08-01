import React from 'react';

class ParentUnmount1 extends React.Component{
  constructor(props){
    super(props);
  }
  componentWillMount(){
    console.log('will mount parent1');
  }

  componentWillUnmount(){
    console.log('unmount parent1')
  }
  render(){
    console.log('render parent1');
    return(
      <div>
        Parent1
        </div>
    );
  }
};

export default ParentUnmount1;
