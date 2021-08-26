import React, { Component } from 'react'

export default class Project_photos extends Component {
    render() {
        return (
            <div>
                
            <div className="card">
            <div className="card-block">
              <h2>Projects</h2>
              <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
              
  
            
              <div className="carousel-inner" role="listbox">
                <div className="item active">
                <img src="./assets/images/tudoApp.jpeg" className="img-responsive" alt="..."/>
                  
                  <div className="carousel-caption">
                    <h3 className="h5">Jules for Bastion</h3>
                    <p>2017</p>
                  </div>
                </div>
                <div className="item">
                <img src="./assets/images/postfilio.png" className="img-responsive" alt="..." />
                  <div className="carousel-caption">
                    <h3 className="h5">Jules for Bastion</h3>
                    <p>2017</p>
                  </div>
                </div>
  
                <div className="item">
                  <img src="./assets/images/img-08.jpg" className="img-responsive" alt="..."/>
                  <div className="carousel-caption">
                    <h3 className="h5">Jules for Bastion</h3>
                    <p>2017</p>
                  </div>
                </div>
              </div>
  
           
              <ol className="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
              </ol>
  
            </div>
            </div>
          </div>



            </div>
        )
    }
}
