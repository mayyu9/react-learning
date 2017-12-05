import React from 'react';

class ChildUtils extends React.Component{
  render(){
    return(
      <Parent>
        <div className="child A"></div>

      </Parent>
    );
  }
}

class Parent extends React.Component{
  render(){
    console.log(this.props.children);
    //for multiple child it works.
    //let items = this.props.children.map(child => child);

    //for single child
    //let items = React.Children
      //.map(this.props.children, child => child);

    //get Array of Child
    //let itemsArray= React.Children.toArray(this.props.children);

    //foreach
    /*let items =  React.Children
        .forEach(this.props.children, child => console.log(child.props.className));
        */

    //for singlke child
    let items = React.Children.only(this.props.children);
    console.log("items:" +items);
    return null;
  }
}

export default ChildUtils;
