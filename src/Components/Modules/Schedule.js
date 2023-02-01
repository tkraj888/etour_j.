

import React from 'react'
// import './Table.css';



 function Schedule(props) {
  return (
   
    
      <tr>
        <td>{props?.data?.Sche_Id}</td>               
        <td>{props?.data?.Start_Date}</td>       
        <td>{props?.data?.End_Date}</td>
        <td>{props?.data?.Info}</td>
       </tr>
       
        
  )
}
export default Schedule;