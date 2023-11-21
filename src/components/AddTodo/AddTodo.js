import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Col, Row, Button, FormControl } from 'react-bootstrap';
import s from './AddTodo.module.css'
function AddTodo({todo, setTodo}) {

    const [value, setValue] = useState('')

    function saveTodo(){
        setTodo(
            [...todo, {
                id: uuidv4(),
                title: value,
                status: true
            }]
        )
        setValue('')
    }
    return (
        <Row>
            <Col className={s.addTodoForm}>
            <FormControl placeholder='Enter' value = {value} onChange={(e) => setValue(e.target.value)}/>
            <Button onClick={saveTodo} className={s.btn}>save</Button>
            </Col>
        </Row>
    )
}

export default AddTodo