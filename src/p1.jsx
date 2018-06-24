import React from 'react'
import P2 from './p2'

/*
this is to test whether the child gets rerendered when we pass props: yes child gets re-rendered
when we won't pass data from the parent to child, even then the child is getting re-rendered.
*/
class P1 extends React.Component{
  constructor(props){
    super(props);
    this.state={a:Math.random(),b:Math.random(),c:Math.random()};
  }

  componentDidMount(){
    setInterval(()=>{this.setState({c:Math.random()})},1000);
  }

  render(){
    console.log('a: '+this.state.a+' '+'b: '+this.state.b+' '+'c: '+this.state.c);
    return(
      <div>
        <P2  />
      </div>
    );
  }
};

export default P1;
