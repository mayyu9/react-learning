/* inline styling to hanle binding */
/*user provided inputs is collected and that is passed to css styling using the state.  */

import React, { Component } from 'react';

class BindingExample extends Component {
  constructor() {
    super();
    this.state = {
      text: ' '
    };
  }
 change = (event) => {
   this.setState({text: event.target.value})
 }
  render() {
    const divStyle = {
      backgroundColor: this.state.text,
    };
    return (
      <div style={ divStyle }>
        <input type ='text' onChange = {this.change} />
        {this.state.text}
      </div>
    );
  }
}

export default BindingExample;
