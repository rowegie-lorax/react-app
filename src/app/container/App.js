import React from "react";
import { render } from "react-dom";
import { connect } from "react-redux";

import Todo from "../components/Todo";
import TodoList from "../components/TodoList";
import { addTodo, deleteTodo } from "../actions/todoActions"

import 
{
    Container, 
    Row, 
    Col,
    Jumbotron
} from "reactstrap";

class App extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <Jumbotron fluid>
                
                <Container fluid>
                    <Row>
                        <Col sm={{ size: 6, push: 2, pull: 2, offset: 2 }}>
                            <h1>Simple Todo App </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{ size: 6, push: 2, pull: 2, offset: 1 }}>
                            <Todo addTodo={(newTodo) => this.props.addTodo(newTodo) }/>
                        </Col>
                    </Row>
                    <Row></Row>
                    <Row>
                        <Col sm={{ size: 6, push: 2, pull: 2, offset: 1 }}>
                            {
                                this.props.todo.length > 0 ?
                                <TodoList todoLists={this.props.todo} todoUpdate={ (id) => this.props.deleteTodo(id) } />:
                                null
                            }
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        );
    }
}

const mapStateToProps = (state) => {
    return {todo: state.todo};
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (newTodo) => {
            dispatch(addTodo(newTodo));
        },
        deleteTodo: (id) => {
            dispatch(deleteTodo(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);