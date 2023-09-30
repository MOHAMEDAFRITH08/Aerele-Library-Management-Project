import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

export function ViewUsers(){
  const [member, setMember] = useState([])
  useEffect(() => {
      fetch("http://localhost:8008/getAllMember")
          .then(res => res.json())
          .then(details => setMember(details))
  })

  function handledelete(member_id) {
      let deletedata = {
         member_id: member_id 
        }
      axios.post("http://localhost:8008/deletemember", deletedata)
          .then((res) => {
              if (res.data.status === "error") {
                  alert("data are not deleted")
              }
              else if (res.data.status === "success") {
                  alert("data are deleted")
              }
          })
  }
  return (
      <>
          <div className="row w-100 d-flex justify-content-between">
            <h1 className="bg-dark-subtle text-dark mb-5 text-center"><b>MEMBERS ARE IN THE LIBRARY</b></h1>
              {
                  member.map((value, index) => (
                      <>
                          <div className="col-10 col-sm-5 col-md-3 m-2 mx-3">
                              <div class="card d-flex align-items-center border-0">
                                  {/* <div className="image-container">
                                      <img src={value.imgurl} className="card_img_size" />
                                  </div> */}
                                  <div class="card-body card_content_size border-light rounded">
                                      <h5>USER NAME : {value.fullname}</h5>
                                      <h5>GMAIL : {value.email}</h5>
                                      <h5>PASSWORD : {value.Password}</h5>
                                      <h5>MOBILE : {value.phonenumber}</h5>
                                      <h5>OUTSTANDING DEBT : {value.debt}</h5>
                                      <Link to={`/updateuser/${value.memId}`} className="btn btn-success">update</Link>
                                      <a href="#" class="btn btn-danger rounded border-0 ms-5" onClick={() => { handledelete(value.memId) }}>Remove</a>
                                  </div>
                              </div>
                          </div>
                      </>
                  ))
              }
          </div>

      </>
  );
}