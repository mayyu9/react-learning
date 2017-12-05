/*
1st case:
when we have two input fields and both are getting update with same event handler function
then it leads to change another elment value. this issue can be solved using the Refs.
this.ref: actually returns the node that we are referecing.

2nd case:
above issue is solved using the refs, as it returns the node which it is reffered to.
this.refs.a.value: returns the string provide by user in the a input field.
*/

import React from 'react';

class AppRef extends React.Component{
  constructor(){
    super();
    this.state = {a: ''};
    this.update = this.update.bind(this);
  }
  update(event){
    /*this.setState({a:event.target.value}) //----1st case*/
    this.setState({
      a: this.refs.a.value,
      b: this.refs.b.value
    })
  }

  render(){
    return(
      <div>
        <p>simple example with refs</p>
        <input
          ref="a"
          type="text" onChange= {this.update}/>{this.state.a}
        <hr />
        <input
          ref="b"
          type="text" onChange= {this.update}/>{this.state.b}
      </div>
    );
  }
}

export default AppRef;
