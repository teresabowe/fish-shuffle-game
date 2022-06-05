var seaAnimals = ["https://8000-teresabowe-fishshuffleg-f4uffbtqz7m.ws-eu46.gitpod.io/assets/images/fish.png","https://8000-teresabowe-fishshuffleg-f4uffbtqz7m.ws-eu46.gitpod.io/assets/images/octopus.png","https://8000-teresabowe-fishshuffleg-f4uffbtqz7m.ws-eu46.gitpod.io/assets/images/crab.png","https://8000-teresabowe-fishshuffleg-f4uffbtqz7m.ws-eu46.gitpod.io/assets/images/seahorse.png"];
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
    
    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", function() {
        checkAnswer(shuffle);
    });   
    
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
    console.log("seaAnimals after splice")
    console.log(seaAnimals);
    
    };
};

function checkAnswer(shuffle) {
    
    console.log("Selection from user")
    console.log(seaAnimals);
    console.log("Selection from shuffle")
    console.log(shuffle);

    //clone seaAnimals
    console.log("Clone seaAnimals");
    var cloneSeaAnimals = [...seaAnimals];
    console.log(cloneSeaAnimals);

    //tidy up user guess before checking for more than one selection of sea animal
    
    cloneSeaAnimals = cloneSeaAnimals.map(x=>x.substring(81, x.length));
    cloneSeaAnimals = cloneSeaAnimals.map(x=>x.substring(0, x.length -4));
    console.log("After edit of user guess cloneSeaAnimals");
    console.log(cloneSeaAnimals);

    

    //function to find out if there is more than one selection of a sea animal

    function getDifference(a, b) {
        return a.filter(element => {
          return !b.includes(element);
        });
    };

    //function to check if the arrays are the same

    Array.prototype.equals = function (array) {
        for (var i = 0, l=this.length; i < l; i++) {
            if (this[i] != array[i]) { 
                return false;   
            }           
        }       
        return true;
    };
         
    if ((getDifference(shuffle, cloneSeaAnimals).length) != 0) {
        /*console.log("Array is empty");*/
        alert(`Oops!! Choose one of each sea animal i.e. ${getDifference(shuffle, cloneSeaAnimals)}`);
        }
        else if
            (shuffle.equals(cloneSeaAnimals)) {
                alert(`Well Done!!! You chose all of the correct sea animals`);
                
        }
        else 
            alert(`Hard luck! go to the next "Try" to see if you can guess correctly!`);
    
    console.log("Check if element 1 is the same")       
    if (shuffle[0] === cloneSeaAnimals[0]) {
        document.getElementById("1").style.border = "thick solid #50C878";
        } else {
            document.getElementById("1").style.border = "thick solid #FF0000 ";
    };

    console.log("Check if element 2 is the same")       
    if (shuffle[1] === cloneSeaAnimals[1]) {
        document.getElementById("2").style.border = "thick solid #50C878";
        } else {
            document.getElementById("2").style.border = "thick solid #FF0000 ";
    };

    console.log("Check if element 3 is the same")       
    if (shuffle[2] === cloneSeaAnimals[2]) {
        document.getElementById("3").style.border = "thick solid #50C878";
        } else {
            document.getElementById("3").style.border = "thick solid #FF0000 ";
    };

    console.log("Check if element 4 is the same")       
    if (shuffle[3] === cloneSeaAnimals[3]) {
        document.getElementById("4").style.border = "thick solid #50C878";
        } else {
            document.getElementById("4").style.border = "thick solid #FF0000 ";
    };


    console.log("End of this test");
    console.log("")
    console.log("")
    
};


