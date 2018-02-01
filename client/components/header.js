import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <header className="header">
                <nav>
                    <div className="nav-wrapper">
                    <a href="#" className="brand-logo right">Demo</a>
                    <ul id="nav-mobile" className="left">
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/client/new">Create new client</Link></li>
                    </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;