import React, {Component} from"react";
import "../../App.css";
export default class classComponentProps extends Component{
    render(){
        return(
            <div>
                <p className="react-app-classComponents-subheader">2.React Class Component Props</p>
                <p>Name:  {this.props.name}</p>
                <p>Age:  {this.props.age}</p>
            </div>
        )
    }
}