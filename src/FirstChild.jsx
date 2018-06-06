import React from 'react';

class FirstChild extends React.Component{
  render(){
    console.log('First Child');
    return(
      <div>
      {this.props.text}
      </div>
    );
  }
};

export default FirstChild;
