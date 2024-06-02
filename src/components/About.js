import React,{Component} from "react"
import "./style.css"
import pic from "./img_avatar.png"
export default class About extends Component{
    render()
    {
        return(
            <div>
                <h1 className="head">About Us</h1>

                <div class="container-fluid">
            {/* <div class="row">
                <div class="col-md-12 bg-dark text-light text-center p-2"> <h2>About Us</h2></div>
            </div> */}
        </div>
        <div>
            <div class="row">
                <div class="col-md-12 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, obcaecati? Consectetur rerum aspernatur nam natus, amet inventore nostrum suscipit cumque, minima sed nulla nemo? Quod doloribus sunt velit repudiandae provident!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores itaque sed, nam dolorum vero ea tempore inventore mollitia tenetur eos rem, dicta quod repellendus quo magni reprehenderit doloremque neque ab!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nihil quibusdam dolores nostrum autem delectus iusto optio voluptas libero sapiente, officiis natus tempore enim? Sunt, quisquam deserunt. Minus, quia omnis!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab vitae adipisci magni fugit eligendi excepturi ducimus at, molestiae, voluptatum nesciunt natus sequi qui. Ipsa iusto magnam officia, pariatur dolores repudiandae!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, voluptates fugit. Dolorum eaque itaque ex aperiam error temporibus, repellendus quaerat, aspernatur ea facilis asperiores, adipisci saepe consequatur nemo quam blanditiis?

                </div>
            </div>
        </div>

        <div class="row mt-4 mb-4">
            <div class="col-md-4 bg-dark text-light p-3"> <h2>Our Journey:</h2> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo optio nulla quas velit aliquam quae eius voluptatum ex! Voluptas hic explicabo accusamus ut, impedit repellendus dolorem consequatur in accusantium earum.</div>
            <div class="col-md-8">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vitae provident rem rerum reprehenderit adipisci, itaque maxime odio architecto modi expedita. Hic porro ipsum veniam, rerum reiciendis ad officia maxime.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, ut nemo eius in commodi sint quibusdam nihil illum libero exercitationem excepturi quisquam quidem impedit neque ea provident blanditiis corrupti autem.
                </p>
            </div>

        </div>


        <div className="card">
  <img src={pic} alt="Avatar" className="width:100%" />
  <div className="container">
    <h4><b>Our Principal</b></h4> 
    <p>Architect & Engineer</p> 
  </div>
</div>


                <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 bg-dark text-light text-center p-3 mt-4"> CopyRights @2023</div>
            </div>
          </div>

            </div>


        )
    }
}