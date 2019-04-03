import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './register.css'
class Register extends Component { 
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <img src={process.env.PUBLIC_URL + '/assets/image/register/Ellipse 2.1.png'} alt="half-circle" />
                    </div>
                </div>
                <div className="row text-center ml-5">
                    <div className="col-md-12">
                    <img className="light-bulb" src={process.env.PUBLIC_URL + '/assets/image/register/Ellipse.png'} alt="half-circle" />
                    <img className="vector" src={process.env.PUBLIC_URL + '/assets/image/register/light-bulb.png'} alt="half-circle" />

                    </div>
                    <div className="col-md-12">
                        <h3 className=" mt-4 head-text">Welcome !</h3>
                        <h6 className=" desc-text">Create your account to get started, After that,</h6>
                        <h6 className=" desc-text">you can share books and make friends</h6>
                    </div>
                </div>

                <div className="row ">
                    <div className="col-12 px-10 register">
                    <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1" className="text-muted  text-uppercase">Email </label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                        placeholder="sodiq@mail.com" />
                        </div>
                    <div class="form-group ">
                        <label for="exampleInputPassword1" className="text-muted text-uppercase">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" 
                        placeholder="* * * * * * * * *" />
                    </div>
                    <div class="form-group try-pwd">
                        <label for="exampleInputPassword1" className="text-muted text-uppercase">Type Password Again</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" 
                        placeholder="* * * * * *" />
                    </div>

                    <button type="submit" class="btn py-2 submit btn-block ">
                    <Link to="/thank-you" className="text-light"> SIGN UP</Link>
                   </button>
                    </form>
                    <h5 className="desc-text text-center mt-3">Alredy have an account? <Link to="/register">Login</Link> </h5>
                    </div>
                </div>
         
               
            </div>
        )
    }

}
export default Register;