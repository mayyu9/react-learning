import React from 'react';
import Clock from './Clock';

/*
  in this example i am calling a clock component, which takes a props.
  on click of the button i am unmounting the clock 1 component. this displays the unmounting life cycle.
*/

class Clock2 extends React.Component {

    constructor(){
       super();
       this.state = {unMount: false}
    }

    click(){
       console.log('unmounted successfully');
       this.setState({unMount: !this.state.unMount})
    }

    render(){
      return (
         <div>
            <button onClick={() => this.click()}>Unmount first</button>
             {!this.state.unMount && <Clock no={1}/>}
             <Clock no={2}/>
         </div>
      );
    }
  }

  export default Clock2;
