var seaAnimals = Array(4).fill(0); 
var counter = 1;


// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them


document.addEventListener("DOMContentLoaded", function() {
    
    var shuffle = ['crab','octopus','seahorse','fish'];
    var i = shuffle.length, k , temp;      // k is to generate random index and temp is to swap the values
    while(--i > 0){
       k = Math.floor(Math.random() * (i+1));
       temp = shuffle[k];
       shuffle[k] = shuffle[i];
       shuffle[i] = temp;
    }

    document.getElementById('1').onclick = runGame;
    document.getElementById('2').onclick = runGame;
    document.getElementById('3').onclick = runGame;
    document.getElementById('4').onclick = runGame; 
    
    document.getElementById("submit").onclick = checkAnswer();

});

/** create array for trys and populate */
function runGame () {
    
        {
        if(counter == 0){
            document.getElementById(this.id).src = "assets/images/fish.png";
            counter++;
        }
        else if(counter == 1){
            document.getElementById(this.id).src = "assets/images/octopus.png";
            counter++;
        }
        else if(counter == 2){
            document.getElementById(this.id).src = "assets/images/crab.png";
            counter++;
        }
        else if(counter == 3){
            document.getElementById(this.id).src = "assets/images/seahorse.png";
            counter = 0;
        }

    seaAnimals.splice((this.id-1), 1, document.getElementById(this.id).src);
    console.log(seaAnimals);
    };
};

function checkAnswer(shuffle) {
    console.log("hello! from checkanswer");
    /**document.write(arr);*/
    console.log(seaAnimals);
    console.log(shuffle);
};
