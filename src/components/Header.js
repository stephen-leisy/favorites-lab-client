import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/movies">Movie Search</NavLink>
                {
                    this.props.token && <>
                        <NavLink to="/favorites">Favorites</NavLink>
                        <button onClick={this.props.handleLogOut}>Log Out</button>
                    </>
                }
                {
                    !this.props.token && <>
                        <NavLink to="/login">Log In</NavLink>
                        <NavLink to="/signup">Sign Up</NavLink>

                    </>
                }



            </div>
        )
    }
}
