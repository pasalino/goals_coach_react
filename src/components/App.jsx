import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import Confirm from 'react-bootstrap-confirm'
import AddGoals from './AddGoals';
import GoalsList from './GoalsList';
import CompletedGoalsList from './CompletedGoalList';

class App extends Component {

    signOut() {
        firebaseApp.auth().signOut();
    }

    render() {
        return (
            <div>

                <h3>Goals Coach</h3>
                <AddGoals/>
                <hr/>
                <h4>Goals</h4>
                <GoalsList/>
                <hr/>
                <h4>Complete Goals List</h4>
                <CompletedGoalsList/>
                <hr/>
                <button
                    className="btn btn-danger"
                    onClick={() => this.signOut()}
                >
                    Signout
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    //console.log('state', state);
    return {}
}

export default connect(mapStateToProps, null)(App);