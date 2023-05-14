import React from 'react'
import { Form } from 'react-router-dom'
import Products from './Products';
import { useNavigate } from 'react-router-dom';

export default function 
() {
    let navigate= useNavigate();
    
    const msg = ()=>{
        alert("Our Customer Executive will get in touch with you within 24 hours");
        navigate('/products');
    }
  return (
    <div>
       
    <form>
    <div className="form-row col-md-12">
                     <div className="form-group col-md-6">
                        <h6 className="display-6">Contact Us</h6>
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control"   required/>
                        
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control"required/>
                        
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" className="form-control"required/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="message">message</label>
                        <input type="text" className="form-control"required/>
                    </div>

                    <div className="form-group col-md-6">
                        
                        
                        <button type="submit" className="btn btn-primary" onClick={msg} >Submit</button>
                                            
                    </div>
                    </div>
               
      </form>
    </div>
  )
}
