import { Card } from "react-bootstrap";
import React from 'react';
 
function ContactUs() {
    return (
        <div style={{margin:"100px 12px 100px 12px"}}>
            <div class="container">
                <div class="content-section" >
                    <div class="title">
                        <h1 class="text-center "> <strong>Contact us</strong></h1>
                    </div >
                    <div class="content">
                        <div class="text1">
                        <br/>
                        <h2>India Tours Ltd. </h2>
                        <h3>
                            H.O: 111, College Road, Mahatma Nagar 
                            <br/>Nashik 422 010.
                        </h3>
                        </div>
                        <i class="fas fa-phone mt-4 fa-2x"></i>
                        <p>Contact No.: +91 2212345678.</p>
                        <a>Email:</a> <a href = "mailto: tourindia@gmail.com">indiatours@gmail.com</a>
                  
                    </div>
                </div>
            </div>


        </div>
    )
}
export default ContactUs;