/*
Refs can be used even for callback functionality.
*/

import React from 'react';

class AppRefCallback extends React.Component{
  constructor(){
    super();
    this.state = {a: ''};
    this.update = this.update.bind(this);
  }
  update(event){
    /*this.setState({a:event.target.value}) //----1st case*/
    this.setState({
      a: this.a.refs.mahi.value,
      b: this.refs.b.value
    })
  }

  render(){
    return(
      <div>
        <p> refs with callback functionality</p>
        <Input
          ref={ component => this.a = component}
          update= {this.update}/>{this.state.a}
        <hr />
        <input
          ref="b"
          type="text" onChange= {this.update}/>{this.state.b}
      </div>
    );
  }
}

class Input extends React.Component{
  render(){
    return(
      <div>
        <input ref="mahi"
          type="text"
          onChange={this.props.update} />
      </div>
    )
  }
}

export default AppRefCallback;
