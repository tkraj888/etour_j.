
import { useState, useEffect } from 'react';
import { FormControl, FormGroup, Input, InputLabel, Typography, Button, styled, TextField, MenuItem, Select } from '@mui/material';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import AuthenticationService from '../Services/AuthenticationService';

//import DatePicker from 'react-datePicker';
//import 'react-datepicker/dist/react-datepicker.css';

const Container = styled(FormGroup)`
   width:50%;
   margin:5% auto 0% auto; 
  border:1px solid black
   & > div {
       margin-top:20px;
   }

`

const packageinitialvalues = {
    Category_MasterCat_Master_Id: '',
    Package_Title: '',
    To_DateTime: '',
    From_DateTime: '',
    Image_Path: ''
}

const packageexpinitialvalues = {

    Default_Fare: '',
    Room_Per_Person: '',
    Room_Twin_Sharing: '',
    Extra_Person: '',
    Child_With_Bed: '',
    Child_Without_Bed: ''
}

const datemasterinitialvalues = {
    Departure_Date: '',
    End_Date: '',
    Period: '',
    Duration: '',
}

const scheduleinitialvalues = {
    Start_Date: '',
    End_Date: '',
    Info: '',
}

const getDatafromLS = () => {
    const data = localStorage.getItem("multischedule");
    if (data) {
        return JSON.parse(data);
    } else {
        return [];
    }
};


