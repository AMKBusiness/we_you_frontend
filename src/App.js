import React from 'react';

import { Route, Switch } from "react-router-dom";

import SignIn from './pages/SignIn'

class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/login/" >
                    <SignIn/>
                </Route>
            </Switch>
        );
    }
}

export default App;
