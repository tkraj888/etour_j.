// import { FormatAlignJustify } from "@mui/icons-material";
// import { autocompleteClasses } from "@mui/material";
import { React, useState } from "react";
import { Card, Fade } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
// import styles from './Bookingdetails.css';
import Passangers from "./Passangers";

function Bookingeach(props) {
    const [open, setOpen] = useState(false);
    return (
        <div >
            <div className='card text-black ' id='ig'>
                <div className="d-sm p-2 bd-highlight ">
                    <h3 align="Center">Booking Detail</h3>
                </div>
            </div>
            <br />
            <div>
                <div className="card1" >
                    <table style={{ width: 480 }}>
                        <tr>
                            <td><b>Booking ID</b></td>
                            <td>{": " + props?.data.Bkg_Id}    </td>
                        </tr>
                        <tr>
                            <td><b>Date</b></td>
                            <td>{": " + props?.data.Date}</td>
                        </tr>

                        <tr>
                            <td><b>Status</b></td>
                            <td>{": " + props?.data.Status}</td>
                        </tr>
                        <tr>
                            <td><b>PackagePkg_Id</b></td>
                            <td>{": " + props?.data.PackagePkg_Id}</td>
                        </tr>
                        <tr>
                            <td><b>Fare</b></td>
                            <td>{": " + props?.data.Fare}</td>
                        </tr>
                    </table>
                </div>
                <br />
                <div className='card text-black ' id='ig'>
                    <div className="d-sm p-2 bd-highlight ">
                        <h3 align="Center">Fare</h3>
                    </div>
                </div>
                {/* <div className="card1">
                <div class="card-header" >
                <p className="text-center "><b> FARES.</b></p>
                </div>
                </div> */}
                <div className=" card1  ">

                    <Card style={{ width: 500 }}>
                        <Card.Header as="h5">

                            <p> <b>Package_Title: </b>{props.data.Package[0]?.Package_Title}</p>
                            <p><b>From_DateTime:</b> {props.data.Package[0]?.From_DateTime}</p>

                        </Card.Header>
                        <Card.Body style={{ display: "inline-block", margin: "30px" }}>


                            <table style={{ width: 400 }} >
                                <tr>
                                    <td><b>Fare Id</b></td>
                                    <td> {": " + props.data.Fares[0]?.Fare_Id}</td>
                                </tr>

                                <tr>
                                    <td><b>Basic Fare </b></td>
                                    <td>{": " + props.data.Fares[0]?.Basic_Fare}</td>
                                </tr>
                                <tr>
                                    <td><b>Infants</b></td>
                                    <td> {": " + props.data.Fares[0]?.Infants}</td>
                                </tr>
                                <tr>
                                    <td><b>Child with Bed </b></td>
                                    <td>{": " + props.data.Fares[0]?.Child_With_Bed}</td>
                                </tr>
                                <tr>
                                    <td><b>Child without Bed </b></td>
                                    <td>{": " + props.data.Fares[0]?.Child_Without_Bed}</td>
                                </tr>

                            </table>


                        </Card.Body>

                    </Card>
                    <Link to={"/Invoice/" + props.data?.Bkg_Id}>  <Button  className="btn btn-primary " style={{margin : "20px"}} >INVOICE</Button ></Link>
                    <Card.Link
                        className="btn btn-primary"
                        onClick={() => setOpen(!open)}
                        aria-controls="example-fade-text"
                        aria-expanded={open}
                        
                    >
                        PASSENGERS
                    </Card.Link>
                    <Fade in={open}>
                        <div id="example-fade-text">
                            <table >
                                <tr >
                                    {/* <th>Id </th> */}
                                    <th> Name </th>
                                    <th> Age </th>
                                    <th> Gender </th>
                                    <th> DOB </th>
                                    <th> Passport_Number </th>
                                </tr>
                     
                                    {props.data.Passangers?.map((pro, i) => (
                                        <Passangers key={i} data={pro} />
                                    ))}
                           
                            </table>
                        </div>
                    </Fade>
                </div>

            </div>


        </div>
    );
}

export default Bookingeach;