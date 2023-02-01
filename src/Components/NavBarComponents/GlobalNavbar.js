import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './forNav.css'
import { LinkContainer } from 'react-router-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import AuthenticationService from '../Services/AuthenticationService';
import { useEffect, useState } from 'react';
import { RollerShadesTwoTone } from '@mui/icons-material';
// import AuthButton from '../MainComp/AuthButton';


function GlobalNavbar() {
    const [state, setState] = useState(true);
    const [role, setRole] = useState(true);
    const [admin, setAdmin] = useState(true);
  
  

    useEffect(() => {
        const role=AuthenticationService.Role();
        
        const jwt = AuthenticationService.JwtToken();
        console.log(jwt);


        const Id = AuthenticationService.Auth_ID();
        console.log(Id);
       


        if (jwt != null && Id != null) { setState(Prev=> Prev=true) }
        else { setState(Prev=> Prev=false) }

        if (jwt != null && (role=="Admin" || role=="Employee")) { setRole(Prev=> Prev=true) }
        else { setRole(Prev=> Prev=false) }
        if (jwt != null && (role=="Admin")) { setAdmin(Prev=> Prev=true) }
        else { setAdmin(Prev=> Prev=false) }
    }

,[]
    )


    return (
        <Navbar className='sticky-top ' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Link to="/" className="navbar-brand">
                    <img src="./images/logo1.png" width="200" alt="" className="d-inline-block align-middle mr-2" />
                    {/* <span className="text-uppercase font-weight-bold">INDIA TOURS</span> */}
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                        <LinkContainer to="/AboutUs"><Nav.Link>About</Nav.Link></LinkContainer>
                        <LinkContainer to="/ContactUs"><Nav.Link>ContactUs</Nav.Link></LinkContainer>
                        <LinkContainer to="/Search"><Nav.Link>Search</Nav.Link></LinkContainer>



                    </Nav>

                    <Nav >
                        {state ?
                          (<Nav >
                                <Link to="/Profile"> <Button variant="outline-info" className="btn-space">Profile</Button></Link>
                                <a href="/Login">  <Button Variant="outline-primary" className="space profbtn" onClick={AuthenticationService.Logout}>LogOut</Button></a>  
                            </Nav>)
                            :
                            (<Nav >
                                <Link to="/Login" style={{ margin: "0% 0% 0% 10%" }}> <Button variant="outline-primary" className="btn-space">Login</Button></Link>
                                <Link to="/Signup">  <Button variant="primary" className="btn-space profbtn" >Signup</Button ></Link>
                            </Nav>)}


                        
                            {role ?
                        (<Nav ><Link to="/Addpackage"> <Button variant="outline-primary" className="space" style={{marginLeft:"35px"}}>ADD PACKAGE</Button></Link>
                        <Link to="/Addcategory"> <Button variant="outline-primary" className="space profbtn" style={{width:"100px"}}>ADD CATEGORY</Button></Link>
                        </Nav>)
                        :(<></>)
                        }
                          {admin ?
                        (<Nav><Link to="/Users"> <Button variant="outline-primary" className="btn-space profbtn">Users</Button></Link> </Nav>)
                        :(<></>)
                        }


                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default GlobalNavbar;