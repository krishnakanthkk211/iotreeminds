import React from "react";
import {Dashboard} from "./Components/Dashboard/Dashboard";
import './Components/Logregi/Login.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import { Login } from "./Components/Logregi/Login";
import { Register } from "./Components/Logregi/Register";

function App() {
 
 

  return (
    <>
     <div className="App">

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path=''/>
    </Routes>
    </BrowserRouter>
     
    </div> 
   
    </>
  );
}

export default App;
