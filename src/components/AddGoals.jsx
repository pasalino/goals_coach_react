import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';

class AddGoals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }

    addGoal() {
        if (this.state.title === '') {
            alert('Goal title is required');
            return
        }
        console.log('this.state', this.state);
        const { title } = this.state;
        const { email } = this.props.user;
        goalRef.push({ email, title });
        this.setState({ title: '' });
    }

    render() {
        return (
            <div className='form-inline' style={{margin:'5px'}}>
                <div className="from-group">
                    <input
                        type="text"
                        placeholder="Add a goal"
                        className="form-control"
                        style={{ marginRight: '5px' }}
                        value={this.state.title}
                        onChange={event => this.setState({ title: event.target.value })}
                        onKeyPress={event => { if (event.key === 'Enter') this.addGoal(); }}
                    />
                    <button
                        className="btn btn-success"
                        type="button"
                        onClick={() => this.addGoal()}

                    >
                        Submit
                    </button>
                </div>
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

export default connect(mapStateToProps, null)(AddGoals);