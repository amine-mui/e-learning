import React, { useState } from "react";
import './App.css'
import About from './components/About/About'
import Allcourses from './components/allcourses/allcourses.jsx'
import Login from './components/Auth/Login.jsx'
import Register from './components/Auth/Register.jsx'
function App() {
  const [count, setCount] = useState(0)
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);

  }

  return (
 //<div> {currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register  onFormSwitch={toggleForm}/>} </div>
 <div> <Login/> <Register/> <About/> </div>
  )
}

export default App
