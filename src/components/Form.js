import React,{Component} from "react"
import "./style.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default class Forms extends Component{
    render()
    {
        return(
            <div>
                <h1 className="fill" >Fill the form</h1>
                <Form>



                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Last Name" />
        
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Enter Mobile Number" />
        
      </Form.Group>

      <Form.Select aria-label="Default select example">
      <option>Select Course</option>
      <option value="1">CSE</option>
      <option value="2">ECE</option>
      <option value="3">EEE</option>
      <option value="4">IT</option>
      <option value="5">CSD</option>
      <option value="6">CSM</option>
      <option value="7">CSC</option>
      <option value="8">CIVIL</option>
      <option value="9">MECHANICAL</option>
      <option value="10">AIM</option>
      <option value="11">AID</option>
    </Form.Select>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="CONFIRM" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>



    <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 bg-dark text-light text-center p-3 mt-2"> CopyRights @2023</div>
            </div>
          </div>
            </div>


        )
    }
}