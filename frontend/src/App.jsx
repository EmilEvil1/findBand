import React from 'react';
import {Provider} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {CookiesProvider} from 'react-cookie';
import {ThemeProvider} from "@material-ui/styles";
import store from "./store/store";
import {theme} from "./helpers/theme";
import Home from "./pages/home";
import Auth from "./pages/auth";


const App = () => {

    return (
        <CookiesProvider>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/auth' component={Auth} />
                        </Switch>
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        </CookiesProvider>
    );
}

export default App;
