import { useState } from "react"

export default function FunctionalComponentStates(){
    const [language1]=useState("HTML");
    const [language2]=useState("CSS");
    const [language3]=useState("JavaScript");
    const [language4]=useState("jQuery");
    const [language5]=useState("React");
    return(
        <div>
            <p>3.React Functional Component States using useState</p>
            <p>Primary Skills:</p>
            <ol>
                <li>{language1}</li>
                <li>{language2}</li>
                <li>{language3}</li>
                <li>{language4}</li>
                <li>{language5}</li>
            </ol>
        </div>
    )
}