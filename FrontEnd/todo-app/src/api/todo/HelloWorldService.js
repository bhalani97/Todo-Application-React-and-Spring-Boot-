import Axios from "axios"

class HelloWorldService{
    executeHelloWorldService(){
       return  Axios.get('http://localhost:8080/hello-world')
        console.log('Divyesh')
    }

    executeHelloWorldServiceWithPathVar(name){
        // let username = 'user'
        // let password = 'password'
        // let basicAuthHeader = 'Basic ' + window.btoa(username+":"+password)
         return  Axios.get(`http://localhost:8080/hello-world/${name}`
         //,
        // {
        //     headers:{
        //         authorization:basicAuthHeader

        //     }
        // }
        )
         
     }
}
 export default new HelloWorldService()