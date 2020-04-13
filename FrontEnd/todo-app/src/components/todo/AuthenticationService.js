import Axios from "axios";
import {API_URL} from './../../Constants.js'

class AuthenticationService{
    registerSuccessfulLogin(username,password){

      
        sessionStorage.setItem('authenticatedUser',username);
        this.setupAxiosInterceptors(this.createBasicAuthToken(username,password))
         
    }

    createBasicAuthToken(username,password){
        let basicAuthHeader = "Basic "+window.btoa(username+":"+password)        
        return basicAuthHeader
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser')
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user==null) return false;
        return true;
    }
 
    executeBasicAuthenticationService(username,password){
       return  Axios.get( `${API_URL}/basicauth`,{
            headers :{
                authorization:this.createBasicAuthToken(username,password)
            }
        })
    }

    executeJwtAuthenticationService(username,password){
        return  Axios.post( `${API_URL}/authenticate`,{
            username,
            password
        })
     }

     registerSuccessfulLoginForJwt(username,token){
         console.log(token)
         sessionStorage.setItem('authenticatedUser',username);
         this.setupAxiosInterceptorsForJwtToken(token)
     }
     setupAxiosInterceptorsForJwtToken(token){
        Axios.interceptors.request.use(
            (config)=>{
                if(this.isUserLoggedIn()){
                    config.headers.authorization = this.createToken(token)
                }
                return config
            }
        )
     }

     createToken(token){
         return 'Bearer '+token
     }
    
    getLoggedInUser(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user==null) return null;
        return user;
    }

    setupAxiosInterceptors(basicAuthHeader){
        Axios.interceptors.request.use(
        (config)=> {
            if(this.isUserLoggedIn()){
                config.headers.authorization = basicAuthHeader
            }
            return config
        }
    )
    }
 
}


export default new AuthenticationService()