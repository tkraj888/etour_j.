import { height } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import './AboutCs.css'

function AboutUs() {
  return (<>
    <div
      className="c2a8"
      style={{
        backgroundImage:
          "./images/waterfall.png",
        backgroundRepeat: "no-repeat"
       ,margin: "0% 10% 0% 0%"
      }}
    >
      <div className="container" style={{}} >
        {/* Row */}
        <div className="row justify-content-center wd-100" >
          <div className="col-lg-9 text-center both-space" >
            <div className="card bg-danger-gradiant" style={{ width: '60rem', height: '35rem' }} >
              <div className="card-body">
              <h3 className="mb-3 text-white font-italic">
                    <b>WHY US?</b>
                  </h3>
                <div className="text-box">  
                  <h6 className="subtitle font-weight-normal  text-white op-4">
                    Your time is important. When you choose INDIA TOURS, we dedicate time to organising a first-rate experience using our regional knowledge, so you can spend your own time however you please. And once you are travelling, each day of your personalised itinerary is set up to be memorable.
                  </h6>
                </div>
                <h6 className="subtitle font-weight-normal  text-white op-5">
                 <h4><b>OUR VALUES</b></h4> 
                  “At INDIA TOURS, we’re guided by a set of core values — quality, dedication, trust and personal service — and we ensure that these hallmarks are met at every stage of your journey.”
                </h6> 
                <h6 className="subtitle font-weight-normal  text-white op-5">
                 <h4><b> BOOK WITH CONFIDENCE</b></h4>    
Plan your trip risk-free with INDIA TOURS's cancellation insurance. Add it to your booking to enjoy flexible terms and peace of mind. Purchase it with your package or secure it free of charge by booking a tour with 20% deposit or more. Terms & conditions apply.</h6> </div>
        <Link
                className="btn bg-white text-danger rounded-pill btn-md mt-50 "
                to="/"
              >
                <span>Reserve Your Tour </span>
              </Link>
            </div>
          </div>
          {/* Column */}
        </div>
      </div>
    </div>


  </>
  )
}

export default AboutUs
