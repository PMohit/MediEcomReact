import axios from "axios"
import Config from "./Config";
import {reactLocalStorage} from 'reactjs-localstorage';

class AuthHandler{
    static login(username,password,callback){
        axios
        .post(Config.loginUrl,{username:username,password:password})
        .then(function(response){
              if(response.status === 200){
                  reactLocalStorage.set("token",response.data.access);
                  reactLocalStorage.set("refresh",response.data.refresh);
                  callback({
                    error:false,
                    message:"login Successfull"});
              }
            //console.log(response);
        })
        .catch(function(error){
            //console.log(error.response);
            callback({error:true,
                "message":"Error !! During Login"});
        });
    }

    static loggedIn(){
        if(reactLocalStorage.get('token') && reactLocalStorage.get("refresh")){
            return true;

        }else{
            return false;

        }
    }

    static getLoginToken(){
        return reactLocalStorage.get("token")
    }

    static getRefreshToken(){
        return reactLocalStorage.get("refresh")
    }

    static logoutUser(){
         reactLocalStorage.remove("token");
          reactLocalStorage.remove("refresh");
    }

    static checkTokenExpire(){
       var expire= false;
       var token = this.getLoginToken();
       var tokenArrary = token.split(".");
       var jwt = JSON.parse(atob(tokenArrary[1]));
      // console.log(jwt);
      if(jwt && jwt.exp && Number.isFinite(jwt.exp)){
          expire=jwt.exp*10000;
      }else{
          expire= false;
      }
if(!expire){
    return false;
}
     return Date.now()>expire;
   }
}

export default AuthHandler; 