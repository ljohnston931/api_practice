$(document).ready(function() {
    var generateButton = $("#recipeSubmit");

    $("#recipeSubmit").click(function(e) {
        e.preventDefault();
        var value = $("#recipeInput").val();
        var myurl = "https://api.edamam.com/search?q=" + value + "&app_id=8e51b4dd" 
        + "&app_key=c2dd3fab8b7040bf0530da8f645513a6";

        $.ajax({
            url: myurl,
            dataType: "json",
            success: function(json) {
                console.log(json);

                var results = "";
                results += "<h2>Recipes with \"" + value + "\":</h2>";
                for (var i=0; i < json.hits.length; i++)
                {
                    results += "<img src='" + json.hits[i].recipe.image + "'>"
                    results += "<p><a href='" + json.hits[i].recipe.url + "'>" + json.hits[i].recipe.label + "</a>"
                        + " from " + json.hits[i].recipe.source + "</p><br>";
                }
                $("#recipeResult").html(results);
            }, //success function
        });  //ajax
    }); //click recipeSubmit

    $("#vegetSubmit").click(function(e) {
        e.preventDefault();
        var value = $("#vegetInput").val();
        var myurl = "https://api.edamam.com/search?q=" + value + "&app_id=8e51b4dd" 
        + "&app_key=c2dd3fab8b7040bf0530da8f645513a6" + "&health=vegetarian";

        $.ajax({
            url: myurl,
            dataType: "json",
            success: function(json) {
                console.log(json);

                var results = "";
                results += "<h2>Vegetarian Recipes with \"" + value + "\":</h2>";
                for (var i=0; i < json.hits.length; i++)
                {
                    results += "<img src='" + json.hits[i].recipe.image + "'>"
                    results += "<p><a href='" + json.hits[i].recipe.url + "'>" + json.hits[i].recipe.label + "</a>"
                        + " from " + json.hits[i].recipe.source + "</p><br>";
                }
                $("#vegetResult").html(results);
            }, //success function
        });  //ajax
    }); //click recipeSubmit

    $("#veganSubmit").click(function(e) {
        e.preventDefault();
        var value = $("#veganInput").val();
        var myurl = "https://api.edamam.com/search?q=" + value + "&app_id=8e51b4dd" 
        + "&app_key=c2dd3fab8b7040bf0530da8f645513a6" + "&health=vegan";

        $.ajax({
            url: myurl,
            dataType: "json",
            success: function(json) {
                console.log(json);

                var results = "";
                results += "<h2>Vegan Recipes with \"" + value + "\":</h2>";
                for (var i=0; i < json.hits.length; i++)
                {
                    results += "<img src='" + json.hits[i].recipe.image + "'>"
                    results += "<p><a href='" + json.hits[i].recipe.url + "'>" + json.hits[i].recipe.label + "</a>"
                        + " from " + json.hits[i].recipe.source + "</p><br>";
                }
                $("#veganResult").html(results);
            }, //success function
        });  //ajax
    }); //click recipeSubmit
});

