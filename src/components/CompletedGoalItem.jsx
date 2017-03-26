import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeGoalRef } from '../firebase';

class CompletedGoalItem extends Component {
    deleteGoal() {
        const { serverKey } = this.props.completed_goal;
        completeGoalRef.child(serverKey).remove();
    }

    render() {
        console.log("item props", this.props);
        const { submitterEmail, completerEmail, title } = this.props.completed_goal;
        return (
            <div  style={{ margin: '5px' }}>
                <button
                    style={{marginRight: '5px'}}
                    className="btn btn-sm btn-danger"
                    onClick={() => this.deleteGoal()}
                >
                    X
                </button>
                <strong>{title}</strong>
                <span style={{ marginRight: '5px' }}> submitted by <em>{submitterEmail}</em> and completed by <em>{completerEmail}</em></span>
                
            </div>
        )
    }
}


export default connect(null, null)(CompletedGoalItem);