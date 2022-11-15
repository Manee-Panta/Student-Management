import React, { useState } from "react";

import NavMain from '../Component/NavMain'
const Create = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");

  const add = (e) => {
    // console.log(name,email,address);
    const data = { name: name, email: email, address: address };

    fetch("http://localhost:3000/students", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((resp) => {
      resp.json().then((result) => {
        console.log(result);
        !(name && email && address) == ""
          ? alert("Added Successfully")
          : alert("Failed");
        setname("");
        setemail("");
        setaddress("");
      });
    });
  };
  return (
    <>
      <NavMain />
      <div className="createMain">
        <h3>Add Student</h3>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setaddress(e.target.value)}
        />
        <button className="addbtn" onClick={add}>
          Add
        </button>
      </div>
    </>
  );
};

export default Create;
