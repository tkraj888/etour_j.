
import PackageDisplay from './PackageDisplay'
// import ContactUs from './NavBarComponents/ContactUs'

import { React,  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Sub_Category = () => {

const{Cat_Master_Id}=useParams();
console.log(Cat_Master_Id);

const [packs, setPack] = useState([]);
              
              useEffect(() => {
                  fetch("https://localhost:44303/api/detailedPackagePerCat/"+ Cat_Master_Id)
                      .then(res => res.json())
                      .then((result) => { console.log(result); setPack(result); }
                      );
              }, []);
  return (
   
    <PackageDisplay details={packs}/>
  )
}

export default Sub_Category