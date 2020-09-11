import React from "react";
import AuthHandler from "../utils/AuthHandler";
import APIHandler from "../utils/APIHandler";


class CompanyDetialsComponent extends React.Component {

    constructor(props){
        super(props);
        this.formSubmit=this.formSubmit.bind(this);
        console.log(props.match.params.id);
    }

    state ={
        errorRes:false,
        errorMessage:"",
        btnMessage:0,
        sendData:false,
        companyBank:[],
        name:"",       
        license_no:"",
        address:"",
        contact_no:"",
        email:"",
        description:"",
        dataLoaded:false

    };

componentDidMount(){
 
  console.log(AuthHandler.checkTokenExpire());
}

async formSubmit(event){
  event.preventDefault();
  this.setState({btnMessage:1});

  var apiHandler = new APIHandler();
  var response = await apiHandler.editCompanyData(
    event.target.name.value,
    event.target.license_no.value,
    event.target.address.value,
    event.target.contact_no.value,
    event.target.email.value,
    event.target.description.value,
    this.props.match.params.id    
    );
    console.log(response);
    this.setState({btnMessage:0});
    this.setState({errorRes:response.data.error});
    this.setState({errorMessage:response.data.message});
    this.setState({sendData:true});
    
    
}

componentDidMount(){
     this.fetchCompanyData();
}
async fetchCompanyData(){
    var apiHandler = new APIHandler();
    var companydata = await apiHandler.fetchAllCompanyDetails(this.props.match.params.id);
    console.log(companydata);
    //this.setState({companyDataList:companydata.data.data});
    this.setState({companyBank:companydata.data.data.company_bank});
    this.setState({name:companydata.data.data.name});
    this.setState({license_no:companydata.data.data.license_no});
    this.setState({address:companydata.data.data.address});
    this.setState({contact_no:companydata.data.data.contact_no});
    this.setState({email:companydata.data.data.email});
    this.setState({description:companydata.data.data.description});
    this.setState({dataLoaded:true});

}

viewCompanyDetails=(company_id)=>{
    console.log(company_id);
    console.log(this.props);

};

AddCompanyBank=()=>{
   this.props.history.push("/addCompanyBank/"+ this.props.match.params.id );
   // console.log(this.props);
};

EditCompanyBank=(company_bank_id)=>{
    //console.log(company_bank_id);
    this.props.history.push("/editCompanyBank/"+this.props.match.params.id +"/" +company_bank_id);
 };


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
                        {this.state.dataLoaded==false?(
                        <div className="text-center">
                        <div class="preloader pl-size-xl">
                                    <div class="spinner-layer">
                                        <div class="circle-clipper left">
                                            <div class="circle"></div>
                                        </div>
                                        <div class="circle-clipper right">
                                            <div class="circle"></div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        ): (
                            ""
                        )}
                            <h2>
                                Edit Company
                            </h2>
                             
                        </div>
                        <div className="body">
                            <form onSubmit={this.formSubmit}>
                                <label htmlFor="name">Name</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="name" name="name" className="form-control" 
                                        defaultValue={this.state.name}
                                        placeholder="Enter your Company Name"/>
                                    </div>
                                </div>
                                <label htmlFor="license_no">License No</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="license_no" name="license_no" className="form-control"
                                          defaultValue={this.state.license_no}
                                         placeholder="Enter your License No"/>
                                    </div>
                                </div>
                                <label htmlFor="address">Address</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="address" name="address" className="form-control" 
                                          defaultValue={this.state.address}
                                        placeholder="Enter your Address"/>
                                    </div>
                                </div>
                                <label htmlFor="contact_no">Contact No</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="contact_no" name="contact_no" className="form-control"
                                          defaultValue={this.state.contact_no}
                                         placeholder="Enter your Contact No"/>
                                    </div>
                                </div>
                                <label htmlFor="email">Email</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="email" name="email" className="form-control" 
                                          defaultValue={this.state.email}
                                        placeholder="Enter Company Email"/>
                                    </div>
                                </div>
                                <label htmlFor="description">Description</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="description" name="description" className="form-control" 
                                          defaultValue={this.state.description}
                                        placeholder="Enter your Description"/>
                                    </div>
                                </div>
                               <br/>
                               <button type="submit"
                               className = "btn btn-primary m-t-15 wave-effect btn-block"
                               disabled={this.state.btnMessage == 0 ? false : true}
                               >
                               {this.state.btnMessage==0
                               ? "Edit Company"
                               :"Editing Company Pleasess Waitt"}
                               </button>
                                 <br/>
                                 {   this.state.errorRes == false && this.state.sendData==true? (
                                           <div className="alert alert-success">
                                  <strong>success!!</strong> {this.state.errorMessage}
                              </div>
                                 ):""}
                                 
                                 {
                                 this.state.errorRes == true && this.state.sendData==true? (
                                    
                               <div className="alert alert-danger">
                                  <strong>Fail!!</strong> {this.state.errorMessage}
                              </div>
                                 ):(
                                     ""
                                 )}                      
                      
                                 
                            </form>
                        </div>
                    </div>
                </div>                
            </div>

            {/* tables code  */}

            <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="card">
                        <div className="header">
                        {this.state.dataLoaded==false?(
                        <div className="text-center">
                        <div class="preloader pl-size-xl">
                                    <div class="spinner-layer">
                                        <div class="circle-clipper left">
                                            <div class="circle"></div>
                                        </div>
                                        <div class="circle-clipper right">
                                            <div class="circle"></div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        ): (
                            ""
                        )}
                            <h2> Company Bank</h2>
                            <div className="header-dropdown m-r--5">

                            <button className="btn btn-info" onClick={this.AddCompanyBank}>Add Company</button>
                            </div>
                           
                        </div>
                        <div className="body table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>#ID</th>
                                        <th>ACCOUNT NO</th>
                                        <th>IFSC CODE</th>                                                            
                                        <th>ADDED ON</th>                                                            
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {this.state.companyBank.map((company) => (
                                       <tr key={company.id}>
                                           <td>{company.id}</td>
                                           <td>{company.bank_account_no}</td>
                                           <td>{company.ifsc_no}</td>                                        
                                           <td>{new Date(company.added_on).toLocaleString()}</td>
                                           <td>
                                           <button className="btn btn-block btn-warning" 
                                           onClick={()=> this.EditCompanyBank(company.id)}>
                                              EDIT
                                           </button>
                                           <button className="btn btn-block btn-danger">
                                              DELETE
                                           </button>
                                           </td>
                                       </tr>
                                   ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* end table */}
        </div>
      </section>
     
    );
  }
}

export default CompanyDetialsComponent;