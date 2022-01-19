import React from 'react';
import {Provider} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {CookiesProvider} from 'react-cookie';
import {ThemeProvider} from "@material-ui/styles";
import store from "./store/store";
import {theme} from "./helpers/theme";
import Home from "./pages/home";
import Auth from "./pages/auth";
import Profile from "./pages/profile";
import SearchResult from "./pages/search";
import "./css/banner.css";


const App = () => {
    return (
        <CookiesProvider>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/auth' component={Auth} />
                            <Route exact path='/profile' component={Profile} />
                            <Route exact path='/search' component={SearchResult} />
                        </Switch>
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        </CookiesProvider>
    );
}

export default App;
