import React, { Component } from 'react'

export default class Education extends Component {
    render() {
        return (
            <div>

            <div className="card">
            <div className="card-block">
              <h2>Education</h2>

              <div className="row">

                <div className="col-md-4">
                  <div className="education-experience">
                    <small className="date">2022-2025</small>
                    <h3 className="h5 date-title">Master of Computer Application(MCA)</h3>
                    <p>National Institute of Technology (NIT)
                       Coming soon....</p>
                  </div>
                </div>

                
                <div className="col-md-4">
                  <div className="education-experience">
                    <small className="date">2019-2022</small>
                    <h3 className="h5 date-title">Bachelor in Computer Application(BCA)</h3>
                    <p>Siliguri Institute of Technology,
                    S.I.T Campus, Salbari,West Bengal</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="education-experience">
                    <small className="date">2016-2018</small>
                    <h3 className="h5 date-title">School</h3>
                    <p>Sona pur B.k high school,
                     Alipurduar,West Bengal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
                
            </div>
        )
    }
}
