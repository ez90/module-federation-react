import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function ModuleOne() {
    return <h2>ModuleOne</h2>;
}

function ModuleTwo() {
    return <h2>ModuleTwo</h2>;
}

export default () => (
    <Router>
        <div>
            <h1>App 1</h1>
            <ul>
                <li>
                    <Link to="/">Module one</Link>
                </li>
                <li>
                    <Link to="/module-2">Module two</Link>
                </li>
            </ul>

            <Switch>
                <Route path="/module-2">
                    <ModuleTwo />
                </Route>
                <Route path="/">
                    <ModuleOne />
                </Route>
            </Switch>
        </div>
    </Router>
);
