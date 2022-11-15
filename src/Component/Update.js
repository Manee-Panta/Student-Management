import React, { useState,useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import "../style.css";
import NavMain from "./NavMain";

const Update = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [list, setlist] = useState([]);

  const params = useParams();
  const { id } = params;

  const navigate=useNavigate()

  useEffect(() => {
    fetch("http://localhost:3000/students/" + params.id).then((resp) => {
      resp.json().then((result) => {
        console.log(result);
        setlist(result);
        setname(result.name);
        setemail(result.email);
        setaddress(result.address);
        
      });
    });
  }, []);

  const update = () => {
    const data={name,email,address}
    fetch('http://localhost:3000/students/'+params.id ,{
  method:'PUT',
  headers:{
    'Accept':'application/json',
    'Content-Type':'application/json'
  },
  body:JSON.stringify(data)
}).then((resp)=>{
  resp.json().then((result)=>{
    console.log(result)
   alert('Updated Successfully')
   navigate('/list')
  })
})
  };
  return (
   <>
   <NavMain/>
   <div className="updateMain">
      <h3>Update Student</h3>
    
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
      <button className="updatebtn" onClick={update}>
        Update
      </button>
    </div>
   </>
  );
};

export default Update;
