import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import BindingExample from './BindingExample';
import ParentToChild from './ParentToChild';
import TwoWayBinding from './EventsTwoWayBinding';
import registerServiceWorker from './registerServiceWorker';
import ReactList from './ReactList';
import Pure from './Pure';
import Login from './LoginFrom';
import Search from './Search';
// import Parent from './Pure_components_example';
import P1 from './p1'
import Parent from './eGovt/parent';
import ParentUnmount from './Unmount/ParentUnmount';
import Clock2 from './Unmount/Clock2';

ReactDOM.render(<Clock2 />, document.getElementById('root'));
registerServiceWorker();
