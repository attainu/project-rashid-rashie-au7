// import React from 'react';
// import ReactDOM from 'react-dom';
// import Routes from './Routes';
// // import App from './App';
// // import { Provider } from 'react-redux';
// // import { createStore, applyMiddleware, compose } from 'redux';
// // import reducers from '..src/reducers';
// // import reduxThunk from "redux-thunk";

// // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// // const store = createStore(reducers,composeEnhancers(applyMiddleware(reduxThunk)));

// ReactDOM.render( <Routes />

//   document.getElementById('root')
// );

// {/* <Provider store={store}>
//  </Provider>, */}

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './Routes';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 


ReactDOM.render(<Provider store={store}>
  <Routes />
</Provider>, document.getElementById('root'));;












