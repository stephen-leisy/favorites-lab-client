import React, { Component } from 'react';
import { signInUser } from '../app.utils.js';
import FormComponent from './FormComponent.js';

export default class LoginPage extends Component {
    state = {
        email: '',
        password: '',
    };

    handleEmailChange = e => { this.setState({ email: e.target.value }) };
    handlePasswordChange = e => { this.setState({ password: e.target.value }) };
    handleUserSubmit = async e => {
        e.preventDefault();
        const token = await signInUser(this.state.email, this.state.password);
        this.props.handleToken(token);
        this.props.history.push('/movies');
    }
    render() {
        return (
            <div>
                LOG IN

                <FormComponent handleEmailChange={this.handleEmailChange} handlePasswordChange={this.handlePasswordChange} handleUserSubmit={this.handleUserSubmit} email={this.state.email} password={this.state.password} />
            </div>
        )
    }
}
