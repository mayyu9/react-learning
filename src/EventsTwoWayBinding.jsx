import React from 'react';

class TwoWayBinding extends React.Component {
  state = {name: 'Mahendar'}
  changeName = (newName) => {
    this.setState({name: newName});
  }
  changeNameInput = (event) => {
    this.setState({name: event.target.value})
  }
  render(){
    return(
      <div>
      <button onClick={() => this.changeName('thakur :(')}>Change State using annnoymous function</button>
      <button onClick={this.changeName.bind(this,'thakur :)')}>Change State using bind</button>
      <div>{this.state.name}</div>
      <br /> <br />
      <input type='text' onChange={this.changeNameInput} value={this.state.name} />
      <div>{this.state.name}</div>
      </div>
    );
  }
}
export default TwoWayBinding;
