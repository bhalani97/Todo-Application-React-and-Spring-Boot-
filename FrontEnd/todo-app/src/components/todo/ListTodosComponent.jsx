import React ,{Component} from 'react'
import TodoDataService from './../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'
import moment from 'moment'
class ListTodosComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos:
            [
                // {id:1,description:'Learn React',done:false,targetDate:new Date()},
                // {id:2,description:'Learn Java',done:false,targetDate:new Date()},
                // {id:3,description:'Learn Dance',done:false,targetDate:new Date()}
            ],
            message : null
        }
      this.updateTodoClicked = this.updateTodoClicked.bind(this)
      this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
      this.refreshTodos = this.refreshTodos.bind(this)
      this.addTodoCLicked = this.addTodoCLicked.bind(this)
    }
    
    componentDidMount(){
   
        this.refreshTodos()
    }
    refreshTodos(){
        let user = AuthenticationService.getLoggedInUser();
        TodoDataService.retriveAllTodos(user)
        .then(
            response=>{
                this.setState({
                    todos:response.data 
                })
            }
        )      
    }

    deleteTodoClicked(id){
        let user = AuthenticationService.getLoggedInUser();
        TodoDataService.deleteTodo(user,id)
        .then(
            
            response=>{
                this.setState({
                    message:   `Todo with  Id ${id} has been deleted`
                })
                this.refreshTodos()
                
            }
        )


    }

    updateTodoClicked(id){
        console.log(id)
        this.props.history.push(`/todos/${id}`)
        
        // let user = AuthenticationService.getLoggedInUser();
        // TodoDataService.deleteTodo(user,id)
        // .then(
            
        //     response=>{
        //         this.setState({
        //             message:   `Todo with  Id ${id} has been deleted`
        //         })
        //         this.refreshTodos()
                
        //     }
        // )


    }
    addTodoCLicked(){
        this.props.history.push('/todos/-1')
    }

    render(){
        return(
            <div>
               <h1> List Todos </h1>
               {this.state.message!=null &&<div className="alert alert-success">
                   {this.state.message}
               </div>}
               <div className="container">
               <table className="table">
                   <thead>
                       <th>Description</th>
                       <th>IsCompleted?</th>
                       <th>Target Date</th>
                       <th>Update</th>
                       <th>Delete</th>
                   </thead>
                   <tbody>
                       {
                           this.state.todos.map(
                               todo => 
                                <tr key={todo.id}>
                                    <td>{todo.desc}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{moment(todo.targetDate).format('YYYY-MM-DD') }</td>
                                    <td><button onClick={()=>this.updateTodoClicked(todo.id)} className="btn btn-success">Update</button></td>
                                    <td><button onClick={()=>this.deleteTodoClicked(todo.id)} className="btn btn-warning">Delete</button></td>
                                </tr>
                           )
                       }
                      
                   </tbody>
               </table>
                       <div className="row">
                           <button onClick={this.addTodoCLicked} className="btn btn-success">Add</button>
                       </div>

               </div>
                </div>
        )
    }
}

export default ListTodosComponent