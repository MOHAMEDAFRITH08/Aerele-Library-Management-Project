import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

export function LoginPage() {
  function handlelogin(event) {
    event.preventDefault();
    var email = document.getElementById("emailid").value;
    var password = document.getElementById("passid").value;

    var loginDetails = {
      email: email,
      password: password,
    };
    if (email === "") {
      alert("Enter the Email");
    } else if (password === "") {
      alert("Enter the Password ");
    } else {
      axios.post("http://localhost:8008/login", loginDetails)
       .then((res) => {
        let fullname=res.data.dbname;
        console.log(res);
        if (res.data.status === "success") {
          alert(`Hello '${fullname}' Login Successfully`);
          window.location.href = "/Dashboard";
          var id = res.data.dbId;
        } else if (res.data.status === "invalid") {
          alert("your password invalid");
        } else if (res.data.status === "empty_set") {
          alert("Username or Password Invalid");
        } else if (res.data.status === "error") {
          alert("Contact Admin");
        }
      });
    }
  }
  return (
    <>
      <div class="main">
        <form onSubmit={handlelogin}>
          <div class="mt-5">
            <h1 className="text-white">LOGIN</h1>
          </div>
          <span class="mt-5">
            <i class="fa fa-user"></i>
            <input type="text" placeholder="Email" id="emailid" name="" class="mt-5" />
          </span>
          <br />
          <span>
            <i class="fa fa-lock"></i>
            <input type="password" placeholder="password" id="passid" name="" />
          </span>
          <br />
          <button class="btn text-white text-center">login</button>
          <p className="text-white">
            Did'nt have an account? <Link to="/Register">SignUp here</Link>
          </p>
        </form>
      </div>
    </>
  );
}
