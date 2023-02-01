import { useState, useEffect } from "react";
import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  Button,
  styled,
  MenuItem,
  Select,
  inputClasses,
} from "@mui/material";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";
import AuthenticationService from "../Services/AuthenticationService";

const Container = styled(FormGroup)`
  width: 20%;
  margin: 5% auto 0% auto;

  & > div {
    margin-top: 20px;
  }
`;
const initialvalues = {
  Cat_Id: "",
  Parent_Cat_Id: 0,
  Cat_Name: "",
  Flag: "false",
};

const AddCatagory = () => {
  const [packages, setPackages] = useState(initialvalues);
  const [psector, setPsector] = useState([]);


          const onValueChange = (e) => {
            //console.log(e.target.name,e.target.value);
            setPackages({ ...packages, [e?.target?.name]: e?.target?.value });

            console.log(packages);
          };

  const add = () => {
    let demo = JSON.stringify(packages);
    //console.log(JSON.parse(demo));
    console.log(demo);
    fetch("https://localhost:44303/api/Category_Master", {
      method: "POST",
      headers: { "Content-type": "application/json" ,
                 "Authorization" : AuthenticationService.headers()},
       body: demo,
    })
      .then((r) => {if (r.status==200) {
        alert("New Category is Created Successfully");
      }
      else{alert("YOU ARE NOT AUTHORIZED")}
   
        r.json();
      })
      .then((res) => { });
        
  };
  // const parentC = [
  //   { value: "int", Id: 1 },
  //   { value: "dom", Id: 2 },
  //   { value: "cit", Id: 3 },
  //   { value: "eup", Id: 4 },
  // ];
  useEffect(() => {
    fetch("https://localhost:44303/sectorForSector")
      .then((res) => res.json())
      .then((result) => {
        setPsector(result);
        console.log(psector);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h5">Add Catagory</Typography>
      <FormControl>
        <InputLabel>Cat_Id</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="Cat_Id" />
      </FormControl>

      <FormControl variant="standard">
        <InputLabel>Parent_Cat_Id</InputLabel>
        <Select
          name="Parent_Cat_Id"
          value={packages?.Parent_Cat_Id}
          onChange={(e) => onValueChange(e)}
        >
          {psector?.map((sctor) => (
            <MenuItem value={sctor?.Cat_Id}>{sctor?.Cat_Id}</MenuItem>
          ))}
          <MenuItem value="NULL">
            <em>Null</em>
          </MenuItem>

          {/* <MenuItem value="dom">dom</MenuItem>   
            <MenuItem value="int">int</MenuItem>   */}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Cat_Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="Cat_Name" />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel>Flag</InputLabel>
        <Select
          name="Flag"
          value={packages?.Flag}
          onChange={(e) => onValueChange(e)}
        >
          <MenuItem value="True">True</MenuItem>
          <MenuItem value="False">False</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={add}>
          Add packages
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddCatagory;
