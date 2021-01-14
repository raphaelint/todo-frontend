import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { deleteTodo } from "../../redux/actions/todoActions";

class DeleteTodo extends Component {
    componentDidMount(){
        this.props.dispatch(deleteTodo(this.props.history, this.props.todo));
    }

    render() {
        return (
            <div>
                Deleting
            </div>
        )
    }
}

const mapStateToProps = (state, router) => {
    const { params } = router.match
    return {
    todo: state.todos.items.filter(obj => obj.id == params.id)
}};

export default withRouter(connect(mapStateToProps)(DeleteTodo));