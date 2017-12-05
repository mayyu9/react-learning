/*react cloneElement creates a new element from which it is cloned
*/

import React from 'react';

class Clone extends React.Component{
  render(){
    return(
      <Buttons>
        <button value="A">A</button>
        <button value="B">B</button>
        <button value="C">C</button>
      </Buttons>
    );
  }
}

class Buttons extends React.Component{
  constructor(){
    super();
    this.state = {selected: 'None'};

  }

  selectItems(selected){
    this.setState({selected});
  }
  render(){
    let fn = child =>
      React.cloneElement(child, {
        onClick: this.selectItems.bind(this,child.props.value)
      })
    let items = React.Children.map(this.props.children, fn);
    //let items = this.props.children;
    return(
      <div>
        <h2>You have selected: {this.state.selected}</h2>
        {items}
      </div>
    );
  }
}

export default Clone;
