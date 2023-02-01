import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({passengerDetails,deletePass}) => {
    
    return(passengerDetails.map((pass, i) => 
        <tr key={i}>
            <td>{pass.Name}</td>
            <td>{pass.Gender}</td>
            <td>{pass.Age}</td>
            <td>{pass.dob}</td>
            <td>{pass.Passport_Number}</td>
            <td className='delete-btn' onClick={()=>deletePass(pass.Pass_Id)}>
                <Icon icon={trash}/>
            </td>           
        </tr>    

))
}
