import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
export function DashBoard() {
  return (
    <>
      <div className="owner-home-page ">
        <h1 className="topic text-center text-white p-2">
          <Typewriter
            options={{
              strings: ["WELCOME TO LIBRARIAN PAGE"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div className="d-flex justify-content-end me-2">
          <Link to="/">
          <button className="border-0 rounded me-4 bg-danger text-white p-1 ">
              ISSUSE BOOK
            </button>
            <button className="border-0 rounded   bg-danger text-white p-1 ">
              LOGOUT
            </button>            
          </Link>
        </div>
        <div className="row justify-content-center m-2">
          <div class="card col-lg-4 m-3 pt-3 card-size bg-body-secondary">
            <img
              src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              class="card-img-top h-50"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-center text-danger"> Add Users</h5>
              <p class="card-text text-dark text-center">You can Add users .</p>
              <center>
                {" "}
                <Link
                  to="/userCreate"
                  class="btn btn-info ownerbutton justidy-content-center p-2 w-75 fs-5"
                >
                  Create{" "}
                </Link>
              </center>
              <center>
                {" "}
                <Link
                  to="/viewUsers"
                  class="btn btn-info ownerbutton justidy-content-center p-2 mt-2 w-75 fs-5"
                >
                  View All Users{" "}
                </Link>
              </center>
            </div>
          </div>
          <div class="card col-lg-4 m-3 pt-3 card-size bg-body-secondary">
            <img
              src="https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              class="card-img-top h-50"
              alt=".."
            />
            <div class="card-body">
              <h5 class="card-title text-center text-success "> Add Books</h5>
              <p class="card-text text-dark text-center">You can Add Books.</p>
              <center>
                {" "}
                <Link
                  to="/addBook"
                  class="btn btn-info ownerbuttongreen  justidy-content-center p-1 w-75 fs-5"
                >
                  Add
                </Link>
              </center>
              <center>
                {" "}
                <Link
                  to="/viewBook"
                  class="btn btn-info ownerbutton justidy-content-center p-2 mt-2 w-75 fs-5"
                >
                  View All Books{" "}
                </Link>
              </center>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
