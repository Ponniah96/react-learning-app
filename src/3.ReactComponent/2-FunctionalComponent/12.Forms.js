import React,{useState} from"react";

export default function FunctionalForms(){
    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[isFormSubmitted,setFormSubmitted]=useState(false);
    const[formName,setFormName]=useState("");
    const[formAge,setFormAge]=useState("");
    const[formEmail,setFormEmail]=useState("");
    const[formPassword,setFormPassword]=useState("");
    const onChangeName=(e)=>{
        setName(e.target.value);
    }
    const onChangeAge=(e)=>{
        setAge(e.target.value);
    }
    const onChangeEmail=(e)=>{
        setEmail(e.target.value);
    }
    const onChangePassword=(e)=>{
        setPassword(e.target.value);
    }
    const onSubmitForm=(e)=>{
        e.preventDefault();
        setFormName(name);
        setFormAge(age);
        setFormEmail(email);
        setFormPassword(password);
        setFormSubmitted(true);
    }
    return(
        <>
            <div className="forms-container">
                <form onSubmit={(e)=>onSubmitForm(e)}>
                    <label>Name:
                        <input type="text" placeholder="Enter Name" onChange={(e)=>onChangeName(e)} value={name} required/>
                    </label>
                    <br />
                    <label>Age:
                        <input type="number" placeholder="Enter Age" onChange={(e)=>onChangeAge(e)} value={age} required/>
                    </label>
                    <br />
                    <label>Email:
                        <input type="email" placeholder="Enter Email" onChange={(e)=>onChangeEmail(e)} value={email} required/>
                    </label>
                    <br />
                    <label>Password:
                        <input type="password" placeholder="Enter Password" onChange={(e)=>onChangePassword(e)} value={password} required/>
                    </label>
                    <br />
                    <input type="submit" value="Submit Form"/>
                    <br />
                    {isFormSubmitted && <p>Form Values are: {formName}, {formAge}, {formEmail}, {formPassword}</p>}
                </form>
            </div>
        </>
    )
}