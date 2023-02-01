import Schedule from "../Modules/Schedule";
import { useParams } from "react-router-dom";
// import '../NavBarComponents/forNav.css'

import { React, useEffect, useState } from "react";
import { Button, Fade, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const mystyle={
    padding:"0 10px", 
    border:"1px solid",
    width:"10px"
  };

function Packagedetails() {
  const { Pkg_Id } = useParams();
  console.log(Pkg_Id);

  const [packs, setPack] = useState([]);

  useEffect(() => {
    fetch("https://localhost:44303/api/detailedPackage/" + Pkg_Id)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setPack(result);
      });
  }, []);

  
  return (
    <div>
      <h1></h1>
      {packs.map((pro, i) => (
        <Packageeach key={i} data={pro} />
      ))}
    </div>
  );
}

function Packageeach(props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="row justify-content-center wd-100">
      <div className="col-lg-8 col-md-7 text-center both-space">
        <Card style={{ width: "75rem"  , display:"inline-block"}}>
          <Card.Header>
            <h3>PACKAGE DETAILS</h3>
          </Card.Header>
          <Card.Body>
          <div>
          <img src={props?.data?.Image_Path}/>
            </div>

            {/* <div className="row">
                            <div className="col">
                                Pkg_Id:
                            </div>
                            <div className="col col-lg-10">
                                {props?.data?.Pkg_Id}
                            </div>
                        </div > */}
            
            <div className="row" style={{margin:"25px 0px 25px 50px"}}>
              <div className="col "><b><h4>Package:</h4></b></div>
              <div className="col "><b><h4>{props?.data?.Package_Title}</h4></b></div>
            </div>

            

            <Card.Text>
              <table style={{cellpadding :"5", display:"inline-block"}}>
               
                <thead>
                  <tr>
                    <th style={mystyle}>Pkg_Exp_Id:</th>
                    <th style={mystyle}>Default_Fare:</th>
                    <th style={mystyle}>Room_Per_Person:</th>
                    <th style={mystyle}> Room_Twin_Sharing: </th>
                    <th style={mystyle}> Extra_Person:</th>
                    <th style={mystyle}> Child_With_Bed: </th>
                    <th style={mystyle}>Child_Without_Bed:</th>
                  </tr>
                </thead>
                <tr>
                  <td style={mystyle}>{props?.data?.Package_Expense[0]?.Pkg_Exp_Id}</td>
                  <td style={mystyle}>{props?.data?.Package_Expense[0]?.Default_Fare}</td>
                  <td style={mystyle}>{props?.data?.Package_Expense[0]?.Room_Per_Person}</td>
                  <td style={mystyle}>{props?.data?.Package_Expense[0]?.Room_Twin_Sharing}</td>
                  <td style={mystyle}>{props?.data?.Package_Expense[0]?.Extra_Person}</td>
                  <td style={mystyle}>{props?.data?.Package_Expense[0]?.Child_With_Bed}</td>
                  <td style={mystyle}>{props?.data?.Package_Expense[0]?.Child_Without_Bed}</td>
                </tr>
              </table>
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link
              className="btn btn-outline-secondary"
              onClick={() => setOpen(!open)}
              aria-controls="example-fade-text"
              aria-expanded={open}
            >
              SCHEDULE
            </Card.Link>

            <Link
              className="btn btn-outline-success"
              to={"/Book/" + props?.data?.Pkg_Id}
              style={{ marginLeft: "10px" }}
            >
              BOOK
            </Link>
          </Card.Body>
          <Fade in={open}>
            <div id="example-fade-text">
              <table style={{border:"1px solid", margin:"20px 0 30px 0", display:"inline-block"}} cellpadding="5">
                <tr>
                  <th>Sche_Id</th>
                  <th>Start_Date</th>
                  <th>End_Date</th>
                  <th>Info</th>
                </tr>
                
                {props.data.Schedule.map((pro, i) => (
                  <Schedule key={i} data={pro} />
                ))}
                <br></br>
              </table>
            </div>
          </Fade>
        </Card>
      </div>
    </div>
  );
}

export default Packagedetails;
