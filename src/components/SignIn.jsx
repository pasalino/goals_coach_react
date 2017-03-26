import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase'

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }

    signIn() {
        console.log("this.state", this.state);
        const { email, password } = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({email:'', password:''});
            })
            .catch(error => {
                console.log('error', error);
                this.setState({error});
            })
    }

    render() {
        return (
            <div className='form-inline' style={{margin: '5%'}}>
                <h2>Sign In</h2>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="email"
                        style={{marginRight: '5%'}}
                        onChange={event => this.setState({ email: event.target.value })}
                        value={this.state.email}
                    />
                    <input
                        type="password"
                        className="form-control"
                        placeholder="password"
                        style={{marginRight: '5%'}}
                        onChange={event => this.setState({ password: event.target.value })}
                        value={this.state.password}
                    />
                    <button
                        className="btn btn-primary"
                        type="button"
                        style={{marginTop: '5%'}}
                        onClick={() => this.signIn()}
                    >
                        Sign In
                    </button>
                </div>
                <div>{this.state.error.message}</div>
                <div><Link to={"/signup"}>Sign Up</Link></div>
            </div>
        )
    }
}

export default SignIn;