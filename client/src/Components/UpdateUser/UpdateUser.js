import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

export function UpdateUser() {
    var { memId } = useParams()
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("http://localhost:8008/getoneuser/" + memId)
            .then(data => data.json())
            .then((res) => {
                setUsers(res[0])
            })
    },[])
    function handleUserUpdate(event) {
        event.preventDefault()
        var memId = document.getElementById("memId").value;
        var fullname = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var pass = document.getElementById("pass").value;
        var phonenumber = document.getElementById("phone").value;
        var debt = document.getElementById("debt").value;

        var updateUserDetails = {
            memId: memId,
            fullname: fullname,
            email: email,
            pass: pass,
            phonenumber: phonenumber,
            debt:debt
        }

        if (fullname === "") {
            alert("Enter Username !")
        }
        else if (email === "") {
            alert("Enter Email !")
        }
        else if (phonenumber === "") {
            alert("Enter Phonenumber !")
        }
        else if (debt === "") {
            alert("Enter Maximum amount !")
        }
        else {
            axios.post("http://localhost:8008/updateuserdetails/" + memId, updateUserDetails)
                .then((res) => {
                    if (res.data.status === "success") {
                        alert("User updated successfully !")
                    }
                    else if (res.data.status === "error") {
                        alert("User not updated ! please enter valid data..!")
                    }
                    else {
                        alert("Internal server Error !")
                    }
                })
        }

    }
    function updateuser(event) {
        setUsers(event.target.value);
    }
    return (
        <>
            <form onSubmit={handleUserUpdate} onChange={updateuser}>
                <h1 className="text-center">User Update</h1>
                <div className="d-flex mt-5 justify-content-center align-items-center">
                    <div className="card w-100 p-5">
                        <h3 className="p-1 m-2">MemberId</h3>
                        <input type="text" id="memId" className="p-1 m-2" placeholder="Create memberId" value={users.memId} />
                        <h3 className="p-1 m-2">Username</h3>
                        <input type="text" id="name" className="p-1 m-2" placeholder="Create username" value={users.fullname} />
                        <h3 className="p-1 m-2">Email</h3>
                        <input type="text" id="email" className="p-1 m-2" placeholder="Enter user email" value={users.email} />
                        <h3 className="p-1 m-2">Password</h3>
                        <input type="text" id="pass" className="p-1 m-2" placeholder="Enter user pass" value={users.phonenumber} />
                        <h3 className="p-1 m-2">Phone Number</h3>
                        <input type="text" id="phone" className="p-1 m-2" placeholder="Enter user Phonenumber" value={users.debt} />
                        <h3 className="p-1 m-2">Outstanding dept</h3>
                        <input type="text" id="debt" className="p-1 m-2" placeholder="Enter Maximum amount" value={users.amount} />
                        <input type="submit" className="btn btn-primary m-2 w-50" value='Register' />
                    </div>
                </div>
            </form>
        </>
    );
}