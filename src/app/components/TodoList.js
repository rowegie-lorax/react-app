import React from "react";
import 
{ 

	Badge,
	Card,
	CardText, 
	CardBlock, 
  	CardTitle,
  	ListGroupItem,
  	ListGroup
} from "reactstrap";


const TodoList = (props) => {
	
	return(
		<Card>
			<CardBlock>
          		<h1>Todolists : </h1>
        	</CardBlock>
			<CardBlock>
				<ListGroup>
					{
						props.todoLists.map(function(list, i){
							return (
								<ListGroupItem className="justify-content-between" key={i} color="secondary">
									{list.name}
									<Badge tag="a" href="#" color="danger" pill onClick={() => props.todoUpdate(list.id)}>X</Badge>
								</ListGroupItem>
							)
						})
					}
				</ListGroup>
			</CardBlock>
		</Card>
	);
} 

export default TodoList;