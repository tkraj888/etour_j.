import React from "react";
import Passangers from "./Passangers";


class Bookingdetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            booking: [],
        };
    }


    componentDidMount() {
        this.setState({
            booking: [
                {
                    "Bkg_Id": 8,
                    "Date": "2022-07-02T10:34:23",
                    "Status": "Approved",
                    "PackagePkg_Id": 2,
                    "Fare": "5000",
                    "Package": [
                        {
                            "Package_Title": "Adventures trip on lake side",
                            "From_DateTime": "2022-04-22T10:34:23"
                        }
                    ],
                    "Fares": [
                        {
                            "Fare_Id": 8,
                            "Basic_Fare": 4500.0,
                            "Infants": 4500.0,
                            "Extra_Bed": 4500.0,
                            "Child_With_Bed": 4500.0,
                            "Child_Without_Bed": 4500.0
                        }
                    ],
                    "Passangers": [
                        {
                            "Pass_Id": 16,
                            "Name": "Aksha",
                            "Age": 56,
                            "Gender": "Male",
                            "DOB": "2022-03-28T10:34:23",
                            "Passport_Number": "JHHGU77"
                        },
                        {
                            "Pass_Id": 17,
                            "Name": "Chetan",
                            "Age": 93,
                            "Gender": "Male",
                            "DOB": "2022-03-28T10:34:23",
                            "Passport_Number": "KHRFF67"
                        }
                    ]
                }
            ]
        });

        console.log(this.state.package);

        /*fetch("https://localhost:44303/getprofile/1")
          .then((r) => r.json())
          .then((res) => {
            console.log(res);
            this.setState({ package: [{
    
                "Pkg_Id": 3,
                "Package_Title": "Cricket Dhamaka in europe",
                "Image_Path": "path",
                "Package_Expense": [
                    {
                        "Pkg_Exp_Id": 3,
                        "Default_Fare": 300000.0,
                        "Room_Per_Person": 10000.0,
                        "Room_Twin_Sharing": 8000.0,
                        "Extra_Person": 6000.0,
                        "Child_With_Bed": 12000.0,
                        "Child_Without_Bed": 11000.0
                    }]
            }] });
          });*/


    }

    render() {



        return (
            <div>

                {this.state.booking.map((pro, i) => (
                    <Bookingeach key={i} data={pro} />
                ))}
            </div>
        );
    }

}
function Bookingeach(props) {
    return (
        <div align="center">
            <div>
                <h3>BookingDetails...</h3>
                <p>Bkg_Id:{props.data.Bkg_Id}</p>
                <p>Date:{props.data.Date}</p>
                <p>Status:{props.data.Status}</p>
                <p>PackagePkg_Id:{props.data.PackagePkg_Id}</p>
                <p>Fare:{props.data.Fare}</p>

                <b> Package..</b>{" "}

                <p> Package_Title: {props.data.Package[0].Package_Title}</p>
                <p>From_DateTime: {props.data.Package[0].From_DateTime}</p>
                <b> Fares..</b>{" "}
                <p> Fare_Id: {props.data.Fares[0].Fare_Id}</p>
                <p> Basic_Fare: {props.data.Fares[0].Basic_Fare}</p>
                <p>Infants: {props.data.Fares[0].Infants}</p>
                <p>Child_With_Bed: {props.data.Fares[0].Child_With_Bed}</p>
                <p>Child_Without_Bed: {props.data.Fares[0].Child_Without_Bed}</p>

            </div>


            <h3>Passangers...</h3>
            <div>

                <tr >
                    <th>Pass_Id </th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>DOB</th>
                    <th>Passport_Number</th>
                </tr>

                {props.data.Passangers.map((pro, i) => (
                    <Passangers key={i} data={pro} />



                ))}
            </div>
        </div>
    );
}

export default Bookingdetails;
