import React from 'react';

class ChildUnmount2 extends React.Component{
  constructor(props){
    super(props);
  }
  componentWillMount(){
    console.log('will mount child2');
  }

  componentWillUnmount(){
    console.log('unmount child2')
  }
  render(){
    console.log('render child2');
    return(
      <div>
        child2
        </div>
    );
  }
};

export default ChildUnmount2;
