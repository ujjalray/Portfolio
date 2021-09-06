import React, { Component } from 'react'

export default class Project extends Component {
    render() {
        return (
            <div>
                
                  
        <div className="card">
        <div className="card-block">
          <h2>Projects</h2>
          <div className="row">



            <div className="col-md-4">
            <img src="./assets/images/tudoapp.jpeg" className="img-responsive" alt="" />
            <h3 className="h5">Tudu-App</h3>
             <p>june-2021</p>
           </div>



            <div className="col-md-4">

            <img src="./assets/images/postfilio.png" className="img-responsive" alt="" />
              
              <h3 className="h5">Portfolio-App</h3>
              <p>August-2021
              </p>
            </div>
           
            <div className="col-md-4">
              <img src="./assets/images/img-04.jpg" className="img-responsive" alt="" />
              <h3 className="h5">Criptography traker App</h3>
              <p>sep-2021</p>
            </div>


          

          </div>
        </div>
      </div>



            </div>
        )
    }
}
