import React from "react";
export default function NpmCommands(){
    const copyCliboard=(id)=>{
         // Get the text field
        var copyText = document.getElementById(id);

        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
        
        // Alert the copied text
        alert(copyText.value +" command is Copied!!!");
    }
    return(
        <>
            <p>NPM Commands to install React app and its dependencies</p>
            <table style={{border:"1px solid",borderCollapse:"collapse", width:"100%", textAlign:"center", overflow:"auto", marginBottom:"200px"}}>
                <thead>
                    <th style={{border:"1px solid",borderCollapse:"collapse"}}>SNo</th>
                    <th style={{border:"1px solid",borderCollapse:"collapse"}}>Dependencies</th>
                    <th style={{border:"1px solid",borderCollapse:"collapse"}}>Commands</th>
                </thead>
                <tbody>
                    <tr key={1}>
                        <td style={{border:"1px solid",borderCollapse:"collapse"}}>1</td>
                        <td style={{border:"1px solid",borderCollapse:"collapse"}}>Install React App</td>
                        <td style={{border:"1px solid",borderCollapse:"collapse"}}>
                            <input id="create-react-app-command1" type="text" readOnly={true} disabled={true} value="npm install –g create-react-app" /><button onClick={()=>(copyCliboard("create-react-app-command1"))}>Copy</button><br></br>
                            <input id="create-react-app-command2" type="text" readOnly={true} disabled={true} value="create-react-app hello-world" /><button onClick={()=>(copyCliboard("create-react-app-command2"))}>Copy</button><br></br>
                            <input id="create-react-app-command3" type="text" readOnly={true} disabled={true} value="cd hello-world" /><button onClick={()=>(copyCliboard("create-react-app-command3"))}>Copy</button><br></br>
                            <input id="create-react-app-command4" type="text" readOnly={true} disabled={true} value="npm start" /><button onClick={()=>(copyCliboard("create-react-app-command4"))}>Copy</button><br></br>
                        </td>
                    </tr>
                    <tr key={2}>
                        <td style={{border:"1px solid",borderCollapse:"collapse"}}>2</td>
                        <td style={{border:"1px solid",borderCollapse:"collapse"}}>Run React App in Local</td>
                        <td style={{border:"1px solid",borderCollapse:"collapse"}}>
                            <input id="run-react-app-command1" type="text" readOnly={true} disabled={true} value="npm start" /><button onClick={()=>(copyCliboard("run-react-app-command1"))}>Copy</button><br></br>
                        </td>
                    </tr>
                    <tr key={3}>
                        <td style={{border:"1px solid",borderCollapse:"collapse"}}>3</td>
                        <td style={{border:"1px solid",borderCollapse:"collapse"}}>GitHub Code Setup</td>
                        <td style={{border:"1px solid",borderCollapse:"collapse"}}>
                            <textarea rows={10} cols={60} id="git-push-code" value="git init &#13;&#10;git add README.md &#13;&#10;git status &#13;&#10;git add .&#13;&#10;git commit -m 'first commit'&#13;&#10;git branch -M main&#13;&#10;git remote add origin https://github.com/Ponniah96/reactCartApplication.git&#13;&#10;git push -u origin main" readOnly={true} disabled={true} /><button onClick={()=>(copyCliboard("git-push-code"))}>Copy</button>
                        </td>
                    </tr>
                    <tr key={4}>
                        <td style={{border:"1px solid",borderCollapse:"collapse"}}>4</td>
                        <td style={{border:"1px solid",borderCollapse:"collapse"}}>Deploy React App in GitHub</td>
                        <td style={{border:"1px solid",borderCollapse:"collapse"}}>
                            <input id="deploy-react-app-command1" type="text" readOnly={true} disabled={true} value="npm install gh-pages --save-dev" /><button onClick={()=>(copyCliboard("deploy-react-app-command1"))}>Copy</button><br></br>
                            <textarea rows={10} cols={60} id="deploy-react-app-command2" value="Type Below comments in packages.json&#13;&#10;'homepage': ‘http://yuribenjamin.github.io/my-app’&#13;&#10;'scripts': {&#13;&#10;//...&#13;&#10;'predeploy': 'npm run build',&#13;&#10;'deploy': 'gh-pages -d build'&#13;&#10;}" readOnly={true} disabled={true} /><button onClick={()=>(copyCliboard("deploy-react-app-command2"))}>Copy</button><br></br>
                            <input id="deploy-react-app-command3" type="text" readOnly={true} disabled={true} value="npm run build" /><button onClick={()=>(copyCliboard("deploy-react-app-command3"))}>Copy</button><br></br>
                            <input id="deploy-react-app-command4" type="text" readOnly={true} disabled={true} value="npm run predeploy" /><button onClick={()=>(copyCliboard("deploy-react-app-command4"))}>Copy</button><br></br>
                            <input id="deploy-react-app-command5" type="text" readOnly={true} disabled={true} value="npm run deploy" /><button onClick={()=>(copyCliboard("deploy-react-app-command5"))}>Copy</button><br></br>
                        </td>
                    </tr>
                    <tr key={5}>
                        <td style={{border:"1px solid",borderCollapse:"collapse"}}>5</td>
                        <td style={{border:"1px solid",borderCollapse:"collapse"}}>React router</td>
                        <td style={{border:"1px solid",borderCollapse:"collapse"}}>
                            <input id="react-router-command1" type="text" readOnly={true} disabled={true} value="npm i react-router-dom" /><button onClick={()=>(copyCliboard("react-router-command1"))}>Copy</button><br></br>                            
                        </td>
                    </tr>
                    <tr key={6}>
                        <td style={{border:"1px solid",borderCollapse:"collapse"}}>6</td>
                        <td style={{border:"1px solid",borderCollapse:"collapse"}}>React Redux</td>
                        <td style={{border:"1px solid",borderCollapse:"collapse"}}>
                            <input id="react-redux-command1" type="text" readOnly={true} disabled={true} value="npm install redux react-redux" /><button onClick={()=>(copyCliboard("react-redux-command1"))}>Copy</button><br></br>                            
                        </td>
                    </tr>
                    <tr key={7}>
                        <td style={{border:"1px solid",borderCollapse:"collapse"}}>7</td>
                        <td style={{border:"1px solid",borderCollapse:"collapse"}}>React Material UI</td>
                        <td style={{border:"1px solid",borderCollapse:"collapse"}}>
                            <input id="react-material-ui-command1" type="text" readOnly={true} disabled={true} value="npm install @mui/material @emotion/react @emotion/styled" /><button onClick={()=>(copyCliboard("react-material-ui-command1"))}>Copy</button><br></br> 
                            <input id="react-material-ui-command1" type="text" readOnly={true} disabled={true} value="npm install @mui/material @mui/styled-engine-sc styled-components" /><button onClick={()=>(copyCliboard("react-material-ui-command2"))}>Copy</button><br></br> 
                            <input id="react-material-ui-command3" type="text" readOnly={true} disabled={true} value="npm install @mui/icons-material" /><button onClick={()=>(copyCliboard("react-material-ui-command3"))}>Copy</button><br></br>                            
                        </td>
                    </tr>
                    <tr key={8}>
                        <td style={{border:"1px solid",borderCollapse:"collapse"}}>8</td>
                        <td style={{border:"1px solid",borderCollapse:"collapse"}}>React Code Syntax Highlighter</td>
                        <td style={{border:"1px solid",borderCollapse:"collapse"}}>
                            <input id="react-syntax-highlighter-command1" type="text" readOnly={true} disabled={true} value="npm i react-syntax-highlighter" /><button onClick={()=>(copyCliboard("react-syntax-highlighter-command1"))}>Copy</button><br></br> 
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
    
}