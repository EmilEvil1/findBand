import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';

import Home from "./pages/home";
import Auth from "./pages/auth";

const App = () => {

    return (
            <CookiesProvider>
                {/*<Provider store={store}>*/}
                    <BrowserRouter>
                        <Switch>
                            {/*<CommonWrapper>*/}
                                <Route exact path='/'>
                                    <Home />
                                </Route>
                                <Route exact path='/auth'>
                                    <Auth />
                                </Route>
                            {/*</CommonWrapper>*/}
                        </Switch>
                    </BrowserRouter>
                {/*</Provider>*/}
            </CookiesProvider>
    );
}

export default App;
