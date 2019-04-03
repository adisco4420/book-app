import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/home/Home';

import { BrowserRouter ,Route, Switch } from 'react-router-dom'
import Login from './component/auth/login/Login';
import Register from './component/auth/register/Register';
import SecondBoarding from './component/second_onboarding/SecondBoarding';
import ThankYou from './component/thank-you/ThankYou';
class App extends Component {
  render() {
    return (
      <div>
    <BrowserRouter>
        <div>
          
             {/* <Header /> */}
         
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/second-onboarding" component={SecondBoarding} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/thank-you" component={ThankYou} />

          </Switch> 
          {/* <Footer /> */}
        </div>
     </BrowserRouter>

      </div>
    );
  }
}

export default App;
