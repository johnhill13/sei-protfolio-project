
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Home from './Home';
import serviceWorker from './serviceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
serviceWorker();


