package com.bhalani.rest.webservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class TodoHardCodedService {
	private static List<Todo> todos = new ArrayList<>();
	private static int idCounter = 0;
	static {
		todos.add(new Todo(++idCounter, "bhalani97", "Learn React", new Date(), false));
		todos.add(new Todo(++idCounter, "bhalani97", "Learn Java", new Date(), true));
		todos.add(new Todo(++idCounter, "bhalani97", "Learn Python", new Date(), true));
		todos.add(new Todo(++idCounter, "bhalani97", "Learn Singing", new Date(), false));
		todos.add(new Todo(++idCounter, "bhalani97", "Learn Karate", new Date(), false));

	}

	public List<Todo> findAll() {
		return todos;
	}

	public Todo deleteById(long id) {
		Todo todo = findById(id);

		if (todos.remove(todo)) {
			return todo;
		}

		return null;

	}
	
	public Todo save(Todo todo) {
		if(todo.getId()==0 || todo.getId()==-1) {
			todo.setId(++idCounter);
			todos.add(todo);
		}
		else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}

	public Todo findById(long id) {
		// TODO Auto-generated method stub
		for (Todo todo : todos) {
			if (todo.getId() == id) {
				return todo;
			}

		}
		return null;
	}
}
