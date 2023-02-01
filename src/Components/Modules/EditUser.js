import React from "react";
import { useState, useEffect } from "react";
//import { useNavigate, useParams } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import AuthenticationService from '../Services/AuthenticationService';


function EditUser() {
  const [user, setUser] = useState({});
  const [Auth_ID, setAuth_ID] = useState({});
  const {Acc_Id }= useParams();

  const navigate=useNavigate();
  //const { Id } = useParams();
 // const navigate = useNavigate();
  useEffect(() => {

    const jwt = AuthenticationService.JwtToken();
    console.log(jwt);
  
    const Id = AuthenticationService.Auth_ID();
 setAuth_ID(Id);
    if (jwt == null || Id == null) { navigate('/Login')}

    fetch("https://localhost:44303/api/Profiles/"+ Acc_Id )
      .then((res) => res.json())
      .then((result) => {
        setUser(result);
       // console.log(result);
      });
    //console.log(user);
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    user.Authentication_Auth_Id=Auth_ID;
    user.Acc_Id=Acc_Id;
    event.preventDefault();
    let demo = JSON.stringify(user);
    console.log(JSON.parse(demo));
    fetch("https://localhost:44303/api/Profiles/"+ Acc_Id, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: demo
    }).then(res => { console.log(res) })
   // navigate('/');

    alert("Profile Updated Successfully");
  };

  return (
    <div>
      <h2 style={{color:"#850E35", marginTop:"50px"}}>EDIT YOUR PROFILE</h2>
      <form
        style={{
          marginTop:"50px",         
          width: "500px",
          color: "black",
           display:"inline-block"         
        }}
        onSubmit={handleSubmit}
      >
        {/* <label>User Id:</label>
      <input
        type="text"
        name="Id"
        value={user.user_Id}
        onChange={handleChange}
      />
      <br />   */}

        <label style={{padding: "10px 40px"}}>FirstName:</label>
        <input
        style={{
           border: "1px solid",
          padding: "0 10px",
          height: "40px"}}
          type="text"
          name="First_Name"
          value={user.First_Name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label style={{padding: "10px 40px"}}>MiddleName:</label>
        <input
         style={{
          border: "1px solid",
         padding: "0 10px",
         height: "40px"}}
          type="text"
          name="Middle_Name"
          value={user.Middle_Name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label style={{padding: "10px 40px"}}>LastName:</label>
        <input
         style={{
          border: "1px solid",
         padding: "0 10px",
         height: "40px"}}
          type="text"
          name="Last_Name"
          value={user.Last_Name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label style={{padding: "10px 40px"}}>Email_id:</label>
        <input
         style={{
          border: "1px solid",
         padding: "0 10px",
         height: "40px"}}
          type="text"
          name="Email"
          value={user.Email}
          onChange={handleChange}
        />
        <br />
        <br />
        <label style={{padding: "10px 40px"}}>Phone Number:</label>
        <input
         style={{
          border: "1px solid",
         padding: "0 10px",
         height: "40px"}}
          type="text"
          name="Phone_Number"
          value={user.Phone_Number}
          onChange={handleChange}
        />
        <br />
        {/* <label>Age:</label>
        <input
          type="text"
          name="Age"
          value={user.Age}
          onChange={handleChange}
        />
        <br /> */}
        <br />
        <label style={{padding: "10px 40px"}}>Address_Line:</label>
        <input
         style={{
          border: "1px solid",
         padding: "0 10px",
         height: "40px"}}
          type="text"
          name="Address_Line"
          value={user.Address_Line}
          onChange={handleChange}
        />
        <br />
        <br />
        <label style={{padding: "10px 40px"}}>Pincode:</label>
        <input
         style={{
          border: "1px solid",
         padding: "0 10px",
         height: "40px"}}
          type="text"
          name="Pincode"
          value={user.Pincode}
          onChange={handleChange}
        />
        <br />
        <br />
        <label style={{padding: "10px 40px"}}>City:</label>
        <input
         style={{
          border: "1px solid",
         padding: "0 10px",
         height: "40px"}}
          type="text"
          name="City"
          value={user.City}
          onChange={handleChange}
        />
        <br />
        <br />
        <label style={{padding: "10px 40px"}}>Country:</label>
        <input
         style={{
          border: "1px solid",
         padding: "0 10px",
         height: "40px"}}
          type="text"
          name="Country"
          value={user.Country}
          onChange={handleChange}
        />
        <br />

        <input
        className="btn btn-outline-primary"
          type="submit"
          style={{
           
            margin: 20,
            padding: 10,
          
          }}
        />
      </form>
    </div>
  );
}

export default EditUser;
