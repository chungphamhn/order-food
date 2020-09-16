import React, { Component } from 'react';

import './Toolbar.css';

class Toolbar extends Component {

    returnHomeHandler() {
        console.log("return home");
    }

    render() {
        return (

            <header className="Toolbar">
                <div
                    onClick={this.props.Clicked}
                    className="Logo">
                    Home
                </div>
                <div className="Login">
                    Login
                </div>
            </header>


        );
    }
}

export default Toolbar;