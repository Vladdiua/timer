import React, {Component} from "react";
import "./header.css";

class Header extends Component {

    render() {
        return (
            <div className="header">
                <div className="logo">Logo</div>
                <div className="menu">
                    <a href="/">Home</a>
                    <a href="/timer">Timer</a>
                </div>
            </div>
        )
    }

}

export default Header;
