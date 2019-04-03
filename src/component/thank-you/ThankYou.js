import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './thankyou.css'
class ThankYou extends Component {
    render() {
        return (
            <React.Fragment>            
                <div className="container">
                <div className="row text-center py-5">
                    <div className="col-md-12">
                    <img src={process.env.PUBLIC_URL + '/assets/image/thank-you/Group.png'} alt="half-circle" />
                    </div>
                    <div className="col-md-12">
                        <h3 className=" mt-4 head-text">Thank you</h3>
                        <h6 className=" desc-text">You have submitted your first book review.</h6>
                        <h6 className=" desc-text">Now it's time to make some friends</h6>
                    </div>
                    <div className="col-md-12 px-10 mt-3">
                        <button className="btn btn-block py-2 submit text-light">ADD FRIENDS</button>
                    </div>
                    <div className="col-md-12 ">
                        <h6 className="text-uppercase head-text mt-7 ">You May Also Be Interested In:</h6>
                        <div className="row mt-4 bts-img">
                            <div className="col-md-4">
                                <img src={process.env.PUBLIC_URL + '/assets/image/thank-you/image1.png'} alt="half-circle" />
                                <div className="mt-3">
                                <h6 className="head-text">Scar Tissue</h6>
                                    <p className="desc-text">Anthor Kieldis</p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <img src={process.env.PUBLIC_URL + '/assets/image/thank-you/image 2.png'} alt="half-circle" />
                                <div className="mt-3">
                                <h6 className="head-text">Eat Awesome</h6>
                                    <p className="desc-text">Paul Jervis</p>
                                </div>
                            </div>

                            
                            <div className="col-md-4">
                                <img src={process.env.PUBLIC_URL + '/assets/image/thank-you/image.png'} alt="half-circle" />
                                <div className="mt-3">
                                <h6 className="head-text">The Wastelands</h6>
                                    <p className="desc-text">Stephen King</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             
            </div>
            <nav className="navbar fixed-bottom navbar-expand-sm  bg-light ">
            {/* <a className="navbar-brand" href="#">Bottom navbar</a> */}
            <button className="navbar-toggler bg-primary " type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon text-dark"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav text-dark">  
                <li className="nav-item active">
                  <a className="nav-link text-center" href="#">
                  <span className="fa fa-home fa-2x"></span>
                  <p>Timeline</p>
                   <span className="sr-only">
                  (current)</span></a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-center" href="#">
                  <span className="fa fa-book fa-2x"></span>
                  <p>MyBooks</p>
                 </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-center" href="#">
                  <span className="fa fa-star fa-2x"></span>
                  <p>AddReview</p>
                   <span className="sr-only">
                  (current)</span></a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-center" href="#">
                  <span className="fa fa-bell fa-2x"></span>
                  <p>Notification</p>
                   <span className="sr-only">
                  (current)</span></a>
                </li>
              </ul>
            </div>
          </nav>
 
                 </React.Fragment>

        )
    }
}
export default ThankYou;