
import CardDisplayA from './CardDisplayA';
// import ContactUs from './NavBarComponents/ContactUs'

import { React,  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Sub_Category = () => {

const{Cat_Master_Id}=useParams();


const [packs, setPack] = useState([]);

    
              useEffect(() => {
              
                  fetch("https://localhost:44303/Subcat/"+ Cat_Master_Id)
                      .then(res => res.json())
                      .then((result) => { console.log(result); setPack(result); }
                      );
              }, [Cat_Master_Id]);
             
  return (
   
    <CardDisplayA details={packs}/>
  )
}

export default Sub_Category