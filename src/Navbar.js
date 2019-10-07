import React, { Component } from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <nav className='navbar navbar-expand-sm  bg-light'>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-paw toggler-button"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink exact to='/dogs/' className="Navbar-item nav-item nav-link" activeClassName="Navbar-active">Home</NavLink>                
                        <NavLink exact to='/dogs/whiskey' className="Navbar-item nav-item nav-link" activeClassName="Navbar-active">Whiskey</NavLink>
                        <NavLink exact to='/dogs/tubby' className="Navbar-item nav-item nav-link" activeClassName="Navbar-active">Tubby</NavLink>
                        <NavLink exact to='/dogs/hazel' className="Navbar-item nav-item nav-link" activeClassName="Navbar-active">Hazel</NavLink>
                    </div>
                </div>
                </nav>
                
            </div>
        )
    }
}
