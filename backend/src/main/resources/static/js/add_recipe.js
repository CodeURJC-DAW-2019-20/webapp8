var arrayOfIngredients = 
    "<option>Bread</option>"
        +"<option>Potatoes</option>"
        +"<option>Fish</option>"
        +"<option>Honey</option>"
        +"<option>Milk</option>"
        +"<option>Tomatoes</option>";
var arrayOfCategories =
    "<option>Desserts</option>"
        +"<option>Starters</option>"
        +"<option>Main</option>"
        +"<option>Soups</option>"
        +"<option>Salad</option>"
        +"<option>Burgers</option>";
$(document).ready(function() {
    var arrayIngredients = [ ];
    var arrayCategories = [ ];
    var arraySteps = [ ];
    var ingCounter = 0;
    var catCounter = 0;
    var stepCounter = 0;

    //------------------ ADDING AN INGREDIENT ------------------//
    $("#add-ingredient").click(function() {
      var lastField = $("#ingredients-form div:last");
      var intId = (lastField && lastField.length && lastField.data("idx") + 1) || 1;
      var fieldWrapper = $("<div class=\"row\" id=\"ingredients-field" + intId + "\"/>");
      fieldWrapper.data("idx", intId);
      var fIngredients = $("<select id=\"ing"+ingCounter+"\" name=\"ing"+ingCounter+"\" class=\"col-9 avaiable-ingredients\">"+arrayOfIngredients+"</select>");
      var removeButton = $("<div class=\"btn-danger col-1\" style=\"border-radius:0.5rem;"
        +"align-self:center;"
        +"text-align:center;"
        +"padding:0;"
        +"cursor:pointer\">"
        +"<i class=\"fa fa-trash\" aria-hidden=\"true\" styles=\"object-fit:cover;padding:50%\"></i>"
        +"</div>");
      fieldWrapper.append(fIngredients);
      fieldWrapper.append(removeButton);
      $("#ingredients-form").prepend(fieldWrapper);//add to the top of the form
        removeButton.click(function() {
        $(this).parent().remove();
      });
      ingCounter++;
    });
    //------------------ ADDING A CATEGORY ------------------//
    $("#add-category").click(function() {
      var lastField = $("#category-form div:last");
        var intId = (lastField && lastField.length && lastField.data("idx") + 1) || 1;
        var fieldWrapper = $("<div class=\"row\" id=\"category-field" + intId + "\"/>");
        fieldWrapper.data("idx", intId);
        var fCategories = $("<select id=\"cat"+catCounter+"\" name=\"ing"+catCounter+"\" class=\"col-9 avaiable-categories\">"+arrayOfCategories+"</select>");
        var removeButton = $("<div class=\"btn-danger col-2\" style=\"border-radius:0.5rem;"
          +"align-self:center;"
          +"text-align:center;"
          +"padding:0;"
          +"cursor:pointer\">"
          +"<i class=\"fa fa-trash\" aria-hidden=\"true\" styles=\"object-fit:cover;padding:50%\"></i>"
          +"</div>");
        fieldWrapper.append(fCategories);
        fieldWrapper.append(removeButton);
        $("#category-form").prepend(fieldWrapper);
        removeButton.click(function() {
          $(this).parent().remove();
      });
      catCounter++;
      });
    
    var stepNumber = 2;
    //------------------ ADDING A STEP ------------------//
    $("#add-step").click(function() {
        var lastField = $("#steps-form div:last");
        var intId = (lastField && lastField.length && lastField.data("idx") + 1) || 1;
        var fieldWrapper = $("<div id=\"steps-field" 
        + intId + "\">"
        +"<h3>Step " + stepNumber +"</h3><hr></div>");
        stepNumber++;
        fieldWrapper.data("idx", intId);
        var fStep = $("<div style=\"width: 100%;height:250\">"
            +"<div id=\"stepsCountChar"+stepNumber+"\"></div>"
            +"<textarea id=\"step"+stepCounter+"\" name=\"step"+stepCounter+"\" onkeyup=\"stepsCountChar(this)\" class=\"\""
                +"placeholder=\"Type how to do this step\" style=\"width: 100%;"
                +"height: 150px;border-radius: 0.5rem;"
                +"border:1px solid rgba(0, 0, 0, 0.3);"
                +"padding:10px;\">"
            +"</textarea>"
        );
        var removeButton = $("<div class=\"btn-danger\" style=\"border-radius:0.5rem;"
                +"align-self:center;"
                +"text-align:center;"
                +"width:10%;"
                +"cursor:pointer\">"
                +"<i class=\"fa fa-trash\" aria-hidden=\"true\" styles=\"object-fit:cover;"
                +"padding:5px\"></i>"
            +"</div>"
        );
        fieldWrapper.append(fStep);
        fieldWrapper.append(removeButton);
        $("#steps-form").append(fieldWrapper);//add to the top of the form
        removeButton.click(function() {
          stepNumber--; //still've some troubles, need to refresh with ajax(realtime)the counter var for each h3 on top
          $(this).parent().remove();
        });
        stepCounter++;
      });
    //------------------- POST RECIPE BUTTON ---------------------//
    $("#post-recipe").click(function(){
//INGREDIENTS
      for(var i=0; i<ingCounter; i++){
        var valor = document.getElementById("ing"+i);
        console.log("ID: " + valor);
        if(valor != null){
          arrayIngredients.push(valor.value);
        }
        console.log("ARRAY: " + arrayIngredients);
      }
      var ings = document.getElementById("ingredientsString");
      ings.setAttribute("value", arrayIngredients);
      console.log("Definitive Ings: " + ings.value);
//CATEGORIES
      for(var i=0; i<catCounter; i++){
        var valor = document.getElementById("cat"+i);
        console.log("ID: " + valor);
        if(valor != null){
          arrayCategories.push(valor.value);
        }
        console.log("ARRAY CATEGORIES: " + arrayCategories);
      }
      var cats = document.getElementById("categoriesString");
      cats.setAttribute("value", arrayCategories);
      console.log("Definitive Cat: " + cats.value);
//STEPS
      for(var i=0; i<stepCounter; i++){
        var valor = document.getElementById("step"+i);
        console.log("ID: " + valor);
        if(valor != null){
          arraySteps.push(valor.value);
        }
        console.log("ARRAY STEPS: " + arraySteps);
      }
      var steps = document.getElementById("stepsString");
      steps.setAttribute("value", arraySteps);
      console.log("Definitive Steps: " + steps.value);
    });
    

    //--------------------------------------------------------//
  });
  function stepCountChar(val) {
    var len = val.value.length;
    if (len > 500) {
      val.value = val.value.substring(0, 500);
    } else {
      $('#stepCountChar').text(500 - len);
    }
  };
  function introCountChar(val) {
    var len = val.value.length;
    if (len > 200) {
      val.value = val.value.substring(0, 200);
    } else {
      $('#introCountChar').text(200 - len);
    }
  };
  function titleCountChar(val) {
    var len = val.value.length;
    if (len > 50) {
      val.value = val.value.substring(0, 50);
    } else {
      $('#titleCountChar').text(50 - len);
    }
  };
  function stepsCountChar(val) {
    var len = val.value.length;
    if (len > 500) {
      val.value = val.value.substring(0, 500);
    } else {
      $('#stepsCountChar'+counter).text(500 - len);
    }
  };
  var easy = $("#easy-star");
  var medium = $("#medium-star");
  var hard = $("#hard-star");
  var extreme = $("#extreme-star");

  function starClick(input){
    switch(input){
        case 1:
            $("#easy-text").removeAttr("hidden");
            $("#medium-text").attr("hidden",true);
            $("#hard-text").attr("hidden",true);
            $("#extreme-text").attr("hidden",true);

            easy.attr("name", "difficulty");
            medium.removeAttr("name");
            hard.removeAttr("name");
            extreme.removeAttr("name");
            break;
        case 2:
            $("#easy-text").attr("hidden",true);
            $("#medium-text").removeAttr("hidden");
            $("#hard-text").attr("hidden",true);
            $("#extreme-text").attr("hidden",true);

            easy.removeAttr("name");
            medium.attr("name", "difficulty");
            hard.removeAttr("name");
            extreme.removeAttr("name");
            break;
        case 3:
            $("#easy-text").attr("hidden",true);
            $("#medium-text").attr("hidden",true);
            $("#hard-text").removeAttr("hidden");
            $("#extreme-text").attr("hidden",true);

            easy.removeAttr("name");
            medium.removeAttr("name");
            hard.attr("name", "difficulty");
            extreme.removeAttr("name");
            break;
        case 4:
            $("#easy-text").attr("hidden",true);
            $("#medium-text").attr("hidden",true);
            $("#hard-text").attr("hidden",true);
            $("#extreme-text").removeAttr("hidden");

            easy.removeAttr("name");
            medium.removeAttr("name");
            hard.removeAttr("name");
            extreme.attr("name", "difficulty");
            break;
        default:
            $("#easy-text").attr("hidden",true);
            $("#medium-text").attr("hidden",true);
            $("#hard-text").attr("hidden",true);
            $("#extreme-text").attr("hidden",true);
    }
};