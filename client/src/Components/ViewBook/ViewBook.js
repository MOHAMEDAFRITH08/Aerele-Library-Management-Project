import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

export function ViewBook(){
  const [book, setBook] = useState([])
  useEffect(() => {
      fetch("http://localhost:8008/getAllBooks")
          .then(res => res.json())
          .then(details => setBook(details))
  })

  function handledelete(book_id) {
      let deletedata = {
         book_id: book_id 
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
              {
                  book.map((value, index) => (
                      <>
                          <div className="col-10 col-sm-5 col-md-3 m-2 mx-3">
                              <div class="card d-flex align-items-center border-0">
                                  <div className="image-container">
                                      <img src={value.image_url} className="card_img_size w-50" />
                                  </div>
                                  <div class="card-body card_content_size border-light rounded">
                                      <h5>ID : {value.book_id}</h5>
                                      <h5>Title : {value.book_title}</h5>
                                      <h5>About : {value.book_about}</h5>
                                      <Link to={`/updatebook/${value.book_id}`} className="btn btn-success">update</Link>
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