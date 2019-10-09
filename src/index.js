import React from 'react';
import ReactDOM from 'react-dom';

import {ThemeProvider} from '@material-ui/styles'
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import App from './App';

import theme from './theme';
import store from './store';
import history from "./history";

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <BrowserRouter history={history} >
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </Provider>
    ,
    document.getElementById('root')
);
