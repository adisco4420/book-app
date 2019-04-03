import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './style.css'
class SecondBoarding extends Component { 
    render() {
        return (
            <div className="container">
                <div className="row float-right">
                    <div className="col-md-12 ">
                    <img src={process.env.PUBLIC_URL + '/assets/image/second_landing/Ellipse 2.3.png'} alt="half-circle" />
                    </div>
                </div>
                <div className="row ">
                    <div className="col-md-12 py-5">
                    <img src={process.env.PUBLIC_URL + '/assets/image/second_landing/Ellipse.png'} alt="half-circle" />
                    </div>
                </div>
                <div className="row text-center ml-5">
                    <div className="col-md-12">
                    <img src={process.env.PUBLIC_URL + '/assets/image/second_landing/star.PNG'} alt="half-circle" />
                    </div>
                    <div className="col-md-12">
                        <h3 className=" mt-4 head-text">Review Them</h3>
                        <h6 className=" desc-text">Create your account to get started, After that,</h6>
                        <h6 className=" desc-text">you can share books and make friends</h6>
                    </div>
                </div>

                 <div className="row mt-2">
                    <div className="col-md-12">
                    <Link to="/" >
                    <img src={process.env.PUBLIC_URL + '/assets/image/second_landing/Group.png'} alt="half-circle" />
                    </Link>
                    <Link to="/">
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
export default SecondBoarding;