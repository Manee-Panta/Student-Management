import React, { useEffect, useState } from "react";
import "../style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import NavMain from "./NavMain";
const List = () => {
  const [data, setdata] = useState([]);


  useEffect(() => {
    getData()
  }, []);

  const getData=()=>{
    fetch("http://localhost:3000/students").then((res) => {
      res.json().then((result) => {
        console.log(result);
        setdata(result);
      });
    });
  }

  const deleteUser = (id) => {
    fetch("http://localhost:3000/students/"+id , {
      method: "DELETE",
    }).then((resp) => {
      resp.json().then((result) => {
        var display= window.confirm('Are you sure, Do you want to delete ?')
    
        getData();
      
      });
    });
  };

  return (
   <>
   <NavMain/>
   <div className="listMain">
      <h3>Student List</h3>

      <table className="listTable" >
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Address</td>
            <td>Email</td>
            <td>Operation</td>
            
          </tr>
        </thead>
       
        {data.map((item, i) => {
          return (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.email}</td>
              <td className="operation">
                <Link to={"/update/" + item.id}>
                  <FontAwesomeIcon icon={faPenSquare} color="green" />
                </Link>
                <span onClick={() => deleteUser(item.id)}>
                  <FontAwesomeIcon icon={faTrash} color="red" />
                </span>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
   </>
  );
};

export default List;
