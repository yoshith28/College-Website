import React , {Component} from 'react'
import { Navbar,Nav,NavDropdown} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import About from './About'
import Home from './Home'
import Contact from './Contact'
import Form from './Form'
export default class Navbarcomp extends Component{
    render(){
        return(
<Router>
            <div>
                 <Navbar bg="dark" variant={"dark"} expand="lg">
      
        <Navbar.Brand as={Link} to="/">My College</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/about"}>About Us</Nav.Link>
            <NavDropdown title="Departments" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">CSE</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="#action/3.2">
                ECE
              </NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="#action/3.3">EEE</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="#action/3.4">
                CSD
              </NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="#action/3.3">IT</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="#action/3.3">CSC</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="#action/3.3">CSD</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="#action/3.3">CSM</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="#action/3.3">CIVIL</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="#action/3.3">MECHANICAL</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="#action/3.3">AIM</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="#action/3.3">AID</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to={"/contact"}>Contact Us</Nav.Link>
            <Nav.Link as={Link} to={"/Form"}>Register Now</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    
    </Navbar>
            </div>
            <div>
                    <Routes>
                        <Route path="/about" element={<About />} />
                            
                        
                        <Route path="/contact" element={<Contact />} />
                            
                       
                        <Route path="/" element={<Home />} />

                        <Route path="/Form" element={<Form />} />
                            
                        
                    </Routes>
                </div>



            </Router>
        )
    }
}