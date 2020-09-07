import React from "react";
import AuthHandler from "../utils/AuthHandler";
import APIHandler from "../utils/APIHandler";


class CompanyComponent extends React.Component {

componentDidMount(){
 
  console.log(AuthHandler.checkTokenExpire());
}

async formSubmit(event){
  event.preventDefault();
  var apiHandler = new APIHandler();
  apiHandler.saveCompanyData();
}

  render() {
    return (
      <section className="content">
        <div className="container-fluid">
          <div className="block-header">
            <h2>Manage Company</h2>
          </div>
           {/* dfdf */}
           
        <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="card">
                        <div className="header">
                            <h2>
                                Add Company
                            </h2>
                             
                        </div>
                        <div className="body">
                            <form onSubmit={this.formSubmit}>
                                <label htmlFor="name">Name</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="name" name="name" className="form-control" placeholder="Enter your Company Name"/>
                                    </div>
                                </div>
                                <label htmlFor="license_no">License No</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="license_no" name="license_no" className="form-control" placeholder="Enter your License No"/>
                                    </div>
                                </div>
                                <label htmlFor="address">Address</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="address" name="address" className="form-control" placeholder="Enter your Address"/>
                                    </div>
                                </div>
                                <label htmlFor="contact_no">Contact No</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="contact_no" name="contact_no" className="form-control" placeholder="Enter your Contact No"/>
                                    </div>
                                </div>
                                <label htmlFor="email">Email</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="email" name="email" className="form-control" placeholder="Enter Company Email"/>
                                    </div>
                                </div>
                                <label htmlFor="description">Description</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="description" name="description" className="form-control" placeholder="Enter your Description"/>
                                    </div>
                                </div>
                               <br/>
                               <button type="submit"
                               className = "btn btn-primary m-t-15 wave-effect btn-block"
                               >
                               Add Company
                               </button>
                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
     
    );
  }
}

export default CompanyComponent;