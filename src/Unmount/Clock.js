import React from 'react';
import ChildUnmount2 from './ChildUnmount2';
import ChildUnmount1 from './ChildUnmount1';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {count: 1};
    }

    /*
        when the component is mounted, set a timeinterval loop which will render the component.
        when we unmount first clock component, even then also clock 1 function exists.
        
        Reason why still methods exist even after component got :

        React will remove the Components from the UI and ready them for Garbage Collection, however even when the DOM elements have been removed 
        the class instances are not so the methods, props still exist and hence setInterval continues to be executed.
        Only when the references to this.ticks() and this.props are not longer used, they will be eligible for garbage collection.

        reffer:
        https://stackoverflow.com/questions/45162985/how-function-exist-after-component-has-been-unmounted
    */
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        3000
      );
    }

    componentWillUnmount() {
      //clearInterval(this.timerID);
      console.log('unmount:'+this.props.no );
    }

    tick() {
       console.log('called', this.props.no);
    }

    render() {
      return (
        <div>
          <h1>Clock {this.props.no}</h1>
          <ChildUnmount1 />
          <ChildUnmount2 />
        </div>
      );
    }
  };

  export default Clock;
