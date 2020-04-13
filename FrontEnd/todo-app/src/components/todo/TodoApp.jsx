import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import AuthenticatedRouter from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent'
import ListTodosComponent from "./ListTodosComponent";
import HeaderComponent from './HeaderComponent'
import WelcomeComponent from './WelcomeComponent'
import LogoutComponent from './LogoutComponent'
import ErrorComponent from './ErrorComponent'
import FooterComponent from './FooterComponent'
import TodoComponent from './TodoComponent'
class Todo extends Component{
    
    render(){
        
        return (
            <div className="TodoApp">   
            <Router>
                <HeaderComponent></HeaderComponent>
                 <Switch> {/*only renders one component  */}
                <Route path="/" exact component={LoginComponent}></Route>
                <Route path="/login" component={LoginComponent}></Route>
                <AuthenticatedRouter path="/todos/:id" component={TodoComponent} /> 
                <AuthenticatedRouter path="/welcome/:name" component={WelcomeComponent}></AuthenticatedRouter>
                <AuthenticatedRouter path="/todos" component={ListTodosComponent}></AuthenticatedRouter>
                <AuthenticatedRouter path="/logout" component={LogoutComponent} />
             
                <Route component={ErrorComponent}></Route>
                </Switch>
                <FooterComponent></FooterComponent>
                </Router>
                {/* <LoginComponent></LoginComponent>
                <WelcomeComponent></WelcomeComponent> */}
            </div>
        )
    }
}

export default Todo











// function  ShowInvalid(props) {
//     if(props.hasLoginFailed){
//         return <div>Invalid Credentials</div>    
//     }
//    return null
// }

// function Showsuccess(props){
    
//     if(props.showSuccessMsg){
//         return <div>Login Success</div>    
//     }
//    return null
// }