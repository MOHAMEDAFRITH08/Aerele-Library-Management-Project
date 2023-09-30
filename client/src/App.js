import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RegisterPage } from './Components/SignUp/SignUp';
import { LoginPage } from './Components/Login/Login';
import { DashBoard } from './Components/DashBoard/DashBoard';
import { UserCreation } from './Components/UserCreation/UserCreation';
import { AddBook } from './Components/Books/AddBooks';
import { ViewUsers } from './Components/ViewUsers/ViewUser';
import { UpdateUser } from './Components/UpdateUser/UpdateUser';
import { ViewBook } from './Components/ViewBook/ViewBook';


function App() {
  return (
   <>
         <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path='/Register' element={<RegisterPage/>}/>
          <Route path='/Dashboard' element={<DashBoard/>}/>
          <Route path='/userCreate' element={<UserCreation/>}/>
          <Route path='/addBook' element={<AddBook/>}/>
          <Route path='/viewUsers' element={<ViewUsers/>}/>
          <Route path='/updateuser' element={<UpdateUser/>}/>
          <Route path='/viewBook' element={<ViewBook/>}/>
          
          

        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
