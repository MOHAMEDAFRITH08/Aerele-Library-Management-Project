import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export function AddBook() {
    
    function handleregister(event) {
        event.preventDefault()
        var bookid = document.getElementById("bookid").value;
        var btitle = document.getElementById("btitle").value;
        var about = document.getElementById("about").value;
        var imgurl = document.getElementById("imgurl").value;
        var burl = document.getElementById("burl").value;
        var rate = document.getElementById("rate").value;
        
        var userdetails = {
            bookid: bookid,
            btitle: btitle,
            about: about,  
            imgurl: imgurl,
            burl: burl,
            rate: rate,
        }

        if (btitle===''){
            alert("Enter The Fields")
        } else {
             axios.post("http://localhost:8008/BookRegi", userdetails)
                .then((res) => {
                    if (res.data.status === "error") {
                        alert("Data Are Not Inserted")
                    } else if (res.data.status === "success"){
                        alert("Registration Successfully")
                        window.location.reload();
                    }
                })
            
        }
    }

    return (
        <>
            <form onSubmit={handleregister}>
                <main>
                    <div className="RegMainPage w-100 h-100 d-flex align-items-center justify-content-center">
                        <div className="regCard container d-flex flex-column align-items-center justify-content-center gap-3">
                            <h2>Add Book</h2>
                            <input type="text"  placeholder="Enter Book Id" id="bookid" required />
                            <input type="text"  placeholder="Enter Book Title" id="btitle" required />
                            <input type="text" placeholder="Write About Book" id="about" required />
                            <input type="text" placeholder="Enter Book Image URL" id="imgurl" required />
                            <input type="text"  placeholder="Enter Book URL" id="burl" required />        
                            <input type="text"  placeholder="Enter Book Rate" id="rate" required />        
                            <div className="w-100 d-flex align-items-center justify-content-center gap-4">
                                <button className="rounded border-0  w-50 text-center" type="submit">Add Book</button>               
                                  <Link to='/Dashboard' className='btn btn-primary'>Back</Link>
                
                            </div>
                        </div>
                    </div>
                </main>
            </form>




        </>
    );


}