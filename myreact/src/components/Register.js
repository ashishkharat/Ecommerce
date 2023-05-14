import React, { useState } from "react";
import validator from 'validator';

export default function Register() {

    const [msg,setMsg] = useState("");
    const[conMsg, setConMsg]= useState("");
    const[emailMsg,setEmailMsg]= useState("");

    const [PassErrorMessage, setPassErrorMessage] = useState("")

    const [emailFlag,setEmailFlag] = useState("false");
    const [passFlag,setPassFlag] = useState("false");
    const [contactFlag,setContactFlag] = useState("false");

    const [passColor,setPassColor] = useState("white");

    const[state, setState]= useState(
        {
            name:"",
            email:"",
            pwd:""
        }
    )

    const handleInput=(ev)=>{
        setState((state)=>(
            {
                ...state,
                [ev.target.name]: ev.target.value 
            }
        ));
    }

    const passValidation=(ev)=>{
        ev.preventDefault();
        //alert("pass")
        if (validator.isStrongPassword(state.pwd, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
          })) {
            setPassErrorMessage('Strong Password')
            setPassColor("white");
            setPassFlag("true");
          } else {
            setPassErrorMessage('Password is Not Strong')
            setPassColor('red');
            setPassFlag("false");
          }
       
    }
    const emailExist=(ev)=>{
        //alert("hi");
        ev.preventDefault();
        var pattern= /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.com$/;
        if(state.email.match(pattern))
        {
            fetch("http://localhost:8080/emailexist?email="+state.email)
            .then(resp => resp.text())
            .then(data => {
                console.log(data);
                if(data === "true")
                {
                    setEmailMsg("Email already Used. Please Choose defferent Email ID") ;
                    setEmailFlag("false");
                }
                else
                {
                    setEmailMsg("");
                    setEmailFlag("true");
                }
            }) 
        }
        else
        {
            setEmailMsg("Enter Valid email-ID") ;
            setEmailFlag("false");
        }
        
    }

    const citizenreg=(ev)=>{
        ev.preventDefault();
        if(emailFlag === "true" && passFlag==="true")
        {
            const req= {
                method: 'POST',
                headers: {
                    'content-type':'application/json'
                },
                body:JSON.stringify(
                    {
                        name:state.name,
                        email: state.email,
                        password: state.pwd
                    })
            }
    console.log(req);
            fetch("http://localhost:8080/citizenreg", req)
                .then(resp => resp.text())
                .then(data => {
                    if(data.length != 0)
                    {
                        setMsg("Registration Successfull...") ;

                    }
                    else
                    {
                        setMsg("Registration Failed...") ;
                    }
                })    
        }
        else{
            setMsg("Please fill valid Data")
        }
        
    }
    
  return (
    <div>
        <div className="container">
            <form onSubmit={citizenreg}>
                <div className="form-row col-md-12">
                     <div className="form-group col-md-6">
                        <h6 className="display-6">New User Registration</h6>
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" name= "name" id="name" placeholder="Name" onChange={handleInput}  required/>
                        
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" name="email" id="email" placeholder="Email" onChange={handleInput} onBlur={emailExist}  required/>
                        <p style={{color:"red"}}>{emailMsg}</p>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="pwd">Password</label>
                        <input type="password" className="form-control" name="pwd" id="pwd" placeholder="Password" onChange={handleInput} onBlur={passValidation}  required/>
                        <p style={{color:passColor}}>{PassErrorMessage}</p>
                        <button type="submit" className="btn btn-primary" >Sign Up</button>
                        <p >{msg}</p>                        
                    </div>
                </div>
                
         </form>
         
        </div>
    </div>
  )
}
