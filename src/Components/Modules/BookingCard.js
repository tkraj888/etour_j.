import React from 'react'
import { Link } from 'react-router-dom';

export default function BookingCard(props) {

  console.log(props);

  return (
    <div>
      <div className='row d-flex ' >
        <div className=" col-6 mx-auto">
          <div className=' row justify-content-center' >

            <div class="card text-center"style={{width:"70%"}}>
              <div class="card-header" >
                {props.data.Package}
              </div>
              <div class="card-body">
                <h5 class="text-success" >{props?.data.Date}</h5>
                <p class="card-text">{props?.data.Status}</p>
                <Link to={"/BookingdetailsG/"+props?.data.Bkg_Id} class="btn btn-primary">Details</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

