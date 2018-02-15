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
            }, //success function
        });  //ajax
    }); //click recipeSubmit
});

