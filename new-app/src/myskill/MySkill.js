import React,{Component} from "react";
import "./MySkill.css";
import htmlCssJs from "../assets/htmlCssJs.png";
import angularImg from "../assets/angular.png";
import reactImg from "../assets/react.png";
import nodeImg from "../assets/nodeJs.png";
import sqlImg from "../assets/mySql.png";

class MySkill extends Component {
    render(){
        return (
            <div className="main-div">
                <h1>My Skill</h1>
                <div>
                    <div className="skill-logo">
                        <img src={htmlCssJs} alt="html.logo"/>
                        <h2>HTML <br/> CSS <br/> JAVASCRIPT</h2>
                    </div>
                    <div className="skill-logo">
                        <img src={angularImg} alt="angular.logo"/>
                        <h2>ANGULAR</h2>
                    </div>
                    <div className="skill-logo">
                        <img src={reactImg} alt="react.logo"/>
                        <h2>REACT</h2>
                    </div>
                    <div className="skill-logo">
                        <img src={nodeImg} alt="nodejs.logo"/>
                        <h2>NODE JS</h2>
                    </div>
                    <div className="skill-logo">
                        <img src={sqlImg} alt="mysql.logo"/>
                        <h2>MYSQL</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default MySkill;