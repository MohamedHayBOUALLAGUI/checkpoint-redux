import React, { useState } from "react";
import { Card, Button, Form, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../JS/Actions/actionTodo";
import "./AddItem.css";

function AddTask() {
  const [task, setTask] = useState("");
  const addTodo = ()=>{
    task!==""?
  dispatch(
    addTask({
      description: task,
      isDone: false,
      id: Math.random(),
    })
  ):alert('Please enter a todo');
  setTask("")
}

  const dispatch = useDispatch();
  return (
    <div>
      <Card>
        <Card.Header>Checkpoint redux</Card.Header>

        <Card.Body>
          <Card.Title>TODO List</Card.Title>

          <Card.Text>
            <Form onSubmit={(e)=> {e.preventDefault();addTodo()} }>
              <Form.Row>
                <Col xs={2}></Col>
                <Col xs={8}>
                  <Form.Control
                    placeholder="Add task"
                    onChange={(e) => setTask(e.target.value)}
                    
                    value={task}
                 
                    
                  />
                </Col>
                <Col xs={1}>
                  <Button
                    variant="success"
                    onClick={()=> addTodo() }
                    
                  >
                    +
                  </Button>
                </Col>
                <Col xs={1}></Col>
              </Form.Row>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AddTask;
