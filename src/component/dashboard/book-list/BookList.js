import React, { Component } from 'react';
import './booklist.css';
import { Link } from 'react-router-dom';
class BookList extends Component {
    render() {
        return(
            <React.Fragment>            
            <div className="container " style={{marginBottom: '10%'}}>
               <div className="row">
                <div className="col-12 top-body">
                <img style={{width: '100%', height: '170px'}} src={process.env.PUBLIC_URL + '/assets/image/book-list/Ellipse 2.2.png'} alt="half-circle" />
                <h3 style={{  position: 'absolute', top: '28%', left: '44%'}} 
                    className="header-title text-light">My Book List </h3>
                    <div className="col-md-6 offset-md-3">
                    <form id="search-files" action="" method="get" style={{marginTop: '-9%'}}>
                <div class="form-group has-search">
                  <i class="fa fa-search form-control-feedback"></i>
                  <input style={{border: '1px solid white', padding: '5% 40px'}} type="search" name="" id="" class="bg-none form-control" placeholder="Search book" />
                </div>
              </form>
                    </div>
                </div>
          </div>
                <div className="row">
                  <h5 className="text-uppercase px-3 " 
                  style={{color: ' rgba(56, 79, 125, 0.8)', marginLeft: '2.5%'}}>Books Reviewed By You</h5>
                  <div className='col-md-12 px-5 list-bboks'>
                  <div class="card" >
                    <div className="row">
                      <div className="col-md-4">
                      <img class="card-img-top float-left" style={{width: '200px'}} 
                          src={process.env.PUBLIC_URL + '/assets/image/book-list/image.png'} alt="Card image cap" />
                      </div>
                      <div className="col-md-8 mt-5">
                        <h4>Remote: Office Not Required</h4>
                        <h6>Jason Fried</h6>
                        <img  src={process.env.PUBLIC_URL + '/assets/image/book-list/Group 2.1.png'} alt="rating-stars"/>
                      </div>
                    </div>
                  </div>
                  
                  <div class="card mt-4" >
                    <div className="row">
                      <div className="col-md-4">
                      <img class="card-img-top float-left" style={{width: '200px'}} 
                          src={process.env.PUBLIC_URL + '/assets/image/book-list/image1.png'} alt="Card image cap" />
                      </div>
                      <div className="col-md-8 mt-5">
                        <h4>Papillon</h4>
                        <h6>Henri Chaerriere</h6>
                        <img  src={process.env.PUBLIC_URL + '/assets/image/book-list/Group 2.1.png'} alt="rating-stars"/>
                      </div>
                    </div>
                  </div>


                   <div class="card mt-4" >
                    <div className="row">
                      <div className="col-md-4">
                      <img class="card-img-top float-left" style={{width: '200px'}} 
                          src={process.env.PUBLIC_URL + '/assets/image/book-list/image 2.png'} alt="Card image cap" />
                      </div>
                      <div className="col-md-8 mt-5">
                        <h4>The Dark Tower: The Gunslinger</h4>
                        <h6>Stephen King</h6>
                        <img  src={process.env.PUBLIC_URL + '/assets/image/book-list/Group 2.1.png'} alt="rating-stars"/>
                      </div>
                    </div>
                  </div>

                  </div>
                  <div className="col-md-12 px-10 mb-4 mt-3">
                        <button className="btn btn-block py-2 submit text-light">ADD BOOK REVIEW</button>
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
                  <Link className="nav-link text-center" to="/thank-you">
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
export default BookList;