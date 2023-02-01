import React, { useState, useEffect } from "react";
import { View } from "./View";
import './Book.css'
import { useParams } from "react-router-dom";
import AuthenticationService from '../Services/AuthenticationService';
import { useNavigate } from "react-router-dom";
// getting the values of local storage
const getDatafromLS = () => {
  const data = localStorage.getItem("passengerDetails");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export const App = () => {
  // main array of objects state || pass state || pass array of objects
  const [passengerDetails, setpassengerDetails] = useState(getDatafromLS());

  // input field states
  const [Pass_Id, setId] = useState(1);
  const [Name, setName] = useState("");
  const [Gender, setGender] = useState("");
  const [Age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [Passport_Number, setPass] = useState("");
  const [sum, setSum] = useState(0);
  const [expense, setExpense] = useState();
  const navigate = useNavigate();
  const [Auth_Id, setAuth_Id] = useState("");
  const { Pkg_Id } = useParams();
  //for fare
  const [fare, setFare] = useState({
    Basic_Fare: 0,
    Infants: 0,
    Extra_Bed: 0,
    Child_With_Bed: 0,
    Child_Without_Bed: 0,
  });
  // form submit event
  const handleAddpassSubmit = (e) => {
    e.preventDefault();
    let pass = {
      Pass_Id,
      Name,
      Age,
      Gender,
      dob,
      Passport_Number
      //BookingBkg_Id,
    };
    setpassengerDetails([...passengerDetails, pass]);
    setId(Prev => Prev + 1);
    setName("");
    // setGender("");
    setAge("");
    setDob("");
    setPass("");
  };
  // delete
  const deletePass = (Pass_No) => {
    const filteredpassengerDetails = passengerDetails.filter(
      (element, index) => {

        return element.Pass_Id !== Pass_No;
        //localStorage.removeItem(element.Pass_Id);
      }
    );
    setpassengerDetails(filteredpassengerDetails);
  };





  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("passengerDetails", JSON.stringify(passengerDetails));
  }, [passengerDetails]);

  // Getting Expense Object From Database
  useEffect(() => {
    const jwt = AuthenticationService.JwtToken();
    console.log(jwt);
    const Id = AuthenticationService.Auth_ID();

    setAuth_Id(Id);
    console.log(Id);
    if (jwt == null || Id == null) {
      alert("PLEASE LOGIN FIRST");
      navigate('/Login')
    }



    fetch("https://localhost:44303/api/packageExp/" + Pkg_Id)
      .then((res) => res.json())
      .then((result) => {
        setExpense(result);
      });
    console.log(expense);
  }, []);

  const cal = () => {
    setSum(expense[0]?.Default_Fare);
    passengerDetails?.map((pro, i) => {
      calFare(pro, i);
    });
  };

  const calFare = (pro) => {
    if (pro.Age > 6 && pro.Age < 16) {
      setSum((prevCount) => prevCount + expense[0]?.Child_With_Bed);
    } else {
      setSum((prevCount) => prevCount + expense[0]?.Room_Per_Person);
    }
  };

  //posting booking
  const bookTour = () => {
                        //console.log("Package_Id"+expense[0].PackagePkg_Id)
                        var test = passengerDetails.map((ele) => ele.Age > 6 && ele.Age < 16);
                        var ccwb = test.filter(ele => ele == true).length;
                        var inff = passengerDetails.map((ele) => ele.Age > 16);
                        var cinf = inff.filter(ele => ele == true).length;
                        console.log("Child_With_Bed: " + ccwb + "   Infants:" + cinf);
                        var Fare = {
                          Basic_Fare: expense[0]?.Default_Fare,
                          Infants: expense[0]?.Room_Per_Person * (cinf),
                          Extra_Bed: 0,
                          Child_With_Bed: expense[0]?.Child_With_Bed * (ccwb),
                          Child_Without_Bed: 0,
                        }
                        var book = {
                          "Date": new Date().toISOString().slice(0, 19).replace('T', ' '),
                          "Status": "Recived",
                          "AuthenticationAuth_Id": Auth_Id,
                          "PackagePkg_Id": Pkg_Id,
                          "Fare": sum,
                          "Fares": [Fare],
                          "Passangers": passengerDetails,
                        }
                        
                        let demo = JSON.stringify(book);
                        console.log(demo);
                        fetch("https://localhost:44303/api/Bookings", {
                          method: 'POST',
                          headers: { 'Content-type': 'application/json',
                                     "Authorization" : AuthenticationService.headers() },
                          body: demo
                        }).then(r => { console.log(r.json()); alert("Your Package is Booked Successful"); 
                         setpassengerDetails([]);
                        setId(Prev => Prev = 1); })

                        // navigate("#")
                        setpassengerDetails([]);
                        setId(Prev => Prev = 1);

  };



  return (
    <div className="wrapper">
      <h1>Passenger Details</h1>

      <div className="main">
        <div className="form-container">
          <form
            autoComplete="off"
            className="form-group"
            onSubmit={handleAddpassSubmit}
          >
            <label>Name</label>
            <br></br>

            <input
              type="text"
              className="form-control"
              required
              placeholder="Enter passenger full name"
              onChange={(e) => setName(e.target.value)}
              value={Name}
            ></input>
            <br></br>
            <br></br>
            <label>Gender</label>
            <br></br>
            <div class="container">
              <form>
                <label>
                  <input type="radio" name="radio" value="Male" checked="true" onChange={(e) => setGender(e.target.value)} />
                  <span>Male</span>
                </label>
                <label>
                  <input type="radio" name="radio" value="Female" onChange={(e) => setGender(e.target.value)} />
                  <span>Female </span>
                </label>
                <label>
                  <input type="radio" name="radio" value="Other" onChange={(e) => setGender(e.target.value)} />
                  <span>Other</span>
                </label>
              </form>
            </div>
            {/*  <div className="radio-buttons">
              <input
                type="radio"
                value="Male"
                name="Gender"
                
              />{" "}
              Male
              <input
                type="radio"
                value="Female"
                name="Gender"
                
              />{" "}
              Female
              <input
                type="radio"
                value="Other"
                name="Gender"
              
              />{" "}
              Other
            </div>
 */}

            <br></br>
            <label>Age</label>
            <br></br>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setAge(e.target.value)}
              value={Age}
            ></input>
            <br></br>
            <br></br>
            <label>DOB</label>
            <br></br>
            <input
              type="date"
              id="dob"
              value={dob}
              name="dob"
              onChange={(e) => setDob(e.target.value)}
            />
            <br></br>
            <br></br>
            <label>Passport Id</label>
            <br></br>
            <input
              type="id"
              id="Passport_Number"
              name="Passport_Number"
              value={Passport_Number}
              placeholder="Enter your passport id"
              onChange={(e) => setPass(e.target.value)}
            />
            <br></br>
            <br></br>
            <button
              type="submit"
              className="btn btn-success btn-md"
            >
              ADD
            </button>
            <br></br>
          </form>
        </div>
        <div className="view-container">
          {passengerDetails.length > 0 && (
            <>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Gender</th>
                      <th>Age</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <View
                      passengerDetails={passengerDetails}
                      key={passengerDetails.Pass_Id}
                      deletePass={deletePass}
                    />
                  </tbody>
                </table>
              </div>
              <button
                className="btn btn-danger btn-md"
                onClick={() => { setpassengerDetails([]); setId(Srev => Srev = 1) }}
              >
                Remove All
              </button>
            </>
          )}
          {passengerDetails.length < 1 && (
            <div>No passengerDetails are added yet</div>
          )}
          <br></br>
          <br></br>
          <button className="btn btn-danger btn-md" onClick={cal}>
            Calculate
          </button>
          <br></br>
          <h4>Total Fare:{sum}</h4>
          <br></br>
          <br></br>
          <button className="btn btn-danger btn-md" onClick={bookTour}>
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
