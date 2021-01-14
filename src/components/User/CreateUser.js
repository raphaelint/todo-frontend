import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import PageHead from "../Util/PageHead";
import UserForm from './forms/UserForm';
import { createUser } from "../../redux/actions/userActions";


class CreateUser extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: "",
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name] :  e.target.value})
    }

    onSubmit(e){
        e.preventDefault();

        const newUser = {
            name: this.state.name,
        }

        this.props.dispatch(createUser(this.props.history, newUser));
    }

    render() {
        return (
            <div><br/>
                <PageHead title={"Create user"} />
                <UserForm onSubmit={this.onSubmit} onChange={this.onChange} name={this.state.name} />
            </div>
        )
    }
}


CreateUser.propTypes = {
    createUser: PropTypes.func.isRequired
}

export default withRouter(connect(null)(CreateUser));