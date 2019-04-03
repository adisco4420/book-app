import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './HomeStyle.css'
class Home extends Component { 
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <img src={process.env.PUBLIC_URL + '/assets/image/first_landing/Ellipse.png'} alt="half-circle" />
                    </div>
                </div>
                <div className="row float-right mb-3">
                    <div className="col-md-12">
                    <img src={process.env.PUBLIC_URL + '/assets/image/first_landing/Ellipse 2.3.png'} alt="half-circle" />
                    </div>
                </div>
                <div className="row text-center ml-5">
                    <div className="col-md-12">
                    <img src={process.env.PUBLIC_URL + '/assets/image/first_landing/Group 4.png'} alt="half-circle" />
                    </div>
                    <div className="col-md-12">
                        <h3 className=" mt-4 head-text">Read Books</h3>
                        <h6 className=" desc-text">Create your account to get started, After that,</h6>
                        <h6 className=" desc-text">you can share books and make friends</h6>
                    </div>
                </div>

                 <div className="row mt-2">
                    <div className="col-md-12">
                    <img src={process.env.PUBLIC_URL + '/assets/image/first_landing/Group.png'} alt="half-circle" />
                    <Link to="/second-onboarding">
                    <img className="float-right" src={process.env.PUBLIC_URL + '/assets/image/first_landing/Group 6.png'} alt="half-circle" />
                
                    </Link>
                    </div>
                </div>
                <div className="row bt-div">
                    <div className="col-md-12">
                    <img className="bt-img" src={process.env.PUBLIC_URL + '/assets/image/first_landing/Ellipse 2.2.png'} alt="half-circle" />
                 
                    <h5 className="text-center">   <Link to="/register" >Skip intro</Link></h5>
                    </div>
                </div>
               
            </div>
        )
    }

}
export default Home;