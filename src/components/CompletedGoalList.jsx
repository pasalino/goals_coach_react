import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCompleted } from '../actions';
import { completeGoalRef } from '../firebase';
import CompletedGoalItem from './CompletedGoalItem';


class CompletedGoalsList extends Component {
    componentDidMount() {
        console.log('mount CompleteGoalList');
        completeGoalRef.on('value', snap => {
            let completed_goals = [];
            snap.forEach(completeGoal => {
                let goalObject = completeGoal.val();
                const { completerEmail, submitterEmail, title } = goalObject;
                const serverKey = completeGoal.key;
                completed_goals.push({ completerEmail, submitterEmail, title, serverKey })
            })
            console.log('completedGoals', completed_goals);
            this.props.setCompleted(completed_goals);
        });
    }

     clearAll() {
        completeGoalRef.set([]);
    }

    render() {
        console.log('completedGoalsState', this.props)
        console.log('this.props.completedGoals', this.props.completed_goals)
        return (
            <div className='CompleteGoalsList'>
                {this.props.completed_goals.map((completed_goal, index) => {
                    return (
                        <CompletedGoalItem key={index} completed_goal={completed_goal} />
                    )
                })}
                <button 
                    style={{margin: '5px'}} 
                    className="btn btn-primary"
                    onClick={() => this.clearAll()}
                >
                    Clear All
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log('stateToProps', state);
    const { completed_goals } = state;
    return {
        completed_goals
    }
}

export default connect(mapStateToProps, { setCompleted })(CompletedGoalsList);