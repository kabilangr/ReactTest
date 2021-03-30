import React, {Component} from "react"

class Form extends Component{
    constructor(){
        super();
        this.state = {
            firstName:"",
            lastName:"",
            knowKabilan: false,
            gender:"",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleChange(event){
        const { name, type, checked, value } = event.target;
        type === "checkbox" ? this.setState({ [name] : checked }) : this.setState({
            [name]:value
        })
    }

    handleOnSubmit(){
        console.log("Sent",this.state);
    }

    render()
    {
        return (
            <div>
                <form>
                    <label>First Name:
                        <input 
                        type="text" 
                        placeholder="Ex.John" 
                        name="firstName"
                         onChange={this.handleChange} />
                    </label>
                    <br/>
                    <lable>Last Name:
                        <input 
                        type="text" 
                        placeholder="Ex.Smith" 
                        name="lastName" 
                        onChange={this.handleChange} />
                    </lable>
                    <br/>
                    <label>Do you Know Kabilan?
                        <input 
                        type="checkbox" 
                        name="knowKabilan" 
                        checked={this.state.knowKabilan} 
                        onChange={this.handleChange} />
                    </label>
                    <br/>
                    <label>
                        Male<input 
                        type="radio" 
                        name="gender" 
                        value="male" 
                        checked={this.state.gender === "male"} 
                        onChange={this.handleChange} />
                    </label>
                    <br/>
                    <label>
                        Female<input 
                        type="radio" 
                        name="gender" 
                        value="female" 
                        checked={this.state.gender === "female"} 
                        onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <button onClick={this.handleOnSubmit} type="button">Submit</button>
                </form>
                <h2>Full Name: {this.state.firstName} {this.state.lastName}</h2>
                <h2>{this.state.knowKabilan? "Guess you know Kabilan": "You dont know him"}</h2>
                <h2>Gender: {(this.state.gender).toUpperCase()}</h2>
                <div>
                    {this.submit}
                </div>
            </div>
        )
    }
}
export default Form