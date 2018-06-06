import React from 'react';

class SecondChild extends React.Component{
  render(){
    console.log('Second Child');
    return(
      <div>
      {this.props.text}
      </div>
    );
  }
};

export default SecondChild;
