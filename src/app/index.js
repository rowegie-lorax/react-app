import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

import update from "react-addons-update";


import App from "./App";

const todoLists = [];

const todoReducer = (state, action) => {
    if (state.length === undefined ){
        state = todoLists;
    }
    switch (action.type) {
        case "ADD_TODO":
            var newTodo = {id: state.length+1, name: action.payload.name, status: action.payload.status,isFinished: action.payload.isFinished}
            state = update(state, {$push:[newTodo]});
            break;

        case "UPDATE_TODO":
            state = update(state, { [action.payload.id-1]:{$set:action.payload}})
            break;
        
        case "DELETE_TODO":
            state = [...state.slice(0, action.payload-1), ...state.slice(action.payload)]
            break;

        default:
            break;
    }
    return state;

}

const store = createStore( {todo: todoReducer}, {}, applyMiddleware(createLogger()));

store.subscribe(()=> {
    console.log("Store Updated" , store.getState());
});

store.dispatch({type:"ADD_TODO", payload: {name: "Test", status: "Not Started", isFinished:false} });
store.dispatch({type:"UPDATE_TODO", payload: {id: 1, name: "Test", status: "Finished", isFinished:true} });
store.dispatch({type:"DELETE_TODO", payload: 1 });

render(<App/> , document.getElementById("app"));