import React from 'react';
import {Provider} from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import store from "./store/store";
import Home from "./pages/home";
import Auth from "./pages/auth";

const App = () => {
    return (
        <CookiesProvider>
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/auth' component={Auth} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        </CookiesProvider>
    );
}

export default App;
