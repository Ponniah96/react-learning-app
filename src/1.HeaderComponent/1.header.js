import logo from "../logo.svg"
import "../App.css"
function Header(){
    return(
        <div className="react-app-header">
            <p className="react-app-header-text">Welcome to React App Basics Tutorial!!! <img src={logo} className="App-logo" alt="logo"></img></p>
            
        </div>
    )
}

export default Header;