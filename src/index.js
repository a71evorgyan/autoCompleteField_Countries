import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Countries from './Components/countries';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Countries />, document.getElementById('root'));
registerServiceWorker();
