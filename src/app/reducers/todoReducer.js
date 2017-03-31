import update from "react-addons-update";

const todoReducer = (state, action) => {
    const todoLists = [];

    if ( typeof(state) === "undefined" ){
        state = todoLists;
    }
    switch (action.type) {
        case "ADD_TODO":
            var newTodo = {id: state.length+1, name: action.payload.name}
            state = update(state, {$push:[newTodo]});
            break;

        case "DELETE_TODO":
            state = [...state.slice(0, action.payload-1), ...state.slice(action.payload)]
            break;

        default:
            break;  
    }
    return state;

}

export default todoReducer;