import './Search.css';
import React from 'react';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
//import PackageDisplay from './PackageDisplay';
// import Packagedetails from './Packagedetails';

function Search() {
    function ClearFields() {
        document.getElementById("date1").value = "";
        document.getElementById("date2").value = "";
        document.getElementById("min").value = "";
        document.getElementById("max").value = "";
        document.getElementById("day").value = "";
        setStartdate("");
        setEnddate("");
        setMinimumcost("");
        setMaximumcost("");
        setDuration("");
        setSearchbyperiod("");
    }
    //date logic
    const [minimumcost, setMinimumcost] = useState();
    const [maximumcost, setMaximumcost] = useState();
    const [pack, setPackage] = useState([null]);
    const [duration, setDuration] = useState();
    const [fromdate, setStartdate] = useState();
    const [todate, setEnddate] = useState();
    const [searchbyperiod, setSearchbyperiod] = useState([])

    const mincostchange = (event) => {
        const value = event.target.value;
        setMinimumcost(value);
    }

    const maxcostchange = (event) => {
        const value = event.target.value;
        setMaximumcost(value);
    }
    const handlecostsubmit = () => {
        console.log("calculated cost: "+minimumcost +"   max:"+maximumcost);
        //Write fetch method here
        if(minimumcost!=null && maximumcost!=null){
        fetch("https://localhost:44303/searchbycost/"+minimumcost+"/"+maximumcost)
            .then(res => res.json())
            .then((result) => { setPackage(result); console.log(result); }
            );}
            else
            {alert("ENTER CRENDENTIALS")}
           
            //console.log(pack);
    }
    //by duration days logic

    const durationChange = (event) => {
        const value = event.target.value;
        setDuration(value);
    }

    const handleDurationChange = () => {
        if(duration!=null){
        fetch("https://localhost:44303/searchbyduration/"+duration)
            .then(res => res.json())
            .then((result) => { setPackage(result); }
            );}
            else
            {alert("ENTER CRENDENTIALS")}
            console.log(pack);
    }

    
    // function calD(date1, date2) {
    //     const date3 = new Date(date1);
    //     const date4 = new Date(date2);
    //     const diff = Math.abs(date4 - date3);//ms
    //     const fin = diff / (1000 * 60 * 60 * 24);//
    //     return (fin)
    //         ;
    // }
    function currentdate(today) {
        // const today = new Date();
        const bookingdates = `${today.getFullYear()}-${(today.getMonth() + 1) < 10 ? `0${(today.getMonth() + 1)}` : `${(today.getMonth() + 1)}`}-${(today.getDate()) < 10 ? `0${(today.getDate())}` : `${(today.getDate())}`}`;
        return bookingdates;
    }
    
    // //by date logic
    const handleStartDateChange = (event) => {
        const value = event.target.value;
        setStartdate(value)
    }

    const handleEndDateChange = (event) => {
        const value = event.target.value;
        setEnddate(value);
    }
    // useEffect(() => {
    //     fetch(`http://localhost:8080/package`)
    //         .then(res => res.json())
    //         .then((result) => { setPackage(result); }
    //         );
    // }, []);

    const handlePeriodSubmit = () => {
        // const searchbydates = pack.filter(tours => { return fromdate <= tours.tourdate && tours.tourdate <= todate });
        // setSearchbyperiod(searchbydates);
        console.log("fromdate: "+fromdate+" endDate: "+todate);
        if(fromdate!=null && todate!=null){
        fetch("https://localhost:44303/searchbydate/"+fromdate+"/"+todate)
            .then(res => res.json())
            .then((result) => { setPackage(result); }
            );}
            else
            {alert("ENTER CRENDENTIALS")}
            console.log(pack);
    }

    return (
        <>
            {/*Search Bar 1*/}
            <div className="container" id="btn_search">
                <hr style={{ height: "150px", borderwidth: "0", color: "white", backgroundcolor: "gray" }} />
                <div className="row " id="search_btn">
                    <div className="col-md-8">
                        <a className="btn btn-outline-info " data-bs-toggle="collapse" margin href="#multiCollapseExample1"
                            role="button" aria-expanded="false" aria-controls="multiCollapseExample1 "><b>Search by Period</b>
                        </a>
                        <div className="collapse multi-collapse" id="multiCollapseExample1">
                            <div className="input-group mb-2">
                                <span className="input-group-text" id="basic-addon1">From</span>
                                <input id="date1" type="date" className="form-control" name="startdates" placeholder="From..." aria-label="from"
                                    aria-describedby="basic-addon1" onChange={handleStartDateChange} min={currentdate(new Date())} />
                            </div>
                            <div className="input-group mb-2">
                                <span className="input-group-text" id="basic-addon1">To&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <input id="date2" type="date" className="form-control" name="enddates" placeholder="To..." aria-label="from" aria-describedby="basic-addon1" onChange={handleEndDateChange} min={currentdate(new Date())} />
                            </div>
                            <button type="button" className="btn btn-secondary mt-1 mb-2" onClick={handlePeriodSubmit}>Search</button>
                            <button type="button" className="btn btn-secondary ms-2 mt-1 mb-2" onClick={ClearFields}>Clear</button>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <a className="btn btn btn-outline-info" data-bs-toggle="collapse" href="#multiCollapseExample2"
                            role="button" aria-expanded="false" aria-controls="multiCollapseExample2 "><b>Search by Cost</b>
                        </a>
                        <div className="collapse multi-collapse" id="multiCollapseExample2">

                            <div className="input-group mb-2">
                                <span className="input-group-text" id="basic-addon1">From</span>
                                <input type="text" name="mincost" id="min" className="form-control" placeholder="Min..." aria-label="from" aria-describedby="basic-addon1" onChange={mincostchange} range="0" />
                            </div>
                            <div className="input-group mb-2">
                                <span className="input-group-text" id="basic-addon1">To&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <input type="text" name="maxcost" id="max" className="form-control" placeholder="Max..." aria-label="from"
                                    aria-describedby="basic-addon1" onChange={maxcostchange} />
                            </div>
                            <button type="button" className="btn btn-secondary mt-1 mb-2" onClick={handlecostsubmit}>Search</button>
                            <button type="button" className="btn btn-secondary ms-2 mt-1 mb-2" onClick={ClearFields}>Clear</button>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <a className="btn btn btn-outline-info" data-bs-toggle="collapse" href="#multiCollapseExample3"
                            role="button" aria-expanded="false" aria-controls="multiCollapseExample3 "><b>Search by Duration</b>
                        </a>
                        <div className="collapse multi-collapse" id="multiCollapseExample3">

                            <div className="input-group mb-2">
                                <span className="input-group-text" id="basic-addon1">Duration &nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <input type="text" name="days" id="day" className="form-control" placeholder="Enter Max Duration Days" aria-label="from"
                                    aria-describedby="basic-addon1" onChange={durationChange} />
                            </div>
                            <button type="button" className="btn btn-secondary mb-2" onClick={handleDurationChange}>Search</button>
                            <button type="button" className="btn btn-secondary ms-2 mb-2" onClick={ClearFields}>Clear</button>
                        </div>
                    </div>
                    <div>
                    <div className="row">
                        {
                            pack != null ? (<>
                                <div className="row">
                                    <div className="col-2">
                                    </div>
                                    <div className="col-8 text-center" >
                                        <h2>Tours Avilable</h2>
                                        <div class="table-responsive" style={{ height: "250px", overflow: "auto" }}  >
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Sr. No.</th>
                                                        <th scope="col">Tour name</th>
                                                        <th scope="col">Start Date</th>
                                                        <th scope="col">End Date</th>
                                                        <th scope="col">View Tour</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    {pack.map((book, i) => (
                                                        <>
                                                            <tr key={i}>
                                                                <th scope="row">{i + 1}</th>
                                                                <td>{book?.Package_Title}</td>
                                                                <td>{book?.Date_Master[0]?.Departure_Date}</td>
                                                                <td>{book?.Date_Master[0]?.End_Date}</td>
                                                                <td>
                                                                    <Link to={`/Package_Details/${book?.Pkg_Id}`}>
                                                                       
                                                                        <Button className="btn btn-info" type="submit">View Tour</Button></Link>
                                                                        
                                                                        </td>
                                                            </tr>
                                                        </>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        <br />
                                    </div>
                                </div>
                            </>) : <></>
                        }
                    </div>
                    </div>
                </div>

                <hr style={{ height: "100px", borderwidth: "0", color: "white", backgroundcolor: "gray" }} />
            </div>

        </>
    );

}

export default Search;