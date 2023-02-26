import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("admin");
  const [sex, setSex] = useState("");
  const [address, setAddress] = useState("");
  
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
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

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setName(response.data.name);
    
    setDepartment(response.data.department);
    setSex(response.data.sex);
    setAddress(response.data.address);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          
          <div className="field">
            <label className="label">Department</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option value="Male">Admin</option>
                  <option value="Female">Hr</option>
                  <option value="Female">Vendor</option>

                </select>
              </div>
            </div>
            <div className="field">
            <label className="label">Sex</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
                placeholder="sex"
              />
            </div>
          </div>
            <div className="field">
            <label className="label">Address</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="address"
              />
            </div>
          </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;