import Axios from "axios"
import {API_URL} from './../../Constants.js'


class TodoDataService {

    retriveAllTodos(user){
       return  Axios.get( `${API_URL}/jpa/users/${user}/todos`)

    }

    retriveTodo(user,id){
        return Axios.get( `${API_URL}/jpa/users/${user}/todos/${id}`)
 
     }
     
    deleteTodo(user,id){
        return Axios.delete(`${API_URL}/jpa/users/${user}/todos/${id}`)
    }
    updateTodo(user,id,todo){
       return  Axios.put(`${API_URL}/jpa/users/${user}/todos/${id}`,todo)
    }

    createTodo(user,id,todo){
        return  Axios.post(`${API_URL}/jpa/users/${user}/todos/`,todo)
     }
    
}

export default new TodoDataService