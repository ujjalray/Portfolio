import React, { Component } from 'react'

export default class  extends Component {
    render() {
        return (
            <>

            <div className="card">
            <div className="card-block">
              <h2>Development Skills</h2>
              <div className="row">
                <div className="col-md-4">
    
                  <img src="./assets/images/React.png" className="img-responsive" alt="" />
                  
                  <h3 className="h5">Front-End</h3>
                  <p >HTML,CSS,JAVASCRIPT,ES6,REACTJS,RADUX</p>
                </div>
                <div className="col-md-4">
                  <img src="./assets/images/note.png" className="img-responsive" alt="" />
                  <h3 className="h5">Back-End</h3>
                  <p>Note js</p>
                </div>
                <div className="col-md-4">
                  <img src="./assets/images/database.jpg" className="img-responsive" alt="" />
                  <h3 className="h5">Database</h3>
                  <p>Mysql , MongDB</p>
                </div>
              </div>
            </div>
          </div>



                
            </>
        )
    }
}
