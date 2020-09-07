import React from 'react';
import { Link } from "react-router-dom";
import Config from '../utils/Config';
class Navbar extends React.Component {
    render(){
        return (

            <nav className="navbar">
            <div className="container-fluid">
                <div className="navbar-header">
                <a href="#" className="bars" onClick={this.props.onBarClick}></a>
            <a className="navbar-brand" href="index.html">
              Medical Store Management System
            </a>
                </div>
                
            </div>
            <div>
            {/* <div className="logout">
                <button onClick="/logout" className="btn btn-primary">
                    
                    Logout

                </button>

            </div> */}
            
            </div>
          
        </nav>
        );   
    }
} 

export default Navbar;