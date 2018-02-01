import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            year: new Date().getFullYear()
        };
    }

    render() {
        return (
            <footer className="page-footer footer">
                <div className="footer-copyright">
                    <div className="container row">
                      <a href="/">&copy; {this.state.year} Sydeny900</a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;