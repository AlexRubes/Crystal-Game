$(document).ready(function(){
    
    let wins = 0;
    let losses = 0;
    let counter = 0;
    let crystals = $("#crystals");
    let targetNumber ;
    let numberOptions = [10, 5, 3, 7];

    //function init() {

    targetNumber = Math.floor((Math.random() * 100) + 19);
    console.log(targetNumber);
    $("#number-to-guess").text(targetNumber);
        
    // function resetGame () {
    //     counter = 0;
    //     numberOptions = [10, 5, 3, 7];
    //     $("#score").empty();
    // }

    // create loop to assign value to each button
    for (var i = 0; i < numberOptions.length; i++) {

        let crystalButton = $(".crystal-value");
        //assign buttons a value
        crystalButton.val(numberOptions[i]);
        }
    
    // create click event that works for all button clicks
    $("#crystals").on("click", function() {

        let crystalValue = ($(".crystal-value").val());
        
        //converts string to number
        crystalValue = parseInt(crystalValue);
        console.log(crystalValue);
        
        counter += crystalValue;
        console.log(counter);
        $("#score").text(counter);

        if (counter === targetNumber) {
        $("#wins").text(wins++);
        // resetGame();
        // init();
        }
        else if (counter >= targetNumber) {
        $("#losses").text(losses++);
        // resetGame();
        // init();
        }

    });
//init();
});
