import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchTodos } from "../../redux/actions/todoActions";
import { withRouter } from "react-router-dom";
import PageHead from "../Util/PageHead";
import { Link } from 'react-router-dom';



class FetchTodos extends Component {

    componentDidMount() {
        if (this.props.todos.length <= 0) {

            this.props.dispatch(fetchTodos())
        }
    }

    getUser(userid) {
        let users = this.props.users.filter(obj => obj.id == userid);

        if (users.length == 0) {
            return "";
        }
        return users[0].name;
    }
    
    render() {
        const todoItems = this.props.todos.map(todo => ( 
            <tr key={todo.id}>
                <th scope="row">{todo.description}</th>
                <td>{this.getUser(todo.userId)}
                </td>
                <td>{todo.state}</td>
                <td>
                    <Link className="btn btn-outline-primary mr-3" to={`/todo/edit/${todo.id}`}>Edit</Link>
                    <Link className="btn btn-outline-danger mr-3" to={`/todo/delete/${todo.id}`}>Delete</Link>
                </td>
            </tr>
        ))
        return (
            <div><br />
                <PageHead title={"List of Todos"} />
                <table class="table table-striped">
                <thead>
                    <tr>
                    <th>Title</th>
                    <th>User</th>
                    <th>Completed</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {todoItems}
                </tbody>
                </table>                
            </div>
        )
    }
}


const mapStateToProps = (state , router) => {
    const {params} = router.match

    if (Object.keys(params).length === 0) {
        return{
            todos: state.todos.items,
            users: state.users.items
        }
    }
    else{
        return{
            todos: state.todos.items.filter(obj => obj.userId == params.userid),
            users: state.users.items
        }
    }
};

export default withRouter(connect(mapStateToProps)(FetchTodos));