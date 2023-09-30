import axios from "axios";
import React from "react";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export function RegisterPage(){
    function handleregister(event){
        event.preventDefault()
        var fname=document.getElementById("fname").value 
        var email=document.getElementById("email").value 
        var password=document.getElementById("password").value 
        var phone=document.getElementById("phone").value 
        var key=document.getElementById("key").value 


        var userDetails={
            
            fname:fname,
            email:email,
            password:password,
            phone:phone,
            key:key,
        }
        if(fname===''){
            alert("Enter the fname")
        }
        else{
            axios.post("http://localhost:8008/Register",userDetails)
            .then((res)=>{

                if(res.data.status==="error"){
                    alert("data are not inserted")
                }
                else if(res.data.status==="success"){
                    alert("data are inserted")
                    window.location.href='/'
                }
            })

        }


    }
    return(
        <>
              <form onSubmit={handleregister}>
                <main data-aos="fade-up" className="reg-bg">
                    <div className="RegMainPage w-100 h-100 d-flex align-items-center justify-content-center">
                        <div className="regCard container d-flex flex-column align-items-center justify-content-center gap-3">
                        <h1>Register Form</h1>
                            <input type="text"  placeholder="Enter Your Name" id="fname" required />
                            <input type="text" placeholder="Enter Your Email" id="email" required />

                            <input type="password" placeholder="Enter Password" id="password" required />

                            <input type="tel" pattern="^[6-9]{1}[0-9]{9}" id="phone" placeholder="Enter Your PhoneNumber" required />
                            <input type="text" placeholder="Enter License Key" id="key" required />

                        
                            <div className="w-100 d-flex align-items-center justify-content-center gap-4">
                                <button className="rounded border-0 w-50" type="submit">REGISTER</button>
                            </div>
                            <p>Already have an Account ? <Link to='/'>Login</Link> </p>
                        </div>
                    </div>
                </main>
            </form>
            
        </>
    );
}