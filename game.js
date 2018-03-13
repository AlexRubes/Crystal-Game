$(document).ready(function(){
    
    let wins = 0;
    let losses = 0;
    let counter = 0;
    let crystals = $("#crystals");
    let targetNumber ;
    let i = 0;

    //function init() {

        targetNumber = Math.floor((Math.random() * 100) + 19);
        console.log(targetNumber);
        $("#number-to-guess").text(targetNumber);

        
    function resetGame () {
        setcrystals();
         counter = 0;
         $("#score").empty();
        
         targetNumber = Math.floor((Math.random() * 100) + 19);
         console.log(targetNumber);
         $("#number-to-guess").text(targetNumber);
 
     }

    // create loop to assign value to each button
    function setcrystals () {
        $(".crystal-value").each(function(){
            $(this).val(Math.floor((Math.random() * 15) + 1));
            i += 1;
        });
    }
   
    setcrystals();
    // create click event that works for all button clicks
    $(".crystal-value").on("click", function() {

        let crystalValue = ($(this).val());
        
        //converts string to number
        crystalValue = parseInt(crystalValue);
        console.log(crystalValue);
        
        counter += crystalValue;
        console.log(counter);
        $("#score").text(counter);

        if (counter === targetNumber) {
            wins++;
            $("#wins").text(wins);
            resetGame();
            // init();
        }
        else if (counter >= targetNumber) {
            losses++;
            $("#losses").text(losses);
            resetGame();
            // init();
        }

    });
//init();
});
