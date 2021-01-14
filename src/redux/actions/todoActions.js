import { FETCH_TODOS, FETCH_TODOS_BY_USERID, NEW_TODO, EDIT_TODO, DELETE_TODO} from "./types";

export const fetchTodos = () => dispatch => {
    fetch('http://localhost:8080/api/v1/todos')
    .then(res => res.json())
    .then(todos => dispatch({
        type: FETCH_TODOS,
        payload: todos
    }));
}

export const fetchTodosByUserId = (userId) => dispatch => {
    fetch(`http://localhost:8080/api/v1/todos/${userId}`)
    .then(res => res.json())
    .then(todosUser => dispatch({
        type: FETCH_TODOS_BY_USERID,
        payload: [todosUser]
    }));
}

export const createTodo = (history, todoData) => dispatch => {
    console.log(todoData);
    fetch('http://localhost:8080/api/v1/todos', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(todoData)
        })
        .then(res => res.json())
        .then(todo => 
            {
            dispatch({
            type: NEW_TODO,
            payload: todo
            })
            history.push(`/todo/user/${todoData.userId}`)
        });
}

export const editTodo = (history, todoData) => dispatch => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoData.id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(todoData)
        })
        .then(res => res.json())
        .then(todo => {
            dispatch({
            type: EDIT_TODO,
            payload: todo
        })
        history.push(`/todo/user/${todoData.userId}`)
    });
}

export const deleteTodo = (history, todo) => dispatch => {
    fetch(`http://localhost:8080/api/v1/todos/${todo[0].id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(id => {
            dispatch({
            type: DELETE_TODO,
            payload: {id:todo[0].id}
        })
        history.push(`/todo/user/${todo[0].userId}`)
    });
}