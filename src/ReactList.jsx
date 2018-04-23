import React from 'react';
import User from './User';
class ReactList extends React.Component {
  state = {
    users: [
    {name: 'john', age: 20},
    {name: 'peter', age: 25},
    {name: 'jill', age: 30},
  ]
}
deleteUser = (index, event) => {
const users = Object.assign([], this.state.users);
users.splice(index,1);
this.setState({users: users});
}
  render(){
    return(
      <div>
      <ul>
      {this.state.users.map((user, index) =>{
        return <User age={user.age}
        key={index + 1}
        deleteEvent={this.deleteUser.bind(this, index)}
        >{user.name}</User>
      }
    )}
      </ul>
      </div>
    );
  }
}

export default ReactList;
