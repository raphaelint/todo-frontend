import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { deleteUser } from "../../redux/actions/userActions";

class DeleteUser extends Component {
    componentDidMount(){
        this.props.dispatch(deleteUser(this.props.history, this.props.id));
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
    id: {id: Number(params.id)}
}};

export default withRouter(connect(mapStateToProps)(DeleteUser));