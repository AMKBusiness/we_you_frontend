import React from 'react';
import ReactDOM from 'react-dom';

import {Router} from "react-router-dom";
import {Provider} from "react-redux";
import {ThemeProvider} from '@material-ui/styles';

import App from './App';

import theme from './theme';
import store from './store';
import history from "./history";

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Router history={history} >
                <App />
            </Router>
        </ThemeProvider>
    </Provider>
    ,
    document.getElementById('root')
);
