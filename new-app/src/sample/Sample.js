import React, {Component} from "react";
import "./Sample.css";

class Sample extends Component{
    constructor(){
        super();
        this.state = {
            img : "",
            allMemeImgs: []
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                console.log(memes[0])
                this.setState({ allMemeImgs: memes })
            })
    }
    handleChange(event){
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ img: randMemeImg })
    }
    render()
    {
        return (
            <div className="main-sample">
                <button onClick={this.handleChange} >click here</button>
                <br/>
                {this.state.img === ""? "":<img src={this.state.img} />}
            </div>
        )
    }
}
export default Sample