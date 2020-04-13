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
public class TodoJpaResource {

	@Autowired
	TodoJpaRepo repo;

	@GetMapping("/jpa/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username) {
		return repo.findByUsername(username);
	}

	@GetMapping("/jpa/users/{username}/todos/{id}")
	public Todo getAllTodos(@PathVariable String username, @PathVariable long id) {

		return repo.findById(id).get();
	}

	@DeleteMapping("/jpa/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteById(@PathVariable String username, @PathVariable long id) {
		repo.deleteById(id);

		return ResponseEntity.noContent().build();

	}

	@PutMapping("/jpa/users/{username}/todos/{id}")
	public ResponseEntity<Void> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo)
			throws Exception {
		todo.setUsername(username);
	Todo saved =	repo.save(todo);
		if (saved != null) {
			return ResponseEntity.ok().build();
		}
		return ResponseEntity.noContent().build();
	}

	@PostMapping("/jpa/users/{username}/todos")
	public ResponseEntity<Void> createTodo(@PathVariable String username, @RequestBody Todo todo) throws Exception {
		todo.setUsername(username);
		Todo saved = repo.save(todo);
		if (todo != null) {
			return ResponseEntity.created(new URI("users/username/todos/" + saved.getId())).build();
		}
		return ResponseEntity.noContent().build();
	}

}
