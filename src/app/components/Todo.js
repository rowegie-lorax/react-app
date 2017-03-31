import React from "react";
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';


class Todo extends React.Component {

    constructor(props){
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.onTodoChange = this.onTodoChange.bind(this);
        this.state = {
            name: "", 
            status: "Not Started"
        }  
    }

    handleKeyPress(event){
        if(event.key.toLowerCase() === "enter"){
            this.props.addTodo(this.state);
            this.setState({name:''});
        }
    }

    onTodoChange (event){
        this.setState({name: event.target.value});
    }

    render(){
        return (
            <div>
                <InputGroup size="lg">
                    <Input placeholder="Add Todo" value={this.state.name} onChange={this.onTodoChange} onKeyPress={this.handleKeyPress} />
                </InputGroup>
            </div>
        )
    }
}

export default Todo;
