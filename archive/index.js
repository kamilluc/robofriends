import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Kamil from './Kamil';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Kamil myName={'Kamil'} />, document.getElementById('root'));
registerServiceWorker();
