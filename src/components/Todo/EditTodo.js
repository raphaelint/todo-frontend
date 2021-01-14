import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { editTodo } from "../../redux/actions/todoActions";
import TodoForm from './forms/TodoForm';
import { withRouter } from "react-router-dom";
import PageHead from "../Util/PageHead";


class EditTodo extends Component {
    constructor(props){
        super(props);

        
        this.state = {
            description: this.props.todo[0].description,
            statex: this.props.todo[0].state
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e) {
        this.setState({[e.target.name] :  e.target.value})
    }

    onSubmit(e){
        e.preventDefault();

        const todo = {
            description: this.state.description,
            state: this.state.statex,
            userId: this.props.todo[0].userId,
            id: this.props.id
        }

        this.props.dispatch(editTodo(this.props.history, todo));
    }

    render() {
        return (
            <div>
                <br />
                <PageHead title={"Edit Todo"} />
                <TodoForm onSubmit={this.onSubmit} onChange={this.onChange} description={this.state.description} state={this.state.statex}/>
            </div>
        )
    }
}

EditTodo.propTypes = {
    editTodo: PropTypes.func.isRequired
}

const mapStateToProps = (state , router) => {
    const {params} = router.match
 return{
    todo: state.todos.items.filter(obj => obj.id == params.id), id: Number(params.id)
}};

export default withRouter(connect(mapStateToProps)(EditTodo));