import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import login from './pages/login';
import MainComponent from './components/MainComponent';
import { PrivateRoute } from './utils/PrivateRoute';
import { PrivateRouteNew } from './utils/PrivateRouteNew';
import HomeComponent from './pages/HomeComponent';
import CompanyComponent from './pages/CompanyComponent';
import CompanyDetailsComponent from './pages/CompanyDetailsComponent';
import CompanyAddBankComponent from './pages/CompanyAddBankComponent';
import CompanyEditBankComponent from './pages/CompanyEditBankComponent';
import LogoutComponent from './pages/LogoutComponent';


ReactDOM.render(
    <Router>
        <Switch>
             <Route exact path="/" component={login}></Route>
             <Route exact path="{Config.logoutPageUrl}" component={LogoutComponent}></Route>
             <PrivateRouteNew 
             exact path="/home"
             activepage="0" 
              
             page={HomeComponent}>

             </PrivateRouteNew>
             <PrivateRouteNew exact path="/company"   activepage="1"   page={CompanyComponent}></PrivateRouteNew>
             <PrivateRouteNew exact path="/companydetails/:id"   activepage="1"   page={CompanyDetailsComponent}></PrivateRouteNew>
             <PrivateRouteNew exact path="/addCompanyBank/:id"   activepage="1"   page={CompanyAddBankComponent}></PrivateRouteNew>
             <PrivateRouteNew exact path="/editCompanyBank/:company_id/:id"   activepage="1"   page={CompanyEditBankComponent}></PrivateRouteNew>
        </Switch>
    </Router>
    , document.getElementById('root'));

 
 
