import React from "react";
import AuthHandler from "../utils/AuthHandler";
import APIHandler from "../utils/APIHandler";

import { Link } from "react-router-dom";

class MedicineAddCompany extends React.Component {

    constructor(props){
        super(props);
        this.formSubmit=this.formSubmit.bind(this);
    }

    state ={
        errorRes:false,
        errorMessage:"",
        btnMessage:0,
        sendData:false,
        companylist:[],
    };

componentDidMount(){
 
   this.LoadCompany();
}


async formSubmit(event){
  event.preventDefault();
  this.setState({btnMessage:1});

  var apiHandler = new APIHandler();
  var response =await apiHandler.saveCompanyBankData(
    event.target.bank_account_no.value,
    event.target.ifsc_no.value,
    this.props.match.params.id    
    );
    console.log(response);   
    this.setState({btnMessage:0});
    this.setState({errorRes:response.data.error});
    this.setState({errorMessage:response.data.message});
    this.setState({sendData:true});
}

async LoadCompany(){
  var apiHandler = new APIHandler();
  var companydata = await apiHandler.fetchCompanyOnly();
   this.setState({companylist:companydata.data});
  
}
 
  render() {
    return (
      <section className="content">
        <div className="container-fluid">
          <div className="block-header">
            <h2>Add Medicine</h2>
          </div>
           {/* dfdf */}
           
        <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="card">
                        <div className="header">
                        
                            <h2>
                                Add Medicine
                            </h2>
                             
                        </div>
                        <div className="body">
                            <form onSubmit={this.formSubmit}>
                                <label htmlFor="name">Medicine Name</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="name" name="name" className="form-control" 
                                        placeholder="Enter Medicine Name"/>
                                    </div>
                                </div>
                                <label htmlFor="medical_typ">Medicine Type</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="medical_typ" name="medical_typ" className="form-control" 
                                        placeholder="Enter Medicine Type"/>
                                    </div>
                                </div>
                                <label htmlFor="buy_price">Buy Price</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="buy_price" name="buy_price" className="form-control" 
                                        placeholder="Enter Buy Price"/>
                                    </div>
                                </div>
                                <label htmlFor="sell_price">Sell Price</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="sell_price" name="sell_price" className="form-control" 
                                        placeholder="Enter Sell Price"/>
                                    </div>
                                </div>
                                <label htmlFor="c_gst">C GST</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="c_gst" name="c_gst" className="form-control" 
                                        placeholder="Enter C GST"/>
                                    </div>
                                </div>
                                <label htmlFor="s_gst">S GST</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="s_gst" name="s_gst" className="form-control" 
                                        placeholder="Enter S GST"/>
                                    </div>
                                </div>
                                <label htmlFor="c_gst">Batch No.</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="batch_no" name="batch_no" className="form-control" 
                                        placeholder="Enter Batch No"/>
                                    </div>
                                </div>
                                <label htmlFor="shelf_no">Shelf No.</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="shelf_no" name="shelf_no" className="form-control" 
                                        placeholder="Enter Shelf No"/>
                                    </div>
                                </div>
                                <label htmlFor="expire_date">Expire Date</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="date" id="expire_date" name="expire_date" className="form-control" 
                                        placeholder="Enter Expire Date"/>
                                    </div>
                                </div>
                                <label htmlFor="s">Manufacture Date</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="date" id="mfg_date" name="mfg_date" className="form-control" 
                                        placeholder="Enter Manufacture Date"/>
                                    </div>
                                </div>
                                <label htmlFor="description">Description</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="description" name="description" className="form-control" 
                                        placeholder="Enter Description"/>
                                    </div>
                                </div>
                                <label htmlFor="description">IN Stock Total</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="in_stock_total" name="in_stock_total" className="form-control" 
                                        placeholder="Enter In STock"/>
                                    </div>
                                </div>
                                <label htmlFor="qty_in_strip">Quantity In Strip</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="qty_in_strip" name="qty_in_strip" className="form-control" 
                                        placeholder="Enter Quantity In Strip"/>
                                    </div>
                                </div>
                                <label htmlFor="qty_in_strip">Company</label>
                                <div className="form-group">
                                <select className="form-control">
                                   {this.state.companylist.map((item=>(
                                     <option value={item.id}>{item.name}</option>
                                   )))}
                                </select>
                                     
                                </div>
                                
                               <br/>
                               <button type="submit"
                               className = "btn btn-primary m-t-15 wave-effect btn-block"
                               >
                               {this.state.btnMessage == 0 ?
                                "Add Medicine"
                                :"Adding Medicine Please Waitt"
                                }
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


             
            {/* end table */}
        </div>
      </section>
     
    );
  }
}

export default MedicineAddCompany;