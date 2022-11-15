import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";

import List from "./Component/List";
import Create from "./Component/Create";
import Search from "./Component/Search";
import Update from "./Component/Update";
import Register from "./Component/Register";
import Login from "./Component/Login";

import Protected from "./Component/Protected";

function App() {
  return (
    <div className="App">
      <Router>
     
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/list" element={<List />}></Route>
          <Route path="/create" element={<Protected Cmp={Create}/>} > </Route>
          <Route path="/update/:id" element={<Protected Cmp={Update}/>} ></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
         
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
