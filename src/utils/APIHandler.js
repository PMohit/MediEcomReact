import { reactLocalStorage } from "reactjs-localstorage";

const { default: AuthHandler } = require("./AuthHandler");
const { default: Axios } = require("axios");
const { default: Config } = require("./Config");


class APIHandler {
    async checkLogin(){
        if(AuthHandler.checkTokenExpire()){
            try{
            var response = await Axios.post(Config.refreshApiUrl,{
                refresh:AuthHandler.getRefreshToken(),
            });
            reactLocalStorage.set("token",response.data.access);
        }
        catch(error){
          console.log(error);
          //NOt using valid token refresh
          AuthHandler.logoutUser();
         window.location="/";
        }
        }
    }

 async saveCompanyData(name,license_no,address,contact_no,email,description){
    await this.checkLogin();
     var response = await Axios.post(Config.companyApiUrl,{
         name:name,
         license_no:license_no,
         address:address,
         contact_no:contact_no,
         email:email,
         description:description,
     },
     { headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() } }
     );
     return response;
 }

 
 async fetchAllCompany(){
    await this.checkLogin();
      var response = await Axios.get(Config.companyApiUrl,{
        headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() }
      });
      return response;
 }

 async fetchAllCompanyDetails(id){
    await this.checkLogin();
      var response = await Axios.get(Config.companyApiUrl +""+id+"/",{
        headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() }
      });
      return response;
 }


 async editCompanyData(name,license_no,address,contact_no,email,description,id){
    await this.checkLogin();
     var response = await Axios.put(Config.companyApiUrl+""+id+"/",{
         name:name,
         license_no:license_no,
         address:address,
         contact_no:contact_no,
         email:email,
         description:description,
     },
     { headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() } }
     );
     return response;
 }
 async saveCompanyBankData(bank_account_no,ifsc_no,company_id){
  await this.checkLogin();
   var response = await Axios.post(Config.companyBankApiUrl,{
      bank_account_no:bank_account_no,
      ifsc_no:ifsc_no,
      company_id:company_id,
               
   },
   { headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() } }
   );
   return response;
}

async fetchAllCompanyBankDetails(id){
  await this.checkLogin();
    var response = await Axios.get(Config.companyBankApiUrl +""+id+"/",{
      headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() }
    });
    return response;
}


async editCompanyBankData(bank_account_no,ifsc_no,company_id,id){
  await this.checkLogin();
   var response = await Axios.put(Config.companyBankApiUrl+""+id+"/",{
    bank_account_no:bank_account_no,
    ifsc_no:ifsc_no,
    company_id:company_id,
   },
   { headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() } }
   );
   return response;
}

 
async fetchCompanyOnly(){
  await this.checkLogin();
    var response = await Axios.get(Config.companyOnlyApiUrl,{
      headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() }
    });
    return response;
}

 async saveMedicineData(
  name,
  medical_typ,
   buy_price,
   sell_price,
  c_gst,
   s_gs,
  batch_no,
  shelf_no,
   expire_date,
   mfg_date,
   company_id,
   description,
   in_stock_total,
   qty_in_strip,
   medicinedetails){
     
    await this.checkLogin();
    var response = await Axios.post(Config.medicineApiUrl,{
      name:name,
      medical_typ:medical_typ,
      buy_price:buy_price,
      sell_price:sell_price,
      c_gst:c_gst,
      s_gs:s_gs,
      batch_no:batch_no,
      shelf_no:shelf_no,
      expire_date:expire_date,
      mfg_date:mfg_date,
      company_id:company_id,
      description:description,
      in_stock_total:in_stock_total,
      qty_in_strip:qty_in_strip,
      medicinedetails:medicinedetails,
                
    },
    { headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() } }
    );
    return response;
 }

}

export default APIHandler;