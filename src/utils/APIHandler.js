import { reactLocalStorage } from "reactjs-localstorage";

const { default: AuthHandler } = require("./AuthHandler");
const { default: Axios } = require("axios");
const { default: Config } = require("./Config");


class APIHandler {
    async checkLogin(){
        if(AuthHandler.checkTokenExpirary()){
            var response = await Axios.post(Config.refreshApiUrl,{
                refresh:AuthHandler.getRefreshToken(),
            });
        }
    }

 async saveCompanyData(name,license_no,address,contact_no,email,description){
     this.checkLogin();
 }

}

export default APIHandler;