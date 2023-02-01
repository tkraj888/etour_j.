import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthenticationService from "../Services/AuthenticationService";
import './booking.css'
import Bookingeach from "./Bookingeach";
import { useNavigate } from "react-router-dom";




function BookingdetailsG() {

    const navigate=useNavigate();
    const [booking, setBooking] = useState([]);
    const{Bkg_Id}=useParams();


    useEffect(() => {
                        const jwt = AuthenticationService.JwtToken();
                        console.log(jwt);


                        const Id = AuthenticationService.Auth_ID();
                        console.log(Id);
                        if (jwt == null || Id == null) { navigate('/Login') }

                        fetch("https://localhost:44303/detailedBooking/" + Bkg_Id)
                            .then((r) => r.json())
                            .then((res) => {
                                console.log(res);
                                setBooking(res);
                            });

                        console.log(booking);
    }, [])

    return (
        <div>
            <div className="card1">
                {booking.map((pro, i) => (
                    <Bookingeach key={i} data={pro} />
                ))}
            </div>
        </div>
    )
}

export default BookingdetailsG;






// class BookingdetailsG extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             booking: [],
//         };
//     }


//     // componentDidMount() {

//     //     this.setState({
//     //         booking: [
//     //             {
//     //                 "Bkg_Id": 8,
//     //                 "Date": "2022-07-02T10:34:23",
//     //                 "Status": "Approved",
//     //                 "PackagePkg_Id": 2,
//     //                 "Fare": "5000",
//     //                 "Package": [
//     //                     {
//     //                         "Package_Title": "Adventures trip on lake side",
//     //                         "From_DateTime": "2022-04-22T10:34:23"
//     //                     }
//     //                 ],
//     //                 "Fares": [
//     //                     {
//     //                         "Fare_Id": 8,
//     //                         "Basic_Fare": 4500.0,
//     //                         "Infants": 4500.0,
//     //                         "Extra_Bed": 4500.0,
//     //                         "Child_With_Bed": 4500.0,
//     //                         "Child_Without_Bed": 4500.0
//     //                     }
//     //                 ],
//     //                 "Passangers": [
//     //                     {
//     //                         "Pass_Id": 16,
//     //                         "Name": "Aksha",
//     //                         "Age": 56,
//     //                         "Gender": "Male",
//     //                         "DOB": "2022-03-28T10:34:23",
//     //                         "Passport_Number": "JHHGU77"
//     //                     },
//     //                     {
//     //                         "Pass_Id": 17,
//     //                         "Name": "Chetan",
//     //                         "Age": 93,
//     //                         "Gender": "Male",
//     //                         "DOB": "2022-03-28T10:34:23",
//     //                         "Passport_Number": "KHRFF67"
//     //                     }
//     //                 ]
//     //             }
//     //         ]
//     //     });

//         console.log(this.state.package);

//     /*fetch("https://localhost:44303/getprofile/1")
//       .then((r) => r.json())
//       .then((res) => {
//         console.log(res);
//         this.setState({ package: [{
 
//             "Pkg_Id": 3,
//             "Package_Title": "Cricket Dhamaka in europe",
//             "Image_Path": "path",
//             "Package_Expense": [
//                 {
//                     "Pkg_Exp_Id": 3,
//                     "Default_Fare": 300000.0,
//                     "Room_Per_Person": 10000.0,
//                     "Room_Twin_Sharing": 8000.0,
//                     "Extra_Person": 6000.0,
//                     "Child_With_Bed": 12000.0,
//                     "Child_Without_Bed": 11000.0
//                 }]
//         }] });
//       });*/


// }

// render() {



//     return (
//         <div>
//             <div className="card1">
//                 {this.state.booking.map((pro, i) => (
//                     <Bookingeach key={i} data={pro} />
//                 ))}
//             </div>
//         </div>
//     );
// }

// }




