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

ReactDOM.render(<Pure />, document.getElementById('root'));
registerServiceWorker();
