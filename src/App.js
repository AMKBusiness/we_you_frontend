import React from 'react';

import { Route, Switch } from "react-router-dom";

import Signin from './pages/Signin'
import Dashboard from "./pages/Dashboard";

class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/login/" >
                    <Signin/>
                </Route>
                <Route path="/dashboard/">
                    <Dashboard/>
                </Route>

            </Switch>
        );
    }
}

export default App;
