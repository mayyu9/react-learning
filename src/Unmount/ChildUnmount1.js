import React from 'react';

class ChildUnmount1 extends React.Component{
  constructor(props){
    super(props);
  }
  componentWillMount(){
    console.log('will mount child1');
  }

  componentWillUnmount(){
    console.log('unmount child1')
  }
  render(){
    console.log('render child1');
    return(
      <div>
        child1
        </div>
    );
  }
};

export default ChildUnmount1;
