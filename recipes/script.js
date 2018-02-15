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
                results += "<h2>Recipes with " + value + ":</h2>";
                for (var i=0; i < json.hits.length; i++)
                {
                    results += "<img src='" + json.hits[i].recipe.image + "'>"
                    results += "<p><a href='" + json.hits[i].recipe.url + "'>" + json.hits[i].recipe.label + "</a></p>";
                }
                $("#recipeResult").html(results);
            }, //success function
        });  //ajax
    }); //click recipeSubmit
});

