import React, { useState, useEffect } from "react";
import "../style.css";
import { useNavigate } from "react-router-dom";
import NavMain from "../Component/NavMain";
import { Button, Form } from "react-bootstrap";
const Login = () => {
  const [name, setname] = useState("");
  const [pass, setpass] = useState("");
  const navigate = useNavigate();

   function handleform(e) {
    e.preventDefault();
console.log(name,pass)
const item = {name,pass}
    fetch('http://localhost:3000/login',{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((resp) => {
      resp.json().then((result) => {
        localStorage.setItem('user-info', JSON.stringify(result))
        alert('Login Success')
        navigate('/')
        
        
        
      });
    });
  }
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/home");
    }
  });

  return (
    <>
      {" "}
      <NavMain />
      <div className="main">
        <Form className="sign-up-form" action="">
          <label>Username</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            value={pass}
            onChange={(e) => setpass(e.target.value)}
          />
          <Button type="submit" className="loginbtn" onClick={handleform}>
            Login
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Login;
