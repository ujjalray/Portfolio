import React, { Component } from 'react'
import {progress} from 'react-bootstrap'

export default class Work extends Component {
    render() {
        return (
            <div>
                
            <div className="card">
            <div className="card-block">
              <h2>programming Skills</h2>
              <div className="row">
                <div className="col-md-4">
    
                  <img src="./assets/images/C++.jpg" className="img-responsive" alt="" />
                  
                  <h3 className="h5">Programming Launages</h3>
                  <p >C++</p>
                </div>
                <div className="col-md-4">
                  <img src="./assets/images/dsa.jpg" className="img-responsive" alt="" />
                  <h3 className="h5">Data structures and algorithms</h3>
                  <p>Using C++</p>
                </div>
                <div className="col-md-4">
                  <img src="./assets/images/C.jpg" className="img-responsive" alt="" />
                  <h3 className="h5">Favorite language</h3>
                  <p>C</p>
                </div>
              </div>
            </div>
          </div>
          

            </div>
        )
    }
}
