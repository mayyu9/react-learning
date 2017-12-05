/*
The purpose of a higher order component is to share common functionality or information between multiple components.
The sole function of a higher order component is to take in a component and return a new component.
We're going to go ahead and call our higher order component HOC.
It's going to take in that InnerComponent, and it's going to return class extends React.Component.

using  HOC components- we can keep all the common functionality in one place.
in this case we kept update method in HOC component. that is passed as props to other compoennts. 
*/

import React from 'react';

const HOC =(InnerComponent) => class extends React.Component{
  constructor(){
    super();
    this.state={count: 0};
    this.update= this.update.bind(this);
  }
  componentWillMount(){
    console.log("Will Mount");
  }

  update(){
    this.setState({count: this.state.count + 1});
  }
  render(){
    return (
      <InnerComponent
        {...this.props}
        {...this.state}
        update={ this.update}
        />
    )
  }
}

class HOCApp extends React.Component{
  componentWillMount(){
    //console.log("HOCApp Will Mount");
  }
  render(){
    //console.log("HOC render");
    return(
      <div>
        <p>hoc</p>
        <Button>button</Button>
        <hr />
        <LabelHoc>label</LabelHoc>
      </div>
    );
  }
}

const Button =HOC( (props) => <button onClick={props.update}>
{props.children} - {props.count}
</button> )

class Label extends React.Component{
  componentWillMount(){
    //console.log("label Will Mount");
  }
  render(){
    //console.log("Label render");
    return(
      <label onMouseMove= {this.props.update}>{this.props.children} - {this.props.count}
      </label>
    );
  }
}

const LabelHoc = HOC(Label)

export default HOCApp;
