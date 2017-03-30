import React from "react";
import { render } from "react-dom";

import Todo from "./components/Todo";

class App extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div>
                <Todo/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {todo: state.todo};
}
export default App;