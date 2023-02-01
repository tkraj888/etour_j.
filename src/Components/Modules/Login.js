import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function FormValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let navigate = useNavigate();

  const onSubmit = (data) => {
    let demo = JSON.stringify(data);

    fetch("https://localhost:44303/Login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: demo,
    })
      .then((res) => {
        if (res.status == 200) {
          // setMessage( "User has register Successfully" );
          alert("User has Login Successfully");

          res.json().then((res) => {
            sessionStorage.setItem("jwtToken", res.jwtToken);
            sessionStorage.setItem("Auth_Id", res.Auth_Id);
            sessionStorage.setItem("User_Name", res.User_Name);
            sessionStorage.setItem("Role", res.Role);
          });

          //    console.log(sessionStorage.getItem("jwtToken"));
          //    console.log(sessionStorage.getItem("Auth_Id"));
          //    console.log(sessionStorage.getItem("User_Name"));
          //    console.log(sessionStorage.getItem("Role"));
          // navigate('/Profile');
          window.location.replace("/Profile");
        } else {
          alert("Please check credentials");
        }
      })
      .catch((res) => {});
  };
  return (
    <div className="login">
      
        <div className="container loginpage">
        
            <Form onSubmit={handleSubmit(onSubmit)}>
              <h3>Login</h3>

              <Form.Field>
                <label className="loginnames">Email</label>
                <input
                    className="textbox"
                  placeholder="Email"
                  type="email"
                  {...register("User_Name", {
                    required: true,
                    pattern:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
              </Form.Field>
              {errors.User_Name && <p>Please check the Email</p>}
              <Form.Field>
                <label className="loginnames">Password</label>
                <input
                  className="textbox"
                  placeholder="Password"
                  type="password"
                  {...register("Password", {
                    required: true,
                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                  })}
                />
              </Form.Field>
              {errors.Password && <p>Please check the Password</p>}
              <div className="Signup-button">
                <button type="submit button" class="btn btn-outline-primary">
                  Login
                </button>
                <br></br>
                <Link to="/ForgetPass" className="spacee">
                  Forget password
                </Link><br/>
                   OR<br/>
                <Link to="/Signup" className="spacee">
                  Signup
                </Link>
              </div>
            </Form>
            </div>
      
    </div>
  );
}
