import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import './index.css';
// import Card from './Card';
import CardList from './CardList';
import registerServiceWorker from './registerServiceWorker';
import {robots} from './robots'; // {} bo nie ma export default, dzieki temu w robots.js moze byc wiecej exportow


ReactDOM.render(
<CardList robots={robots} />, 
document.getElementById('root'));

registerServiceWorker();
