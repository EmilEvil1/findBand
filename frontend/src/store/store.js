import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {reducer} from "./reducer/reducer";

const rootReducer = combineReducers({
    state: reducer,
});

const configurationStore = () => {

    const store = createStore(rootReducer, compose(
        applyMiddleware(
            thunkMiddleware
        ),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

    return store
};

export default configurationStore();
