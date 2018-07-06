import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import './index.css';
import Card from './Card';
import registerServiceWorker from './registerServiceWorker';
import {robots} from './robots'; // {} bo nie ma export default, dzieki temu w robots.js moze byc wiecej exportow


ReactDOM.render(
<div>
    <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
    <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
    <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
</div>, 
document.getElementById('root'));

registerServiceWorker();
