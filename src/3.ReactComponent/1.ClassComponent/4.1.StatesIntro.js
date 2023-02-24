import React,{Component} from "react";
import ClassStatesToggle from "./4.2.StatesToggle";
import ClassStatesIncrement from "./4.3.StatesIncrement";

export default class ClassComponentStates extends Component{
    constructor(props){
        super(props);
        this.state={
            language1:"HTML",
            language2:"CSS",
            language3:"JavaScript",
            language4:"jQuery",
            language5:"React"
        }
    }
    render(){
        const {language1,language2,language3,language4,language5}=this.state;
        return(
            <div>
                <p className="react-app-classComponents-subheader">3.React Class Component States</p>
                <p>Primary Skills:</p>
                <ol>
                    <li>{language1}</li>
                    <li>{language2}</li>
                    <li>{language3}</li>
                    <li>{language4}</li>
                    <li>{language5}</li>
                </ol>
                <br></br>
                <hr></hr>
                <ClassStatesToggle />
                <br></br>
                <hr></hr>
                <ClassStatesIncrement />
                <br></br>
                <hr></hr>
            </div>
        )
    }
}