import com.proyect.instarecipes.models.Recipe;
import com.proyect.instarecipes.repositories.RecipesRepository;
import com.proyect.instarecipes.models.ImageService;

@Controller
public class RecipePageController{

    @Autowired
    private RecipesRepository recipeRep;
    @Autowired
    private ImageService ImageService;


    @GetMapping("/recipes/show")
	public String Allrecipes(Model model) {

		List<Recipe> recipes = recipeRep.findAll();
		
		model.addAttribute("recetas", recipes);

		return "Allrecipes";
	}

    @GetMapping("/recipe/new")
	public String NewRecipeForm() {
		return "new_recipe";
	}

	@PostMapping("/anuncio/guardar")
	public String NewRecipe(Model model, Recipe recipe, @RequestParam MultipartFile imagenFile) throws IOException {

		recipe.setImagen(true);
		
		repository.save(recipe);
		
		imgService.saveImage("receta", recipe.getId(), imagenFile);

		return "recipe_saved";

	}

	@GetMapping("/anuncio/{id}")
	public String verAnuncio(Model model, @PathVariable long id) {

		Optional<Recipe> recipe = repository.findById(id);
		if(recipe.isPresent()) {
			model.addAttribute("receta", recipe.get());
		}
		
		return "show_recipe";
	}






}