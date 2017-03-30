import React from "react";
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

class Todo extends React.Component{
    render(){
        return(
            <div>
                <InputGroup size="lg">
                    <InputGroupAddon>@lg</InputGroupAddon>
                    <Input />
                </InputGroup>
                <br />
                <InputGroup>
                    <InputGroupAddon>@normal</InputGroupAddon>
                    <Input />
                </InputGroup>
                <br />
                <InputGroup size="sm">
                    <InputGroupAddon>@sm</InputGroupAddon>
                    <Input />
                </InputGroup>
            </div>
        );
    }
}

export default Todo;