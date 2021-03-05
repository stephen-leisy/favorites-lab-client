import React, { Component } from 'react'

export default class FormComponent extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleUserSubmit}>
                <label>
                    Email:
                <input value={this.props.email} onChange={this.props.handleEmailChange} />
                </label>
                <label>
                    Password:
                <input value={this.props.password} onChange={this.props.handlePasswordChange} />
                </label>
                <button>Submit</button>
            </form>
        )
    }
}
