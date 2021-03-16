import React from 'react';
import Header from "./components/Header";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

import {Provider} from 'react-redux';

import {store} from './store';

const App1 = React.lazy(() => import('app1/App'));
const App2 = React.lazy(() => import('app2/App'));

export default () => (
    <Provider store={store}>
        <BrowserRouter>
            <Header>
                <div>
                    <Link to="/">App 1</Link> - <Link to="/app2">App 2</Link>
                </div>
            </Header>
            <React.Suspense fallback='Loading'>
                <React.Fragment>
                    <Switch>
                        <Route exact path="/">
                            <App1/>
                        </Route>
                        <Route exact path="/app2">
                            <App2 store={store}/>
                        </Route>
                    </Switch>
                </React.Fragment>
            </React.Suspense>
        </BrowserRouter>
    </Provider>
);
