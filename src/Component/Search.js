import React, { useState } from "react";
import "../style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import NavMain from "./NavMain";
const Search = () => {
  const [data, setdata] = useState();
  const [nodata, setnodata] = useState(false);
  const [lastsearch, setlastsearch] = useState("");

  function searchData(key) {
    console.log(key);
    setlastsearch(key);
    fetch("http://localhost:3000/students/?q=" + key).then((resp) => {
      resp.json().then((result) => {
        console.log("result" + result);
        if (result.length > 0) {
          setdata(result);
          setnodata(false);
        } else {
          setnodata(true);
          setdata("");
        }
      });
    });
  }
  const deleteUser = (id) => {
    fetch("http://localhost:3000/students/" + id, {
      method: "DELETE",
    }).then((resp) => {
      resp.json().then((result) => {
        // alert("Deleted Successfully");
       var display= window.confirm('Are you sure, Do you want to delete ?')
      console.log(display)
        display && searchData(lastsearch) 
      });
    });
  };
  return (
    <>
    <NavMain/>
    <div className="searchMain">
      <h3>Search Student</h3>
      <input type="text" onChange={(e) => searchData(e.target.value)} />
      <div className="searchDisplay">
        {data ? (
          <div>
            <table className="listTable">
              <thead>
                <tr>
                  <td>Id</td>
                  <td>Name</td>
                  <td>Address</td>
                  <td>Email</td>
                  <td>Operation</td>
                </tr>
              </thead>

              {data.map((item) => {
                return (
                  <>
                    <tr key={item.id}>
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
                  </>
                );
              })}
            </table>
          </div>
        ) : (
          <div></div>
        )}

        {nodata ? <div>No data Found</div> : <div></div>}
      </div>
    </div>
    </>
  );
};

export default Search;
