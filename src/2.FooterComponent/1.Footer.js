import  "../App.css";
import React ,{useState,useEffect} from "react";

export default function Footer(){
    const [date]=useState(new Date().toDateString());
    const [time,setTime]=useState(new Date().toLocaleTimeString());
    useEffect(()=>{
        setTimeout(()=>{
            setTime(new Date().toLocaleTimeString())
        },1000)
    })
    return(
        <div className="react-app-footer">
            <p className="react-app-footer-text" style={{'marginBottom':'5px'}}>Thank You!!!</p>
            <p className="react-app-footer-text" style={{'marginTop':'5px'}}>{date} {time}</p>
        </div>
    )
}