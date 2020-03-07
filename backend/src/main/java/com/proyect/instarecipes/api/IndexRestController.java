package com.proyect.instarecipes.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

import com.fasterxml.jackson.annotation.JsonView;
import com.proyect.instarecipes.models.Recipe;
import com.proyect.instarecipes.models.User;
import com.proyect.instarecipes.repositories.RecipesRepository;

@RestController
@RequestMapping("/api/index")
public class IndexRestController{
	public interface Main extends User.Username, Recipe.RecipeBasic, Recipe.RecipePlus{}

    @Autowired
	private RecipesRepository recipesRepository;
	
	@JsonView(IndexRestController.Main.class)
	@GetMapping("/")
	public ResponseEntity<Boolean> getRecentUsersPublicationsNotLogged(){
		Boolean yo = true;
		return new ResponseEntity<>(yo,HttpStatus.OK); // para hacer
	}

	@JsonView(IndexRestController.Main.class)
	@GetMapping("/index")
	public ResponseEntity<List<Recipe>> getRecentUsersPublicationsLogged(){
		return null; // para hacer
	}

	@JsonView(IndexRestController.Main.class)
	@GetMapping("/trending")
	public ResponseEntity<List<Recipe>> getTrendingAlgorithm(){
		return null; // para hacer
	}

	@JsonView(IndexRestController.Main.class)
	@PostMapping("/index")
	public ResponseEntity<List<Recipe>> postRecipe(){
		return null; // para hacer
	}
}