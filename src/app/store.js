import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";


import todo from "./reducers/todoReducer";

export default createStore( 
    combineReducers({todo}), 
    {}, 
    applyMiddleware(createLogger(), thunk)
);

