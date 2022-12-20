import React,{Component} from "react";
export default class ClassForms extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            username:"",
            password:"",
            age:""
        }
    }
    handleSubmit(e){
        e.preventDefault();
        alert("Form Values are: ",this.state.name,this.state.age,this.state.username,this.state.password);
    }
    render(){
        return(
            <>
            <div className="">7.React Forms</div>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>Name:
                    <input type="text" onChange={(e)=>{this.setState({name:e.target.value})}} placeholder="Enter Name" value={this.state.name} required/>
                </label>
                <label>Age:
                    <input type="number" onChange={(e)=>{this.setState({age:e.target.value})}} placeholder="Enter Age" value={this.state.age} required/>
                </label>
                <label>Email:
                    <input type="email" onChange={(e)=>{this.setState({username:e.target.value})}} placeholder="Enter Email" value={this.state.username} required/>
                </label>
                <label>Password:
                    <input type="password" onChange={(e)=>{this.setState({password:e.target.value})}} placeholder="Enter Password" value={this.state.password} required/>
                </label>
                <input  type="submit" value="Submit"/>
            </form>
            </>
        )
    }
}