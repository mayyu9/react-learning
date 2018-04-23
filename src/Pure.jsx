import React, {PureComponent} from 'react';

const Temp = (props) => {
  console.log('render Temp');
  return (<div>{props.val}</div>);
}
//Pure components sre quiet dangerous, beacuse it does a shallow copy, i.e object comparison,
//specially when we have nested components, then if there is change in leaf level components
// then because of no change in parent nothing will get re rendered. 
class Pure extends PureComponent {
  state = { val: 1 }
  componentDidMount() {
    console.log('componentDidMount');
    //ajax calls needs to be handled here bcoz,this life cycle method gets
    //triggered only once after the component is mounted. after this for any number of re-renders it
    // wont get triggered.
    setInterval( () => {
      this.setState( () => {
        return { val: Math.random() }
      });
    }, 2000)
  }
  // we can avoid usage of shouldComponentUpdate by making use of pure components
  // shouldComponentUpdate(nextProp, nextState) {
  //   console.log('shouldComponentUpdate', JSON.stringify(nextProp));
  //   console.log('shouldComponentUpdate', JSON.stringify(nextState));
  //   return (this.state.val === nextState.val? false : true);
  // }
  render() {
    console.log('render main');
    return (
      <div>
      <Temp val={this.state.val} />
      </div>
    );
  }
}

export default Pure;
