import React from 'react';

import { Redirect, Route, Switch } from "react-router-dom";

import SignIn from './pages/SignIn'

class App extends React.Component {
    render() {
        return (
            <Switch>
                <Redirect exact={true} from="/" to="/login/" />

                <Route path="/login/" >
                    <SignIn />
                </Route>

                <Route path="/dashboard/">
                </Route>
            </Switch>
        );
    }
}

export default App;
