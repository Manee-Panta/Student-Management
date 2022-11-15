import React, { useState ,useEffect } from "react";
import NavMain from '../Component/NavMain'
import "../style.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");

  function handleForm() {
    // e.preventDefault();
    // alert(`The name you entered was: ${name} and pass is ${pass}`);
    // console.log(name, email, pass);
    const data = { name: name, email: email, pass: pass };

    // console.log(data);

    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((resp) => {
      resp.json().then((result) => {
        // console.log(result);
        // localStorage.setItem('user-info', JSON.stringify(result))
        alert('Regestration Success')
        navigate('/login')
      });
    });
  }

  // useEffect(()=>{
  //   if(localStorage.getItem('user-info')){
  //     navigate('/')
  //   }
  // })
  return (
    <>  
    <NavMain/>
   
    <div className="main">
      <Form className="sign-up-form">
        <label>Name</label>
        <input type="text" placeholder='Name' value={name} onChange={(e)=>setname(e.target.value)} />
     
        <label>Email</label>
        <input type="email" placeholder='Email' value={email} onChange={(e)=>setemail(e.target.value)} />
        <label>Password</label>
        <input
          type="password"
          value={pass}
          placeholder='Password'
          onChange={(e) => setpass(e.target.value)}
        />
        <Button className="loginbtn" onClick={handleForm}>
          Register
        </Button>
      </Form>
    </div>
    </>
  );
};

export default Register;