const Addpackages = () => {

    const [packages, setPackages] = useState(packageinitialvalues)

    const [datemaster, setDatemaster] = useState(datemasterinitialvalues)

    const [schedule, setSchedule] = useState(scheduleinitialvalues)
    const[psector,setPsector]=useState([]);
    const [Sche_Id, setSche_Id] = useState(1);
    const [Start_Date, setStart_Date] = useState("");
    const [End_Date, setEnd_Date] = useState("");
    const [Info, setInfo] = useState("");


    const [multischedule, setMultischedule] = useState(getDatafromLS())

    const onValueChange = (e) => {
        //console.log(e.target.name,e.target.value);
        setPackages({ ...packages, [e.target.name]: e.target.value })

        onhandle();
    }
    const [packageexp, setPackageexp] = useState(packageexpinitialvalues)

    const onPackgeexpChange = (e) => {

        setPackageexp({ ...packageexp, [e.target.name]: e.target.value })

        onhandle();
    }

    const onDatemasterChange = (e) => {

        setDatemaster({ ...datemaster, [e.target.name]: e.target.value })
        onhandle();
    }
    // const onScheduleChange = (e) => {

    //     setSchedule({ ...schedule, [e.target.name]: e.target.value })

    //     onhandle();
    // }




    const onhandle = () => {
        packages.Package_Expense = [packageexp];
        packages.Date_Master = [datemaster];

        //packages.Schedules = schedule;

    }

    const addbutton = () => {
        let pass = {
            Sche_Id,
            Start_Date,
            End_Date,
            Info,
        };

        // console.log(pass);

        setMultischedule([...multischedule, pass]);

        setSche_Id(prev=>prev+1);
        setStart_Date("");
        setEnd_Date("");
        setInfo("");

        packages.Schedules = multischedule;

        console.log(packages);
    }




    useEffect(() => {
        localStorage.setItem("multischedule", JSON.stringify(multischedule));
    }, [multischedule]);




    //   const onAddressHandler = (e) => {
    //     setPackages({
    //       ...packages, 
    //       Package_Expense:{
    //         ...packages.packageexp,[e.target.name]: e.target.value
    //     },
    //     });
    //   };



    const ob = { packages, packageexp, datemaster, schedule }


    console.log(ob);
    //         console.log(packages);
    //         console.log(packageexp);
    //         console.log(datemaster);
    //         console.log(schedule);




   const addPack=()=>{
    let demo = JSON.stringify(packages);
    console.log(JSON.parse(demo));
    fetch("https://localhost:44303/api/Packages", {
        method: 'POST',
        headers: { 'Content-type': 'application/json',
                     "Authorization" : AuthenticationService.headers()},
        body: demo
    }).then(r => { 
        if (r.status==200) {
        alert("New Package is Created Successfully");
       setMultischedule([]);   
    }
    else{alert("YOU ARE NOT")} 
     r.json();

}).then(res => {
   
                        
    });
    setMultischedule([]);   
   }
    useEffect(()=>{
        fetch("https://localhost:44303/sectorForPackage")
        .then((res) => res.json())
        .then((result) => {
          setPsector(result);
          console.log(psector);
        });
      },[]);
    

   // const parentC=[{value:"int",Id:1},{value:"dom",Id:2},{value:"cit",Id:3},{value:"eup",Id:4}];

    return (
        <Container>
            <Typography variant="h5">Add New package</Typography>
            <h3>Package</h3>

            <FormControl variant='standard'>
                <InputLabel>Parent_Cat_Id</InputLabel>
                <Select name="Category_MasterCat_Master_Id" value={packages.Category_MasterCat_Master_Id}
                    onChange={(e) => onValueChange(e)}
                >{psector.map((sctor) => <MenuItem value={sctor.Cat_Master_Id}>{sctor.Cat_Id}</MenuItem>)}
                </Select>
            </FormControl><br></br>
            <FormControl>
                <InputLabel>Package_Title</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="Package_Title" />
            </FormControl>
            <br></br>
            <FormControl>
                <TextField type="date" focused="blur" sx={{ height: 45 }} name="To_DateTime" onChange={(e) => onValueChange(e)} label="To_DateTime" />
            </FormControl>
            <br></br>
            <FormControl>
                <TextField type="date" focused="blur" sx={{ height: 45 }} name="From_DateTime" onChange={(e) => onValueChange(e)} label="From_DateTime" />
            </FormControl>
            <br></br>
            <FormControl>                  
                    <Input
                        type="file" name="Image_Path" onChange={(e) => onValueChange(e)}    />                                                 
            </FormControl>

            <h4>Package_Expense</h4>

            <FormControl>
                <InputLabel >Default_Fare</InputLabel>
                <Input onChange={(e) => onPackgeexpChange(e)} name="Default_Fare" />
            </FormControl>
            <br></br>
            <FormControl >
                <InputLabel >Room_Per_Person</InputLabel>
                <Input onChange={(e) => onPackgeexpChange(e)} name="Room_Per_Person" />
            </FormControl>
            <br></br>
            <FormControl>
                <InputLabel >Room_Twin_Sharing</InputLabel>
                <Input onChange={(e) => onPackgeexpChange(e)} name="Room_Twin_Sharing" />
            </FormControl>
            <br></br>
            <FormControl>
                <InputLabel >Extra_Person</InputLabel>
                <Input onChange={(e) => onPackgeexpChange(e)} name="Extra_Person" />
            </FormControl>
            <br></br>
            <FormControl>
                <InputLabel >Child_With_Bed</InputLabel>
                <Input onChange={(e) => onPackgeexpChange(e)} name="Child_With_Bed" />
            </FormControl>
            <br></br>
            <FormControl>
                <InputLabel >Child_Without_Bed</InputLabel>
                <Input onChange={(e) => onPackgeexpChange(e)} name="Child_Without_Bed" />
            </FormControl>
            <br></br>
            <h3>Date_Master</h3>
            <FormControl>
                <TextField type="date" focused="blur" sx={{ height: 45 }} name="Departure_Date" onChange={(e) => onDatemasterChange(e)} label="Departure_Date" />
            </FormControl>
            <br></br>
            <FormControl>
                <TextField type="date" focused="blur" sx={{ height: 45 }} name="End_Date" onChange={(e) => onDatemasterChange(e)} label="End_Date" />
            </FormControl>
            <br></br>
            <FormControl>
                <InputLabel >Duration</InputLabel>
                <Input onChange={(e) => onDatemasterChange(e)} name="Duration" />
            </FormControl>
            <br></br>
            <FormControl>
                <InputLabel >Period</InputLabel>
                <Input onChange={(e) => onDatemasterChange(e)} name="Period" />
            </FormControl>
            

            <h3>Schedule</h3>
            <FormControl>
                <InputLabel >Sche_Id</InputLabel>
                <Input name="Sche_Id" disabled="true" onChange={(e) => setSche_Id(e=>e.target.value)} value={Sche_Id} />
            </FormControl>
            <br></br>
            <FormControl>
                <TextField type="date" focused="blur" sx={{ height: 45 }} name="Start_Date" label="Start_Date" onChange={(e) => setStart_Date(e.target.value)} value={Start_Date} />
            </FormControl>
            <br></br>
            <FormControl>
                <TextField type="date" focused="blur" sx={{ height: 45 }} name="End_Date" label="End_Date" onChange={(e) => setEnd_Date(e.target.value)} value={End_Date} />
            </FormControl>
            <br></br>
            <FormControl>
                <InputLabel >Info</InputLabel>
                <Input name="Info" onChange={(e) => setInfo(e.target.value)} value={Info} />
            </FormControl>

            <FormControl>
                <br></br>  <Button variant="contained" onClick={() => addbutton()} style={{ maxWidth: '120px', maxHeight: '30px', minWidth: '30px', minHeight: '30px' }}>Add_Schedule</Button><br></br>
            </FormControl>
            <FormControl>
                <Button

                    onClick={() => { setMultischedule([]); console.log(multischedule); }}
                >
                    Remove All
                </Button>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={addPack}>Add package</Button>
            </FormControl>

        </Container >
    )
}

export default Addpackages;