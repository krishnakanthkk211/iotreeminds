import React, { useState } from "react";

import './Components/Logregi/Login.css';
import { Login } from "./Components/Logregi/Login";
import { Register } from "./Components/Logregi/Register";

function App() {
 
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    
     <div className="App">
 
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
    
  );
}

export default App;
