import React from 'react';
import Child from './Child';

class ParentToChild extends React.Component {
  state = {
    title: 'place holder title',
  }
  changeTheWorld = (newTitle) => {
    this.setState({title: newTitle});
  }
  render(){
    return(
      <div>
      <Child title={this.state.title} func={this.changeTheWorld.bind(this, 'my world')}/>
      </div>
    );
  }
}

export default ParentToChild;
