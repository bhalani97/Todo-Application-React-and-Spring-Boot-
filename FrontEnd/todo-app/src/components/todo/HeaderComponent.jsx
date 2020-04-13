import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import {withRouter} from 'react-router'
class HeaderComponent extends Component{
    render(){
        const isUserLoggeIn = AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggeIn)
        
        return(
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="www.google.com" className="navbar-brand">in28Minutes</a></div>
                        <ul className="navbar-nav">
                            {isUserLoggeIn && <li><Link className="nav-link" className="nav-link" to="/welcome/bhalani97">Home</Link></li>}
                            {isUserLoggeIn && <li><Link  className="nav-link" to="/todos">Todos</Link></li>}
                            </ul>
                            <ul className="navbar-nav navbar-collapse justify-content-end ">
                            {!isUserLoggeIn && <li><Link  className="nav-link" to="/login">Login</Link></li>}
                           {isUserLoggeIn && <li><Link  className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                            
                            </ul>
                    </nav>
                </header>
            </div>
        )
    }
}
export default withRouter(HeaderComponent)
