import React, {Component} from "react";

export default class ClassArrays extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            array:[],
            id:0
        }
    }
    addArray(){
        this.setState({id:this.state.id+1});
        var object={};
        object={
            id:this.state.id,
            name:this.state.name
        }
        var array=this.state.array;
        array.push(object);
        this.setState({array:array, name:""})
    }
    render(){
        return(
            <>
                <div>React Arrays</div>
                <div>1.Add Element to Array</div>
                <input type="text" onChange={(e)=>{this.setState({name:e.target.value})}} value={this.state.name} />
                <button onClick={this.addArray.bind(this)}>Submit</button>
                <br></br>
                <div>Aray of Names are:</div>
                <ul>
                    {this.state.array.map(value=>(<li key={value.id}>{value.name}</li>))}
                </ul>
            </>
        )
    }

}