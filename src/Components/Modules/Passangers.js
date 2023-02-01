import React from 'react'

function Passangers(props) {
    return (<>
      
       
     
        <tr>
            {/* <td>{props.data.Pass_Id}</td> */}
            <td>{props.data.Name}</td>
            <td>{props.data.Age}</td>
            <td>{props.data.Gender}</td>
            <td>{props.data.DOB}</td>
            <td>{props.data.Passport_Number}</td>
        </tr>
        

       
    </>
    )
}
export default Passangers;