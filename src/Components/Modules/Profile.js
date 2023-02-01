import React from 'react'
import BookingCard from './BookingCard';
import './Profile.css';
import AuthenticationService from '../Services/AuthenticationService';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';





function Profile() {

  const [profile, setProfile] = useState([]);
  const navigate=useNavigate();
  

  useEffect(() => {

      const jwt = AuthenticationService.JwtToken();
  console.log(jwt);


  const Id = AuthenticationService.Auth_ID();
  console.log(Id);
     if (jwt == null || Id == null) { navigate('/Login')}

    fetch("https://localhost:44303/getprofile/"+Id)
      .then((r) => r.json())
      .then((res) => {
        console.log(res);
        setProfile(res);
      });

    console.log(profile);
  },[]
  )

  return (
    <>
      <div className='card2'>
        <br />
        <div className='card text-black mb-3' id='ig'>
          <h1 align="Center">Profile</h1>
        </div>
        {profile.map((pro, i) => (
          <Profileeach key={i} data={pro} />
        ))}
      </div>
    </>
  )

}

// class Profile extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       Profiles: [],
//     };
//   }

//   componentDidMount() 
//   {

//     const jwt = AuthenticationService.JwtToken();
//     console.log(jwt);


//     const Id = AuthenticationService.Auth_ID();
//     console.log(Id);
//     if (jwt == null || Id == null) { }

//     fetch("https://localhost:44303/getprofile/" + Id)
//       .then((r) => r.json())
//       .then((res) => {
//         console.log(res);
//         this.setState({ Profiles: res });
//       });
//     console.log(this.state.Profiles);
//   }

//   render() {
//     return (
//       <div className='card2'>
//         <br />
//         <div className='card text-black mb-3' id='ig'>
//           <h1 align="Center">Profile</h1>
//         </div>
//         {this.state.Profiles.map((pro, i) => (
//           <Profileeach key={i} data={pro} />
//         ))}
//       </div>
//     );
//   }
// }

function Profileeach(props) {



  return (
    <div >

      <div className="card1" style={{display:"inline-block" }}>
        <table width={500} >
          <tr id="tr1"><td> Name </td><td><b> {": " + props.data.profile.First_Name + " "} {props.data.profile.Middle_Name + " "} {props.data.profile.Last_Name} </b></td>
          </tr>
          <tr id="tr"><td> Email </td><td> <b>{": " + props.data.profile.Email}</b></td>                 </tr>
          <tr id="tr"><td> Phone No.  </td><td> <b>{": " + props.data.profile.Phone_Number}</b> </td>  </tr>
          <tr id="tr"><td> Address   </td><td><b>{": " + props.data.profile.Address_Line}</b>     </td>  </tr>
          <tr id="tr"><td> City     </td><td> <b>{": " + props.data.profile.City}</b>              </td>  </tr>
          <tr id="tr"><td> PinCode </td><td> <b>{": " + props.data.profile.Pincode}</b>            </td></tr>
          <tr id="tr"><td> Country  </td><td><b>{": " + props.data.profile.Country}</b>            </td></tr>
        </table>
      
        <Link to={"/EditUser/"+props.data.profile.Acc_Id}> <Button variant="info" className="btn-primary btn">EDIT USER</Button></Link>
      </div>
      <div >
        <br /><br />
        <div className='card text-black mb-3' id='ig'>
          <h1 align="center">Bookings</h1>
        </div>
        <div className=' '>
          {props.data.bookings.map((pro, i) => (
            <div className=''>
              < BookingCard key={i} data={pro} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}




export default Profile;