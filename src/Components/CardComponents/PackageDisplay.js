
import React from 'react';
import { Link } from 'react-router-dom';
// import Sub_Category from './Sub_Category';
import './Package.css';





const PackageDisplay = (props) => {

    // const handleClick = (Flag, Cat_Master_Id) => {


    //     // if (Flag) { <Link to={`/packages`}>Go somewhere</Link> }
    //     // else { <Link to={'/Sub_Category/' + Cat_Master_Id} ></Link> }
    // }

    // /${value.id}

    return (<>
        {props.details.map((value, index) => {
            console.log(value)

            return (
                <div className="cardp  container home-cards " key={index} style={{ cursor: 'pointer' }}>

                    <div className="card-image">
                        <img src={value?.Image_Path} alt="here is im" height="140" />

                    </div>
                    <div className="card_contentp">
                        <div className="card_titlep">
                            <h1>{value?.Package_Title}</h1>
                        </div>
                        <p className="description">


                            <h5>PACKAGE EXPENSE :</h5>  {value?.Package_Expense[0]?.Default_Expense}<br />
                            <h5> Departure Date   : </h5> {value?.Date_Master[0]?.Departure_Date} <br />
                            <h5> End Date     : </h5> {value?.Date_Master[0]?.End_Date} <br />
                        </p>
                        <Link to={'/Package_Details/' + value?.Pkg_Id} >
                            <button className="btnn  btn-outline-primary px-4">DETAILS</button></Link>
                        {/* <Link to={`/packages`}>Go somewhere</Link> */}
                    </div>
                </div>

            );


        })};
    </>
    );


}

export default PackageDisplay;


