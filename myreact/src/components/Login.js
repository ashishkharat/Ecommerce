import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import myStore from "./Store";

export default function Login (){
    let navigate= useNavigate();
    const [errormsg,setErrormsg] = useState("");
    const [ state, setState]= useState(
        {
            email:"",
            pwd:"" ,
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

    const login=(ev)=>{
        ev.preventDefault();
        //alert(this.state.email);
        //alert(this.state.pwd);
        const req= {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    email: state.email,
                    password: state.pwd
                })
        }

        fetch("http://localhost:8080/logincheck", req)
            .then(resp => resp.text())
            .then(data => {
                if(data.length != 0 )
                {
                    const json = JSON.parse(data);
                    
                    localStorage.setItem("loggeduser", JSON.stringify(json));
                    myStore.dispatch({type:'LOGGEDIN'});
                    navigate('/products');
                       
                }
                else
                    setErrormsg('Wrong ID/pwd') ;     
            }) 


        }
  return (
    <div >
            <div className="container col-md-6">
                <div> 
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" name="email" id="email" placeholder="Email" onChange={handleInput}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4">Password</label>
                                <input type="password" className="form-control"  name="pwd" id="pwd" placeholder="Password" onChange={handleInput}/><br/>
                                <button type="submit" className="btn btn-primary" onClick={login}>LOGIN</button>
                                <p className="text-danger">{errormsg}</p>
                            </div>
                        </div>
                        
                    </form>
                 </div>
            </div>
            </div>
  )
}
