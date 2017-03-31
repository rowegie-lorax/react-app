import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";


import todo from "./reducers/todoReducer";

export default createStore( 
    combineReducers({todo}), 
    {}, 
    applyMiddleware(createLogger())
);

