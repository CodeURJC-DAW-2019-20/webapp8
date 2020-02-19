package com.proyect.instarecipes.repositories;

import java.util.List;

import com.proyect.instarecipes.models.Recipe;
import com.proyect.instarecipes.models.Step;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface StepsRepository extends JpaRepository<Step, Long> {
    @Query("SELECT s FROM Step s WHERE s.recipe = :recipe")
	List<Step> findAllByRecipe(Recipe recipe);
}