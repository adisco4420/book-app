import React, { Component } from 'react';
import './addreview.css';
import { Link } from 'react-router-dom';
class AddReview extends Component {
    render() {
        return(
            <React.Fragment>            
            <div className="container " style={{marginBottom: '10%'}}>
               <div className="row">
                <div className="col-12 top-body">
                <img style={{width: '100%', height: '170px'}} src={process.env.PUBLIC_URL + '/assets/image/book-list/Ellipse 2.2.png'} alt="half-circle" />
                
                <Link to="/book-list">
                <i style={{  position: 'absolute', top: '28%', left: '15%'}}  
                className="fa fa-arrow-left fa-2x text-light"></i>
                </Link>
                <h3 style={{  position: 'absolute', top: '28%', left: '44%'}} 
                    className="header-title text-light">Add Book Review </h3>
            </div>
          </div>
                <div className="row">

                  <div className='col-md-12 px-5 list-bboks'>
                  <div class="" >
                    <div className="row">
                      <div className="col-md-4">
                      <img class="card-img-top float-left" style={{width: '200px'}} 
                          src={process.env.PUBLIC_URL + '/assets/image/book-list/image.svg'} alt="Card image cap" />
                      </div>
                      <div className="col-md-8 mt-5">
                        <h4>Pet Sematary</h4>
                        <h6>Jason Fried</h6>
                        <h6>
                            <i className="fa fa-star"></i> 4.68
                        </h6>
                        <p>2, 164 reviews</p>
                       </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mt-3">
                            <p>
                            Sometimes dead is better....When the Creeds move into a beautiful old house in rural Maine, 
                            it all seems too good to be true: 
                            physician father, beautiful wife, charming little daughter, 
                            adorable infant son -- and now an idyllic home.... 
                            </p>
                            <p className="more-btn">Full Synopsis</p>
                            <hr />
                        </div>
                        
                        <div className="col-12 text-center mt-5 mb-5">
                            <h6> TAP TO ADD RATING</h6>
                            <img  src={process.env.PUBLIC_URL + '/assets/image/book-list/Group 2.1.png'} alt="rating-stars"/>
                
                        </div>
                    </div>
                  </div>
                  

                  </div>
                  <div className="col-md-12 px-10 mb-4 mt-3">
                        <button className="btn btn-block py-2 submit text-light">NEXT</button>
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
                  <Link className="nav-link text-center" to="/thank-you">
                  <span className="fa fa-home fa-2x"></span>
                  <p>Timeline</p>
                   <span className="sr-only">
                  (current)</span></Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link text-center" to="/book-list">
                  <span className="fa fa-book fa-2x"></span>
                  <p>MyBooks</p>
                 </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link text-center" to="/add-review">
                  <span className="fa fa-star fa-2x"></span>
                  <p>AddReview</p>
                   <span className="sr-only">
                  (current)</span></Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link text-center" to="/thank-you">
                  <span className="fa fa-bell fa-2x"></span>
                  <p>Notification</p>
                   <span className="sr-only">
                  (current)</span></Link>
                </li>
              </ul>
             </div>
      </nav>

    </React.Fragment>

        )
    }

}
export default AddReview;