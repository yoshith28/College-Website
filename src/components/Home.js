import React,{Component} from "react"
import "./style.css"
import Carousels from "./Carousel"


export default class Home extends Component{
    render()
    {
        return(
            <div>
                <h1 className="head">Home Page</h1>
                <h2 className="subhead">Campus Overview:</h2>
                <Carousels/>
                <h2 className="cap"> Want to register for our college?
                    <br/>
                    Click on "Register Now" on the navbar to register
                </h2>
                <div className="box"> <h6>Admissions open </h6> </div>
                <div class="container-fluid">
                    <div class="row">
                    <div class="col-md-12 bg-primary text-light text-left p-2 "> <h4>Courses Offered:</h4> </div>
                    </div>
                    <div class="row">
                        <h3 >Computer Science & Engineering</h3>
                        <hr/>
                        <h3 >Electronics & Communication Engineering</h3>
                        <hr/>
                        <h3 >Electronics & Electrical Engineering</h3>
                        <hr/>
                        <h3 >Mechanical Engineering</h3>
                        <hr/>
                        <h3 >Civil Engineering</h3>
                        <hr/>
                        <h3 >Master of Business Administration</h3>
                        <hr/>
                        <h3 >Humanities & Sciences</h3>
                        <hr/>
                        <h3 >Information Technology</h3>
                        <hr/>
                    </div>
                    

                </div>
               


               

              
               <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 bg-dark text-light text-center p-3"> CopyRights @2023</div>
            </div>
          </div>
            </div>
            


        )
    }
}