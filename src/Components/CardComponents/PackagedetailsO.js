
import Schedule from "../Modules/Schedule";
import { useParams } from 'react-router-dom'
// import '../NavBarComponents/forNav.css'


import { React, useEffect, useState } from 'react'
import { Button, Fade, Card } from "react-bootstrap";
import { Link } from "react-router-dom";



function Packagedetails() {
    const { Pkg_Id } = useParams();
    console.log(Pkg_Id);

    const [packs, setPack] = useState([]);

    useEffect(() => {
        fetch("https://localhost:44303/api/detailedPackage/" + Pkg_Id)
            .then(res => res.json())
            .then((result) => { console.log(result); setPack(result); }
            );
    }, []);
    return (
        <div>
            <h1></h1>
            {packs.map((pro, i) => (
                <Packageeach key={i} data={pro} />
            ))}
        </div>
    )
}





function Packageeach(props) {
    const [open, setOpen] = useState(false);
    return (
        <div className="row justify-content-center wd-100">
            <div className="col-lg-8 col-md-7 text-center both-space">


                <Card style={{ width: '60rem' }}  >
                    <Card.Header><h3>PACKAGE DETAILS</h3></Card.Header>
                    <Card.Body>
                        <div class="row">
                            <div class="col">
                                FirstName
                            </div>
                            <div class="col col-lg-10">
                                Column
                            </div>
                        </div >
                        {/* <div class="row">
                            <div class="col">
                                Pkg_Id:
                            </div>
                            <div class="col col-lg-10">
                                {props?.data?.Pkg_Id}
                            </div>
                        </div > */}
                        <div class="row">
                            <div class="col ">
                                Package_Title:
                            </div>
                            <div class="col col-lg-10">
                                {props?.data?.Package_Title}
                            </div>
                        </div >


                        <div>
                            <img src={props?.data?.Image_Path}/>
                        </div>



                        <Card.Text>

                            <table cellpadding="5">
                                <caption>LISTS OF COURSE AND PRICE</caption>
                                <thead>
                                    <tr>
                                        <th>Pkg_Exp_Id:</th>
                                        <th>Default_Fare:</th>
                                        <th>Room_Per_Person:</th>
                                        <th> Room_Twin_Sharing: </th>
                                        <th> Extra_Person:</th>
                                        <th> Child_With_Bed: </th>
                                        <th>Child_Without_Bed:</th>
                                    </tr>
                                </thead>
                                <tr>
                                    <td>{props?.data?.Package_Expense[0]?.Pkg_Exp_Id}</td>
                                    <td>{props?.data?.Package_Expense[0]?.Default_Fare}</td>
                                    <td>{props?.data?.Package_Expense[0]?.Room_Per_Person}</td>
                                    <td>{props?.data?.Package_Expense[0]?.Room_Twin_Sharing}</td>
                                    <td>{props?.data?.Package_Expense[0]?.Extra_Person}</td>
                                    <td>{props?.data?.Package_Expense[0]?.Child_With_Bed}</td>
                                    <td>{props?.data?.Package_Expense[0]?.Child_Without_Bed}</td>
                                </tr>


                            </table>
                        </Card.Text>
             
                    </Card.Body>
                    <Card.Body>
                       
                        <Card.Link  className="btn btn-outline-secondary"
                            onClick={() => setOpen(!open)}
                            aria-controls="example-fade-text"
                            aria-expanded={open}   >
                            SCHEDULE
                        </Card.Link >
                    
                        <Link  className="btn btn-outline-success"
                           to={'/Book/' + props?.data?.Pkg_Id} style={{marginLeft:"10px"}} >
                          BOOK
                        </Link >
                 </Card.Body>
                     <Fade in={open} >
                            <div id="example-fade-text" >
                                <table style={{border:"1px solid", margin:"0 0 50px 300px"}}  cellpadding="5">
                                    <tr >
                                        <th>Sche_Id</th>
                                        <th>Start_Date</th>
                                        <th>End_Date</th>
                                        <th>Info</th>
                                    </tr>

                                    {props.data.Schedule.map((pro, i) => (
                                        <Schedule key={i} data={pro} />

                                    ))}
                                </table>
                            </div>
                        </Fade>
                </Card>






            </div>
        </div>
    );
}

export default Packagedetails;
