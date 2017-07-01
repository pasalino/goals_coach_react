import React, { Component } from 'react';
import { goalRef } from '../firebase';
import { connect } from 'react-redux';
import { setGoals } from '../actions';
import GoalItem from './GoalItem';

class GoalsList extends Component {
    componentDidMount() {
        console.log('mount GoalList');
        goalRef.on('value', snap => {
            let goals = [];
            snap.forEach(goal => {
                let goalObject = goal.val();
                const { email, title } = goalObject;
                const serverKey = goal.key;
                goals.push({ email, title, serverKey })
            })
            console.log('goals', goals);
            this.props.setGoals(goals);
        });
    }

    render() {
        console.log('state', this.state)
        console.log('this.props.goals', this.props.goals)
        return (
            <div className='GoalsList'>
                {
                    this.props.goals.map((goal,index)=> {
                        return(
                            <GoalItem key={index} goal={goal} />
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const {goals} = state;
    return {
        goals
    }
}

export default connect(mapStateToProps, { setGoals })(GoalsList);