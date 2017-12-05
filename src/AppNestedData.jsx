/*
 In order to access nested values or components in a component, we can use props.children.
*/

import React from 'react'

class AppNestedData extends React.Component{
  render(){
    return(
      <div>
        <p>access nested values or components in a component</p>
        <Button>I <Heart /> React</Button>
      </div>

    );
  }
}

//stateless component
const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component{
  render(){
    return <span>&hearts;</span>
  }
}

export default AppNestedData;
