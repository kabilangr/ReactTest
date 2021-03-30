import React, {Component} from "react";
import "./Header.css";
import { Link } from "react-router-dom"

class Header extends Component{
    constructor(){
        super();
    }



    render(){
        return (
            <header>
                <div className="logo">
                    <p>Logo</p>
                </div>
                <div className="nav-bar">
                    <ul>
                        <li><Link to="">Home</Link></li>
                        <li><Link to="/myskill">MySkills</Link></li>
                        <li><Link to="/sample">Sample</Link></li>
                        <li><Link to="/form">Form</Link></li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Header;