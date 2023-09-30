const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mysql = require("mysql");
const crypto = require("crypto");

var storeEx = express();
storeEx.use(cors()); 
storeEx.use(bodyparser.json()); 
storeEx.use(express.json());
storeEx.use(bodyparser.urlencoded({ extended: true })); 
storeEx.use(express.static("public"));

let localDb = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Afrith@7688",
  database: "library_management",
});
localDb.connect((error) => {
 
  if (error) {
    console.log(error);
  } else {
    console.log("Db Connected!");
  }
});
//API Creation
storeEx.post("/Register", (request, response) => {
  var sNo = crypto.randomUUID();
  console.log(sNo);
  var datetime = new Date();
  var createdDate = datetime.toISOString().slice(0,10)
  console.log(createdDate);
  let { memid,fname, email, password, phone, key} = request.body;
  let insertQuery = `insert into admin_registration(sNo, fullName, email, password, phoneNumber, lkey, createdDate, createdBy, updatedDate, updateBy) 
  values(?,?,?,?,?,?,?,?,?,?)`;
  localDb.query(
    insertQuery,
    [sNo,fname,email,password,phone,key,createdDate,sNo,createdDate,sNo],
    (error, result) => {
    console.log(insertQuery);
      if (error) {
        response.send({ "status": "error" });
        console.log(error);
      } else {
        response.send({ "status": "success" });
        console.log("Data inserted successfully");
      }
    }
  );
});
storeEx.post("/login",(request,response)=>{
  let {email, password}=request.body;
  let selectquery = `select * from admin_registration where email=?`
  localDb.query(selectquery,[email],(error,result)=>{
      if(error){
          response.send({"status":"error"})
      }
      else if(email.length>0){
          let dbEmail = result[0].email
          let dbPassword = result[0].password
          let dbId = result[0].sNo
          let dbfname = result[0].fullName
          if(email === dbEmail && password === dbPassword){
              response.send({"status":"success","dbId":dbId,"dbname":dbfname})
          }
          else{
              response.send({"status":"invalid"})
          }
      }
      else{
          response.send({"status":"admin_error"})
      }
  })
})
storeEx.post("/userCreation", (request, response) => {
    var sNo = crypto.randomUUID();
    console.log(sNo);
    var datetime = new Date();
    var createdDate = datetime.toISOString().slice(0,10)
    console.log(createdDate);
    let { fname, email, password, phone, debt, lkey} = request.body;
    let insertQuery = `insert into user_details(sNo, fullname, email, password, phonenumber, debt, lkey, createdDate, createdBy, updateDate, updateBy) 
    values(?,?,?,?,?,?,?,?,?,?,?)`;
    localDb.query(
      insertQuery,
      [sNo,fname,email,password,phone,debt,lkey,createdDate,sNo,createdDate,sNo],
      (error, result) => {
      console.log(insertQuery);
        if (error) {
          response.send({ "status": "error" });
          console.log(error);
        } else {
          response.send({ "status": "success" });
          console.log("Data inserted successfully");
        }
      }
    );
  });
storeEx.post("/BookRegi", (request, response) => {
    var sNo = crypto.randomUUID();
    console.log(sNo);
    var datetime = new Date();
    var createdDate = datetime.toISOString().slice(0,10)
    console.log(createdDate);
    let { bookid,btitle,about,imgurl,burl,rate} = request.body;
    let insertQuery = `insert into book_details(book_id,book_title,book_about,image_url,book_url, bookrate, createdDate, createdBy, updatedDate, updateBy) 
    values(?,?,?,?,?,?,?,?,?,?)`;
    console.log(insertQuery);
    localDb.query(
      insertQuery,
      [bookid,btitle,about,imgurl,burl,rate,createdDate,sNo,createdDate,sNo],
      (error, result) => {
      console.log(insertQuery);
        if (error) {
          response.send({ "status": "error" });
          console.log(error);
        } else {
          response.send({ "status": "success" });
          console.log("Data inserted successfully");
        }
      }
    );
  });
storeEx.get("/member", (req, res) => {
    try {
      let userMemberCount = "SELECT * FROM library_management.user_details";
      con.query(userMemberCount, (getError, getResult) => {
        if (getError) {
          res.send(getError);
        } else {
          return res.json(getResult);
        }
      });
    } catch (systemError) {
      console.log(systemError);
    }
  });
storeEx.get('/getAllMember', (request, response) => {
    let getAllQuery = 'select * from library_management.user_details'
    localDb.query(getAllQuery, (error, result) => {
        if (error) {
            response.send(error)
        } else {
            response.send(result)
        }
    })
})
storeEx.get("/getoneuser/:memId", (request, response) => {
    var { memId } = request.params
    var selectquery = `select * from user_details where member_id=${memId}`
    localDb.query(selectquery, (error, result) => {
        console.log(selectquery);
        if (error) {
            response.send({ "status": "error" })
            console.log(error);
        }
        else {
            response.send(result)
            console.log(result);
        }
    })
})
storeEx.post("/updateuserdetails/:memId", (request, response) => {
    var { memId } = request.params
    var { fullname, email, pass, phonenumber, debt } = request.body
    let datetime = new Date();
    console.log(datetime);
    let createdDate = datetime.toISOString().slice(0, 10);
    var updateQuery = `update user_details set fullname ='${fullname}',email='${email}',Password='${pass}',phonenumber='${phonenumber}',debt ='${debt}',updated_date='${createdDate}' where memId='${memId}'`
    localDb.query(updateQuery, (error, result) => {
        console.log(updateQuery);
        if (error) {
            response.send({ "status": "error" })
            console.log(error);
        }
        else {
            response.send({ "status": "success" })
        }
    })
})
storeEx.get('/getAllBooks', (request, response) => {
    let getAllQuery = 'select * from library_management.book_details'
    localDb.query(getAllQuery, (error, result) => {
        if (error) {
            response.send(error)
        } else {
            response.send(result)
        }
    })
})
storeEx.post('/deleteBooks', (request, response) => {
    let book_id = request.body.book_id
    let deletequery = 'delete from library_management.book_details where book_id=?'
    localDb.query(deletequery, [book_id], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
        }
        else {
            response.send({ "status": "success" })
        }
    })
})
storeEx.get('/getone/:book_id', (request, response) => {
    let { book_id } = request.params
    let getonequery = 'select * from library_management.book_details where book_id = ?'
    localDb.query(getonequery, [book_id], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
            console.log(error)
        }
        else {
            response.send(result)
            console.log(result)
        }
    })
})
storeEx.listen(8008, () => {
  console.log("Your port is running in 8008");
});
