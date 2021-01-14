import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { fetchUsers, editUser } from "../../redux/actions/userActions";
import PageHead from "../Util/PageHead";
import { withRouter } from "react-router-dom";
import UserForm from './forms/UserForm';


class EditUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: this.props.users,
            name: this.props.users.name
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {

        if (nextProps.users.name == null) {
            nextProps.dispatch(fetchUsers());
        }

        if (nextProps.users.name !== prevState.users.name) {
            return ({users: nextProps.users, name: nextProps.users.name }) 
        }
    }

    componentDidMount() {

        if (this.props.users.name == null) {
            this.props.dispatch(fetchUsers());
        }
        
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            id: this.props.users.id,
            name: this.state.name
        }

        this.props.dispatch(editUser(this.props.history, user));
    }

    render() {
        return (
            <div>
                <br />
                <PageHead title={"Edit user"} />
                <UserForm onSubmit={this.onSubmit} onChange={this.onChange} name={this.state.name} />
            </div>
        )
    }
}

const mapStateToProps = (state , router) => {
    const {params} = router.match
    return {
    users: state.users.items.find(user => user.id == params.id) || {},
    id: Number(params.id)
}};

export default withRouter(connect(mapStateToProps)(EditUser));
