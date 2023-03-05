import React, {Component} from"react";
import "../../App.css";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export default class classComponentProps extends Component{
    constructor(props){
        super(props);
        this.state={
            codeStringValue:""
        }
    }
    componentDidMount(){
        const codeString=`
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
    `
        this.setState({codeStringValue:codeString})
    }
    copyFunction(buttonID, functionID){
        var copyText = document.getElementById(functionID);
        if(copyText !==null){
            navigator.clipboard.writeText(copyText.innerText);
            var buttonElement=document.getElementById(buttonID);
            if(buttonElement.innerHTML !==null || buttonElement.innerHTML !==undefined){
                buttonElement.innerHTML= '<i class="bi bi-check2"></i> Copied';
            }
        }
    }    
    render(){
        return(
            <div>
                <div className="flex-body">
                    <div className="flex-left-content">
                        <p className="react-app-classComponents-subheader">2.React Class Component Props</p>
                        <p>Name:  {this.props.name}</p>
                        <p>Age:  {this.props.age}</p>     
                    </div>
                    <div className="flex-right-content">
                        <button className="copy-icon" id="class-props"  onClick={()=>{this.copyFunction('class-props','class-props-code')}}><i className="bi bi-clipboard"></i> Copy</button>
                        <SyntaxHighlighter language="javascript" style={atelierCaveDark} id="class-props-code" >
                            {this.state.codeStringValue}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>
        )
    }
}