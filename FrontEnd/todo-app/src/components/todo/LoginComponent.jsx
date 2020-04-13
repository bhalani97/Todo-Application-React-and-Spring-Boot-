import React ,{Component} from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            username : 'bhalani97',
            password : '',
            hasLoginFailed:false,
            showSuccessMsg:false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }
    handleChange(event){
        this.setState (
            {
                [event.target.name] : event.target.value
            }
        )
    }
    handlePasswordChange(event){
        this.setState (
            {
                pass : event.target.value
            }
        )
    }

    loginClicked(){
        // AuthenticationService.executeBasicAuthenticationService(this.state.username,this.state.password)
        // .then(
        //     ()=>{  AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password),
        //     this.props.history.push(`/welcome/${this.state.username}`) 
        //     }
        // )
        // .catch(
        //     ()=>{
        //         this.setState({
        //                     hasLoginFailed:true,
        //                     showSuccessMsg:false
        //                 })
        //     }
        // )


        AuthenticationService.executeJwtAuthenticationService(this.state.username,this.state.password)
        .then(
            (response)=>{  AuthenticationService.registerSuccessfulLoginForJwt(this.state.username,response.data.token),
            this.props.history.push(`/welcome/${this.state.username}`) 
            }
        )
        .catch(
            ()=>{
                this.setState({
                            hasLoginFailed:true,
                            showSuccessMsg:false
                        })
            }
        )




    //    if(this.state.username==='bhalani97' && this.state.password==='1234'){
    //     AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
    //        this.props.history.push(`/welcome/${this.state.username}`) //Routes page to /welcome    
    //     //    this.setState({
    //     //        hasLoginFailed:false,
    //     //        showSuccessMsg:true
    //     //    })
    //    }
    //    else{
    //     this.setState({
    //         hasLoginFailed:true,
    //         showSuccessMsg:false
    //     })
    //    }
    }
   
    render(){
        return (
            <div className="LoginComponent">
                <h1>Login</h1>
                <div className="container">

                   {/* <ShowInvalid hasLoginFailed={this.state.hasLoginFailed}></ShowInvalid> */}
                {/* <Showsuccess showSuccessMsg={this.state.showSuccessMsg}></Showsuccess> */} 

                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {/* {this.state.showSuccessMsg && <div >Login Success</div> } */}
                UserName : <input type="text" name="username" value={this.state.username}  onChange={this.handleChange} />
                Password : <input type="password" name="password"value={this.state.password} onChange={this.handleChange} />
                <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                    </div>
               

                
            </div>
        )
    }

}

export default LoginComponent