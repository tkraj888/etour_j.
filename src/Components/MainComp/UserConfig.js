
import React, { useEffect, useState } from "react";
import AuthenticationService from "../Services/AuthenticationService";
import './UserConfig.css';



function UserConfig() {
    const[user,setUser]=useState([]);
    
            useEffect(()=>{
                fetch("https://localhost:44303/Users",{ 
                    headers: { 
                        // "Content-type": "application/json" ,
                "Authorization" : AuthenticationService.headers()},})
                .then((res) => res.json())
                .then((result) => {
                    setUser(result);
                  console.log(user);
                });
            }, []);




          
  return (
    <div align="center">
    <h3>UserInformation..</h3>
<tr >
<th>User_Id </th>
<th>User_Name</th>
{/* <th>Adress</th> */}
{/* <th>Gender</th>  */}
{/* <th>Phone</th> */}
<th>Role</th>
<th>Select</th>        
</tr>  


    

{user.map((pro, i) => (
    <Usereach key={i} data={pro} />
))}
</div>
  )
}


function Usereach(props) {
    return (
        <tr>
        <td>{props.data.User_Id}</td>               
        <td>{props.data.User_Name}</td>       
        {/* <td>{props.data.Adress}</td>
        <td>{props.data.Gender}</td>
        <td>{props.data.Phone}</td> */}
        <td>{props.data.Role}</td>
        <td><select name="role">
            <option>User</option>
            <option>Admin</option>
            </select>
         </td>
       </tr>       
           
        
      
    );
}

export default UserConfig



// class Usernfo extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             user: [],
//         };
//     }

//   componentDidMount() {
//     this.setState({ user:[
//         {
//             "User_Id":1,
//             "User_Name":"pradip",
//             "Adress":"Noida",
//             "Gender": "Male",
//             "Phone":"2938782371",
//             "Role":"User"
//         },
//         {
//         "User_Id":2,
//             "User_Name":"akshay",
//             "Adress":"pune",
//             "Gender": "Male",
//             "Phone":"9872237121",
//             "Role":"Admin"
//         } ]           
            
//         });
//     }

    

// render() {
   
//     return (
//         <div align="center">
//             <h3>UserInformation..</h3>
//         <tr >
//         <th>User_Id </th>
//         <th>User_Name</th>
//         <th>Adress</th>
//         <th>Gender</th> 
//         <th>Phone</th>
//         <th>Role</th>
//         <th>Select</th>        
//         </tr>  

        
            

//         {this.state.user.map((pro, i) => (
//             <Usereach key={i} data={pro} />
//         ))}
//     </div>
//     );
// }

// }



// // export default Usernfo;
