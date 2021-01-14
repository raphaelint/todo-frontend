import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { fetchUsers } from "../../redux/actions/userActions";
import { fetchTodos } from "../../redux/actions/todoActions";
import { Link } from 'react-router-dom';


class FetchUsers extends Component {
    
    componentDidMount() {
        if (this.props.users.length <= 0) {
            this.props.dispatch(fetchUsers());
            this.props.dispatch(fetchTodos());
        }
    }


    render() {
        const userItems = this.props.users.map(user => (
            <tr key={user.id}>
                <th scope="row">{user.name}</th>
                <td>
                    <Link className="btn btn-outline-primary mr-3" to={`/user/edit/${user.id}`}>Edit</Link>
                    <Link className="btn btn-outline-danger mr-3" to={`/user/delete/${user.id}`}>Delete </Link>
                     <Link className="btn btn-outline-secondary mr-3" to={`/todo/user/${user.id}`}>View Task</Link>
                     <Link className="btn btn-outline-success" to={`/todo/user/add/${user.id}`}>Add Task</Link>
                </td>
            </tr>
        ))
        return (
            <div>
                <br/>
                <div class="text-right"><Link className="btn btn-primary" to={`/user/create`}>Add new user</Link></div>
                <h3>List of Users</h3>
                <table class="table table-striped">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {userItems}
                </tbody>
                </table>                
            </div>
        )
    }
}

FetchUsers.propTypes = {
    fetchUsers: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    users: state.users.items
});

export default connect(mapStateToProps)(FetchUsers);