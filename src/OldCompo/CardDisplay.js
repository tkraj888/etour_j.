
// import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import Sub_Category from '../Sub_Category';
import './Card.css';
// import Slideshow from '../MainComp/Slideshow';





const CardDisplay = (props) => {


    console.log(props);
    // /${value.id}

    return (<>
        {props.details.map((value, index) => {

            return (

                <div className="card container home-cards " key={index} style={{ cursor: 'pointer' }}>
                            <div className="card-image">
                                <img src={value?.Cat_Image_Path} alt="here is im" height="140" />
                            </div>
                        <div className="card_content">
                            <div className="card-title">{value?.Cat_Name}</div>
                            <div className="description">
                                {value?.discription}
                            </div>
                            <div><Link to={(value?.Flag) ? '/Packages/' + value?.Cat_Master_Id : '/Sub_Category/' + value?.Cat_Master_Id} >
                            <Button variant="outline-success" className="btnn btn-md mt-50 "> Xplore</Button> </Link></div>
                            
                        </div>
                </div>    
        
                 );
                                                }
                                )};
    </>
    );


}

export default CardDisplay;


