$("button").click(function() {
       var Age  = $("#number2").val();
        var ball = $("#number1").val();
    
    if (Age > 18 && ball === "3" ) {
$(".results").text("You are a good soccer player");

    }else if (Age > 18 && ball === "1" ){
$(".results").text("You must work one team.");

 }else if (Age < 18 && ball === "Barcelona" ){
$(".results").text("You must be a Messi fan.");

 }else if (Age < 18 && ball === "Real Madrid" ){
$(".results").text("You Must be mad that CR7 left the team");
}
});