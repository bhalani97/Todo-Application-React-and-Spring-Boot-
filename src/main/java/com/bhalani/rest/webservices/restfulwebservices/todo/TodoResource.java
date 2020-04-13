package com.bhalani.rest.webservices.restfulwebservices.todo;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodoResource {
	
	@Autowired
	TodoHardCodedService todoService;
	@GetMapping("users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username){
		return todoService.findAll();
	}

	@GetMapping("users/{username}/todos/{id}")
	public Todo getAllTodos(@PathVariable String username,@PathVariable long id){
		System.out.println("Todo Called with "+username+"and "+id );
		return todoService.findById(id);
	}
	
	@DeleteMapping("users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteById(@PathVariable String username ,@PathVariable long id) {
		Todo todo = todoService.deleteById(id);
		if(todo!=null) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}
	
	@PutMapping("users/{username}/todos/{id}")
	public ResponseEntity<Void> updateTodo(@PathVariable String username ,@PathVariable long id,@RequestBody Todo todo) throws Exception {
		todoService.save(todo);	
		if(todo!=null) {
			return ResponseEntity.ok().build();
		}
		return ResponseEntity.noContent().build();
	}
	
	@PostMapping("users/{username}/todos")
	public ResponseEntity<Void> saveTodo(@PathVariable String username ,@RequestBody Todo todo) throws Exception {
		
		
		Todo saved = todoService.save(todo);	
		if(todo!=null) {
			return ResponseEntity.created(new URI("users/username/todos/"+saved.getId())).build();
		}
		return ResponseEntity.noContent().build();
	}
	

	
}
