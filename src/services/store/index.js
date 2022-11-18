import { legacy_createStore as createStore, combineReducers } from "redux";
import persons from "../reducers/persons";
import filtration from "../reducers/filtration";

export const store = createStore(combineReducers({persons, filtration}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());