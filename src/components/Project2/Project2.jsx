import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";

class App extends Component {
    constructor(props) {
        super(props);

        // Setting up state
        this.state = {
            userInput: "",
            list: [],
        };
    }

    // Set a user input value
    updateInput(value) {
        this.setState({
            userInput: value,
        });
    }

    // Add item if user input in not empty
    addItem() {
        if (this.state.userInput !== "") {
            const userInput = {
                // Add a random id which is used to delete
                id: Math.random(),

                // Add a user value to list
                value: this.state.userInput,
            };

            // Update list
            const list = [...this.state.list];
            list.push(userInput);

            // reset state
            this.setState({
                list,
                userInput: "",
            });
        }
    }

    // Function to delete item from list use id to delete
    deleteItem(key) {
        const list = [...this.state.list];

        // Filter values and leave value which we need to delete
        const updateList = list.filter((item) => item.id !== key);

        // Update list in state
        this.setState({
            list: updateList,
        });
    }

    editItem = (index) => {
      const todos = [...this.state.list];
      const editedTodo = prompt('Edit the todo:');
      if (editedTodo !== null && editedTodo.trim() !== '') {
        let updatedTodos = [...todos]
        updatedTodos[index].value= editedTodo
        this.setState({
          list: updatedTodos,
      });
      }
    }

    render() {
        return (
            <Container>
                <Row
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "3rem",
                        fontWeight: "bolder",
                    }}
                >
                    TODO LIST
                </Row>

                <hr />
                <Row>
                    <Col md={{ span: 5, offset: 4 }}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="add item . . . "
                                size="lg"
                                value={this.state.userInput}
                                onChange={(item) =>
                                    this.updateInput(item.target.value)
                                }
                                aria-label="add something"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup>
                                <Button
                                    variant="dark"
                                    className="mt-2"
                                    onClick={() => this.addItem()}
                                >
                                    ADD
                                </Button>
                            </InputGroup>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 5, offset: 4 }}>
                        <ListGroup>
                            {/* map over and print items */}
                            {this.state.list.map((item, index) => {
                                return (
                                  <div key = {index} > 
                                    <ListGroup.Item
                                        variant="dark"
                                        action
                                        style={{display:"flex",
                                                justifyContent:'space-between'
                                      }}
                                    >
                                        {item.value}
                                        <span>
                                        <Button style={{marginRight:"10px"}}
                                        variant = "light"
                                        onClick={() => this.deleteItem(item.id)}>
                                          Delete
                                        </Button>
                                        <Button variant = "light"
                                        onClick={() => this.editItem(index)}>
                                          Edit
                                        </Button>
                                        </span>
                                    </ListGroup.Item>
                                  </div>
                                );
                            })}
                        </ListGroup>
                    </Col>
                </Row>


                <div className="mx-8 my-14">
                    <div className="text-xl">
                        <h4>A to-do list is a simple tool that helps you organize and prioritize tasks. It's a way to keep track of everything you need to do, whether it's work projects, personal errands, or daily chores.</h4>
                    </div>

                    <div className='text-2xl mt-10 my-8'>
                        <h5>By using a to-do list, you can:</h5>
                        <ul className='text-xl  mt-6 my-3'>
                            <li className='my-1'><b>Increase productivity:</b>Stay focused on what needs to be done.</li>

                            <li className='my-1'><b>Reduce stress:</b>Avoid feeling overwhelmed by a long list of tasks.</li>
                            <li className='my-1'><b>Improve time management: </b> Efficiently allocate your time and resources.</li>
                            <li className='my-1'><b>Achieve goals:</b>Stay on track to accomplish your objectives.</li>
                        </ul>

                    </div>

                    <div className="">
                        <h4 className="text-base">A to-do list is a powerful tool for staying organized and productive. By creating a list of tasks, prioritizing them, and setting deadlines, you can effectively manage your time and achieve your goals. Whether you're a busy professional, a student, or simply someone who wants to get more done, a to-do list can help you stay on top of your responsibilities and reduce stress.</h4>
                    </div>
                </div>

                
            </Container>

            
        );
    }
}

export default App;