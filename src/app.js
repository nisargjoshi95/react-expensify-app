// Node modules
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import AppRouter from './routers/AppRouter.route';

// Styles
import 'normalize.css/normalize.css'
import './styles/styles.sass';

ReactDOM.render(<AppRouter/>, document.getElementById('app'));