import React from "react";
import {Button} from 'react-bootstrap';
import s from './TodoList.module.css'
function TodoList ({todo, setTodo}) {

    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id !== id);
        setTodo(newTodo);
    }
    
    function editTodo(id) {
        let newTodo = [...todo].filter(item => {
            if(item.id === id) {
                item.title = prompt('Enter new title');
            }
            return item
        });
        setTodo(newTodo);
    }

    return (
        <div>
            {
                todo.map( item => (
                <div key={item.id} className={s.listItems}>
                    <div> {item.title} </div>
                    <Button onClick={() => deleteTodo(item.id)}>delete</Button>
                    <Button onClick={() => editTodo(item.id)} className={s.btn}>edit</Button>
                </div>
                ))
            }
        </div>
    )
}

export default TodoList