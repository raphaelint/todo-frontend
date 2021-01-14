import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { createTodo } from "../../redux/actions/todoActions";
import TodoForm from './forms/TodoForm';
import { withRouter } from "react-router-dom";
import PageHead from "../Util/PageHead";


class CreateTodo extends Component {
    constructor(props){
        super(props);

        this.state = {
            description: "",
            statex: ""
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
            userId: this.props.user.id
        }

        this.props.dispatch(createTodo(this.props.history, todo));
    }

    render() {
        return (
            <div>
                <br />
                <PageHead title={"Create new Todo"} />
                <TodoForm onSubmit={this.onSubmit} onChange={this.onChange} description={this.state.description} statex={this.state.statex}/>
            </div>
        )
    }
}

CreateTodo.propTypes = {
    createTodo: PropTypes.func.isRequired
}

const mapStateToProps = (state , router) => {
    const { params } = router.match
    return {
    user: {id: Number(params.id)}
}};

export default withRouter(connect(mapStateToProps)(CreateTodo));