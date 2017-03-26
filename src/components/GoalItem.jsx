import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef, completeGoalRef } from '../firebase';

class GoalItem extends Component {
    componentDidMount() {
     
    }

    completeGoal() {
        const completerEmail = this.props.user.email;
        const { title, serverKey, email } = this.props.goal;
        console.log('email', email, 'title', title);
        goalRef.child(serverKey).remove();
        completeGoalRef.push({ completerEmail, submitterEmail: email, title });
    }

    render() {
        console.log("item props", this.props);
        const { email, title } = this.props.goal;
        return (
            <div style={{ margin: '5px' }}>
                <button
                    style={{marginRight: '5px'}}
                    className="btn btn-sm btn-primary"
                    onClick={() => this.completeGoal()}
                >
                    Complete
                </button>
                <strong>{title}</strong>
                <span style={{ marginRight: '5px' }}> submited by <em>{email}</em></span>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { user } = state;
    return {
        user
    }
}

export default connect(mapStateToProps, null)(GoalItem);