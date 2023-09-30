import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export function UserCreation() {
  function handleregister(event) {
    event.preventDefault();
    var memid = document.getElementById("memid").value;
    var fname = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phone").value;
    var debt = document.getElementById("debt").value;
    var lkey = document.getElementById("lkey").value;

    var userdetails = {
      memid: memid,
      fname: fname,
      email: email,
      password: password,
      phone: phone,
      debt: debt,
      lkey: lkey,
    };

    if (fname === "") {
      alert("Enter The Fields");
    } else {
      axios
        .post("http://localhost:8008/userCreation", userdetails)
        .then((res) => {
          if (res.data.status === "error") {
            alert("Data Are Not Inserted");
          } else if (res.data.status === "success") {
            alert("Registration Successfully");
            window.location.reload();
          }
        });
    }
  }

  return (
    <>
      <form onSubmit={handleregister}>
        <main>
          <div className="RegMainPage w-100 h-100 d-flex align-items-center justify-content-center">
            <div className="regCard container d-flex flex-column align-items-center justify-content-center gap-3">
              <h2>User Creation Form</h2>
              <input type="text" id="memid" placeholder="Enter Id" required />
              <input type="text" placeholder="Enter Name" id="fname" required />
              <input
                type="email"
                placeholder="Enter E-Mail"
                id="email"
                required
              />
              <input
                type="text"
                placeholder="Enter Password"
                id="password"
                required
              />
              <input
                type="tel"
                pattern="^[6-9]{1}[0-9]{9}"
                id="phone"
                placeholder="Enter Your PhoneNumber"
                required
              />
              <input type="text" placeholder="Enter Debt" id="debt" required />
              <input type="text" id="lkey" placeholder="Enter key" required />
              <div className="w-100 d-flex align-items-center justify-content-center gap-3">
                <button
                  className="rounded border-0  w-50 text-center"
                  type="submit"
                >
                  REGISTER
                </button>
                <Link to="/Dashboard">
                  {" "}
                  {/* <button
                    className="rounded border-0 text-center w-50"
                    type="submit"
                  >
                    Back
                  </button> */}
                   <Link to='/Dashboard' className='btn btn-primary'>Back</Link>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </form>
    </>
  );
}
