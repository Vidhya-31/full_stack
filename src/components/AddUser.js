import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [sex, setSex] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        department,
        sex,
        address
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
       <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Employee Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter the Name" required
              />
            </div>
          </div>
          
          <div className="field">
            <label className="label">Department</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}required
                >
                  <option value="Admin">Admin</option>
                  <option value="Hr">Hr</option>
                  <option value='vendor'>Vendor</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Sex</label>
             <div class="control">
               <label class="radio">
              <input
                type="radio"
                className="input"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
                placeholder="Name"/>
              
             male</label>
              
             <label class="radio">
              <input
                type="radio"
                className="input"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
                placeholder="Name"
              />
               Female</label>
            </div>
            </div>
            <div className="field">
            <label className="label">Address</label>
            <div className="control">
              <textarea
                class="text"
                className="input"
                
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter the address"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Submit
            </button>
            <button type="submit" className="button is-primry">
              View
            </button>
            <button type="submit" className="button is-primry">
              Cancel
            </button>
          
          </div>
          
           
        </form>
      </div>
    </div>
  );
};

export default AddUser;